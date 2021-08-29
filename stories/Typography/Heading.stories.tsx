import {Heading} from '../../components/Typography';

export const H1 = (props) => <Heading.H1 text={props.text} />;

export const H2 = (props) => <Heading.H2 text={props.text} />;

export const H3 = (props) => <Heading.H3 text={props.text} />;

export const H4 = (props) => <Heading.H4 text={props.text} />;

export const H5 = (props) => <Heading.H5 text={props.text} />;

export const H6 = (props) => <Heading.H6 text={props.text} />;

export default {
  title: 'Typography/Heading/H2',
  component: Heading.H2,
  args: {
    text: 'Heading',
  }
}