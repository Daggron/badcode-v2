import Link from 'next/link';

export interface LinkProps {
  /**
   * The text which will be displayed in the link.
   */
  text: string;
  /**
   * The URL which will be opened when the link is clicked.
   */
  href: string;
  /**
   * The type of the link by which is decided to use internal link by next js or normal a tag
   * for extrenal website links.
   */
  type: 'internal' | 'external';
}

/**
 * A custom link component to maintain the type of link and design pattern across the code.
 * 
 * @param {string} text - The text to display on the link.
 * @param {string} href - The href of the link.
 * @param {string} type - The type of link. 
*/
export default function LinkComponent({ text, href, type }: LinkProps) {
  switch(type) {
    case 'internal':
      return (
        <Link href={href}>
          <a
            className="text-blue-400 visited:text-purple-600 hover:text-blue-700 hover:shadow-lg"
          >
            {text}
          </a>
        </Link>
      )
    case 'external':
      return (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-400 visited:text-purple-600 hover:text-blue-700 hover:shadow-lg"
        >
          {text}
        </a>
      )
    default: return null;
  }
}
