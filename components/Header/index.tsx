import React from 'react';
import Line from '../Line';
import { Heading, LinkComponent } from '../Typography';

const Header = () => {
  return (
    <header className="mb64 pt32 pb32">
      <Heading.H1 text="Bad Code" className="mb12 w-28 bg-yellow-500"/>
      <nav className="flex justify-between mb4">
        <ul className="flex">
          <li className="mr12">
            <LinkComponent type="internal" text="Home" href="/" />
          </li>
          <li>
            <LinkComponent type="internal" text="About" href="/about" />
          </li>
        </ul>
        <ul className="flex">
          <li className="mr12">
            <LinkComponent type="external" text="Github" href="https://github.com/daggron" />
          </li>
          <li className="mr12">
            <LinkComponent type="external" text="Portfolio" href="https://daggron.github.io" />
          </li>
          <li className="mr12">
            <LinkComponent type="external" text="Medium" href="https://returnofking04.medium.com/" />
          </li>
          <li>
            <LinkComponent type="external" text="LinkedIn" href="https://www.linkedin.com/in/abhay-stark/" />
          </li>
        </ul>
      </nav>
      <Line />
    </header>
  );
};

export default React.memo(Header);