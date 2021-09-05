import HomePage from "../scenes/HomePage/Home";
import { blogPostData } from "../types/blogfrontMatter";

import sortByDate from '../utils/sortByDate';
import { getAllPosts } from "../utils";
import SeoManager from "../components/SeoManager/SeoManager";

export default function Index(props: {posts: blogPostData[]}) {
  return (
    <>
     <SeoManager
        pageTitle="Home"
        title="A frontend development blog by Abhay Sharma"
        description="This is a frontend Blog by Abhay Sharma and it is used as a platform to share knoweldge and learnings, i got with my experience"
        tags="Frontend Development, React.js, Javascript, State Management, Html, css"
        slug="/"
     />
     <main>
      <HomePage
        blogMetaData={props.posts}
      />
     </main>
    </>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts() as blogPostData[];
  const postsSortedByDate = sortByDate(allPosts) as blogPostData[];
  return {
    props: {
      posts: postsSortedByDate,
    }
  }
};