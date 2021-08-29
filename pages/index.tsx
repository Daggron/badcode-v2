import { Head } from "next/document";

import HomePage from "../scenes/HomePage/Home";
import { blogFrontMatter } from "../types/blogfrontMatter";

import sortByDate from '../utils/sortByDate';
import { getAllPosts } from "../utils";



export default function Index(props) {
  return (
    <div>
     <>
        <title>Home</title>
        <meta name="description" content="A blog about frontend development" />
        <meta name="title" content="Bad Code" />
        <meta name="author" content="Abhay Sharma (Daggron)" />
        <meta name="keywords" content="frontend blog, frontend development, react.js, vue.js, html,css" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     </>
     <HomePage
        blogMetaData={props.posts}
     />
    </div>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts() as blogFrontMatter[];
  const postsSortedByDate = sortByDate(allPosts) as blogFrontMatter[];
  return {
    props: {
      posts: postsSortedByDate,
    }
  }
};