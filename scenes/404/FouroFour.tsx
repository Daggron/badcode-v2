import Link from 'next/link';
import HandWave from '../../components/Hand/Hand';
import { Heading } from '../../components/Typography';

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
        Looks like you are lost. You&apos;ve probably mis-typed the url or you
        are requesting a page which is moved to a new location. I&apos;m
        guessing you spelled something wrong. Can you double check that URL?
      </p>
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={styles.linkButton}>Return Home</a>
      </Link>
    </>
  );
}
