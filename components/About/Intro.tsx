import HandWave from '../Hand/Hand';
import { Heading, LinkComponent } from '../Typography';

function Intro() {
  return (
    <div className="mb32">
      <div className="flex mb-4 align-center">
        <Heading.H2 text="Hey" className="mr-4" />
        <HandWave />
      </div>
      <p>
        I’m Abhay. I&apos;m a developer, I work at &nbsp;
        <LinkComponent
          type="external"
          href="https://smallcase.com"
          text="smallcase"
        />
        &nbsp; as a Frontend Engineer.
      </p>
    </div>
  );
}

export default Intro;
