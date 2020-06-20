import styled from 'styled-components';

const FlexBox = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: ${props => (props.wrap ? "wrap" : "nowrap")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "1140px")};
  @media only screen and (max-width: 56.25em) {
    flex-direction: ${props => (props.smallDirection ? props.smallDirection : "column")};
  }
`;

const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: ${props => (props.margin ? props.margin : "auto")};
  padding: ${props => (props.padding ? props.padding : "1rem")};
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "auto")};
  @media only screen and (max-width: 56.25em) {
    flex-direction: ${props => (props.smallDirection ? props.smallDirection : "row")};
    width: ${props => (props.smallWidth ? props.smallWidth : "auto")};
    height: ${props => (props.smallHeight ? props.smallHeight : "auto")};
    margin: ${props => (props.smallMargin ? props.smallMargin : (props.margin ? props.margin : "auto"))};
  }
`;

export { FlexBox, FlexItem };