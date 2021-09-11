import Description from '../../components/About/Description';
import Intro from '../../components/About/Intro';
import { Heading } from '../../components/Typography';

function About() {
  return (
    <div>
      <Intro />
      <Heading.H3 text="About Me" className="mb-4" />
      <Description />
    </div>
  );
}

export default About;
