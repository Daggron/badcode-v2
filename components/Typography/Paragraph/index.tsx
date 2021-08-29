import React from 'react';

type Props = {
  /**
   *  the text that needs to be rendered
   */
  children: React.ReactNode,
  /**
   * Whether to use the medium font size.
   */
  fontMedium?: boolean,
}

/**
 * Paragraph component to be used for typography.
 * 
 * @param {Object} props - the prop object
 * @param {React.ReactNode} props.children - The text to be displayed.
 * @param {Boolean} props.fontMedium - Whether to use the medium font size.
 */

function Paragraph(props: Props) {
    return (
      <p className={`${props.fontMedium ? 'font-medium' : '' } text-white text-base`}>
        { props.children}
      </p>
    )
}

Paragraph.defaultProps = {
  fontMedium: false,
}

export default React.memo(Paragraph);
