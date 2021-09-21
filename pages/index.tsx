// import fetch from 'isomorphic-unfetch';

import HomePage from '../scenes/HomePage/Home';
import { blogPostData } from '../types/blogfrontMatter';

import sortByDate from '../utils/sortByDate';
import { getAllPosts } from '../utils';
import SeoManager from '../components/SeoManager/SeoManager';

import metaData from '../data/metaData';
import { SWRConfig } from 'swr';

export default function Index(props: { posts: blogPostData[] }) {
  return (
    <SWRConfig value={{ fallback: { isPlaying: false } }}>
      <SeoManager
        pageTitle={metaData.pageTitle}
        title={metaData.title}
        description={metaData.description}
        tags={metaData.tags}
        slug="/"
      />
      <main>
        <HomePage blogMetaData={props.posts} />
      </main>
    </SWRConfig>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts() as blogPostData[];
  const postsSortedByDate = sortByDate(allPosts) as blogPostData[];
  return {
    props: {
      posts: postsSortedByDate,
    },
  };
}
