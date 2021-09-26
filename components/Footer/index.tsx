import Line from '../Line';
import { LinkComponent } from '../Typography';
import NowPlaying from '../Spotify/NowPlaying';

export default function Footer() {
  return (
    <footer className="Footer mt-12">
      <Line />
      <NowPlaying />
      <div className="flex">
        <ul className="mr-32 lh-169">
          <li>
            <LinkComponent type="internal" text="Home" href="/" />
          </li>
          <li>
            <LinkComponent type="internal" text="About" href="/about" />
          </li>
        </ul>
        <ul className="lh-169">
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
