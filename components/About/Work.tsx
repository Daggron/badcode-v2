import { LinkComponent } from '../Typography';

export default function Work() {
  return (
    <div className="mb-8">
      <p className="mb-4"> March 2020 - Presently</p>
      <p className="mb-4 lh-169">
        Presently I am a Frontend Engineer at{' '}
        <LinkComponent
          type="external"
          href="https://smallcase.com"
          text="smallcase"
        />{' '}
        and on a mission to change the way India invests.
      </p>
      <p className="mb-4 lh-169">
        I mainly handle the Broker Platform and solving challenges with order
        flows and new features and guidelines that came from almighty SEBI. I
        love building the best user experience and be a part of the team which
        is always pushing me to my limits. And as we say{' '}
        <strong>Change the world.</strong>
      </p>
      <p>
        I love to talk about{' '}
        <LinkComponent
          type="external"
          href="https://reactjs.org"
          text="React"
        />{' '}
        <LinkComponent
          type="external"
          href="https://nextjs.org"
          text="Next.js"
        />{' '}
        <LinkComponent
          type="external"
          href="https://testing-library.com/docs/react-testing-library/intro/"
          text="Testing Library"
        />{' '}
      </p>
    </div>
  );
}
