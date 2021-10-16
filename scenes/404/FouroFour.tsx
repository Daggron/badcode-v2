import HandWave from '../../components/Hand/Hand';
import { Heading } from '../../components/Typography';
import Link from 'next/link';

import styles from './FouroFour.module.css';

export default function FouroFour() {
  return (
    <>
      <div className="flex mb-2">
        <Heading.H2 text="Area 404" className="mr-4" />
        <HandWave />
      </div>
      <p className="mb32">You have reached an area that is not available.</p>
      <p className="mb32">
        Looks like you are lost. You've probably mis-typed the url or you are
        requesting a page which is moved to a new location. I'm guessing you
        spelled something wrong. Can you double check that URL?
      </p>
      <Link href="/">
        <a className={styles.button}>Return Home</a>
      </Link>
    </>
  );
}
