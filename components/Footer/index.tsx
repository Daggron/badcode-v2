import Line from '../Line';
import { LinkComponent } from '../Typography';

export default function Footer() {
  return (
    <footer className="Footer mt-12">
      <Line />
      <p className="mb-8">
        &copy; {new Date().getFullYear()} by Abhay Sharma. All rights reserved.
      </p>
      <div className="flex">
        <ul className="mr-32">
          <li>
            <LinkComponent type="internal" text="Home" href="/" />
          </li>
          <li>
            <LinkComponent type="internal" text="About" href="/about" />
          </li>
        </ul>
        <ul>
          <li className="">
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
      </div>
    </footer>
  );
}