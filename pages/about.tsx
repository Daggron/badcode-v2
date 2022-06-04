import React from 'react';
import SeoManager from '../components/SeoManager/SeoManager';
import metaData from '../data/metaData';
import About from '../scenes/About/About';

export default function AboutPage() {
  return (
    <>
      <SeoManager
        pageTitle="Bad Code | About me"
        title={metaData.title}
        description={metaData.description}
        tags={metaData.tags}
        slug="/about"
      />
      <About />
    </>
  );
}

// export async function getServerSideProps() {
//   const res = await getTopTracks();
//   const tracks = await res.json();
//   return {
//     props: {
//       tracks: tracks.items,
//     },
//   };
// }
