import HandWave from '../../components/Hand/Hand';
import { Heading, LinkComponent } from '../../components/Typography';

export default function FouroFour() {
  return (
    <>
      <div className="flex mb-2">
        <Heading.H2 text="Area 51" className="mr-4" />
        <HandWave />
      </div>
      <p className="mb32">You have reached an area that is not available.</p>
      <p className="mb-4">
        Please be safe and return to the{' '}
        <LinkComponent type="internal" text="Home" href="/" />.
      </p>
    </>
  );
}
