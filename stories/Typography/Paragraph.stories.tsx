import { Paragraph } from "../../components/Typography";

export const Template = ({ children, fontMedium }) => (
  <Paragraph fontMedium={fontMedium}>
    { children }
  </Paragraph>
)

export default {
  title: "Typography/Paragraph",
  component: Paragraph,
  args: {
    children: 'Hello, world!',
  }
}