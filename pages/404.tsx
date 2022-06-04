import SeoManager from '../components/SeoManager/SeoManager';
import metaData from '../data/metaData';
import FouroFour from '../scenes/404/FouroFour';

export default function Page404() {
  return (
    <div>
      <SeoManager
        pageTitle="404"
        title="404"
        description="404 page not found"
        tags={metaData.tags}
        slug="/"
      />
      <FouroFour />
    </div>
  );
}
