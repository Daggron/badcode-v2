import React from 'react';
import Head from 'next/head';
import metaData from '../../data/metaData';

type SeoManagerProps = {
  /** Title of the page shown in browser tabs */
  pageTitle: string;
  /** title of the page for seo */
  title: string;
  /** description of page for google search rankings */
  description: string;
  /** used for keywords of the page for search engine indexing */
  tags: string;
  /**
   * the url of the page
   */
  slug: string;
};

const Seo = (props: SeoManagerProps) => (
  <>
    <Head>
      <title>{props.pageTitle}</title>

      <meta name="title" content={props.title} />

      <meta name="description" content={props.description} />

      <meta name="keywords" content={props.tags} />

      <meta name="author" content="Abhay Sharma, daggron" />

      {/* Og tags */}
      <meta property="og:type" content="article" />

      <meta property="og:title" content={props.title} />

      <meta property="og:description" content={props.description} />

      <meta property="og:image" content={metaData.openGraph.image.url} />

      <meta property="og:url" content={`https://badcode.dev${props.slug}`} />

      <meta property="og:site_name" content={metaData.siteName} />

      {/* Twitter cards */}
      <meta name="twitter:title" content={props.title} />

      <meta name="twitter:description" content={props.description} />

      <meta name="twitter:image" content={metaData.twitter.image} />

      <meta name="twitter:creator" content={metaData.twitter.handle} />

      <meta name="twitter:card" content={metaData.twitter.cardType} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  </>
);

export default React.memo(Seo);
