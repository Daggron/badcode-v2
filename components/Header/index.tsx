import { memo } from 'react';
import Link from 'next/link';

import Line from '../Line';
import { Heading, LinkComponent } from '../Typography';
import FeatureNavBar from '../FeatureNavBar/FeatureNavBar';

const Header = () => (
  <header className="mb64 pt32 pb32">
    <div className="flex justify-between">
      <Link href="/">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <Heading.H1
            text="Bad Code"
            className="mb12 tracking-wider w-28 bg-yellow-500"
          />
        </a>
      </Link>
      <FeatureNavBar />
    </div>
    <nav className="md:flex justify-between mb4">
      <ul className="grid grid-cols-4 grid-flow-col grid-rows-1 gap-4">
        <li>
          <LinkComponent type="internal" text="Home" href="/" />
        </li>
        <li>
          <LinkComponent type="internal" text="About" href="/about" />
        </li>
      </ul>
      <ul className="flex justify-between">
        <li className="mr12">
          <LinkComponent
            type="external"
            text="Github"
            href="https://github.com/daggron"
          />
        </li>
        <li className="mr12">
          <LinkComponent
            type="external"
            text="Portfolio"
            href="https://daggron.github.io"
          />
        </li>
        <li className="mr12">
          <LinkComponent
            type="external"
            text="Medium"
            href="https://returnofking04.medium.com/"
          />
        </li>
        <li>
          <LinkComponent
            type="external"
            text="LinkedIn"
            href="https://www.linkedin.com/in/abhay-stark/"
          />
        </li>
      </ul>
    </nav>
    <Line />
  </header>
);

export default memo(Header);
