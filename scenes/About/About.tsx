import Description from '../../components/About/Description';
import Intro from '../../components/About/Intro';
import Work from '../../components/About/Work';
import { Heading } from '../../components/Typography';

function About() {
  return (
    <div>
      <Intro />
      <Heading.H3 text="About Me" className="mb-4" />
      <Description />
      <Heading.H3 text="Work" className="mb-4" />
      <Work />
    </div>
  );
}

export default About;
