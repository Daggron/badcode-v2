import LinkComponent from '../../components/Typography/Links/index'

export const Template = ({type, text, href}) => {
  return (
    <LinkComponent
      type={type}
      text={text}
      href={href}
    />
  )
};

export default {
  title: 'Typography/Link',
  component: LinkComponent,
  argTypes: {
    type: {
      options: ['internal', 'external'],
      control: {type: 'radio' },
    },
    text: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
  },
  args: {
    type: 'internal',
    text: 'Link',
    href: 'https://www.google.com',
  }
}