import styled from 'styled-components';
import { Box } from './Box';

const Text = styled(Box)`
  text-align: ${props => (props.textAlign ? props.textAlign : "initial")};
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: ${props => (props.fontSize ? props.fontSize : "initial")};
  text-transform: ${props => (props.textTransform ? props.textTransform : "initial")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "initial")};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "initial")};
  color: ${props => (props.color ? props.color : "initial")};
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : "initial")};
  display: ${props => (props.display ? props.display : "initial")};
`;

const ColorfulText = styled(Text)`
  background-image: linear-gradient(to right, #e80872, #592368);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const NormalText = styled(Text)`
  color: #f0f0f0;
`;

export { NormalText, ColorfulText }