type HeadingProps = {
  /**
   * The text to display in the heading.
   */
  text: string;
  /**
   * Add additional styles to the heading
   */
  className?: string;
};

const commonClasses = 'text-decorative font-medium';

export const H1 = (props: HeadingProps) => (
  <h1 className={`text-6xl ${commonClasses} ${props.className}`}>
    {props.text}
  </h1>
);

export const H2 = (props: HeadingProps) => (
  <h2 className={`text-5xl ${commonClasses} ${props.className}`}>
    {props.text}
  </h2>
);

export const H3 = (props: HeadingProps) => (
  <h3 className={`text-4xl ${commonClasses} ${props.className}`}>
    {props.text}
  </h3>
);

export const H4 = (props: HeadingProps) => (
  <h4 className={`text-3xl ${commonClasses} ${props.className}`}>
    {props.text}
  </h4>
);

export const H5 = (props: HeadingProps) => (
  <h5 className={`text-2xl ${commonClasses} ${props.className}`}>
    {props.text}
  </h5>
);

export const H6 = (props: HeadingProps) => (
  <h6 className={`text-xl ${commonClasses} ${props.className}`}>
    {props.text}
  </h6>
);
