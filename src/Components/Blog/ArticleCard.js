import React from 'react';
import styled from 'styled-components';

const CardBox = styled.div`
  background-color: #000;
	border-radius: 3px;
	border: 1px solid;
	border-image-slice: 1;
  border-width: 1px;
  margin: 0;
	border-image-source: linear-gradient(
		to left,
		#e80872,
		#592368
  );
  padding: 1rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex; 
  box-sizing: border-box;
  flex-direction: column;
  @media only screen and (max-width: 56.25em) {
    flex-direction: row;
  }
`;

const CardImageBox = styled.div`
	margin: auto;
  width: 100%;
  margin-top: 0;
  box-sizing: border-box;
  @media only screen and (max-width: 56.25em) {
    height: 12rem;
    margin: auto;
    width: unset;
    margin-left: 0;
    margin-right: 1rem;
  }
`;

const CardImage = styled.img`
  display: block;
  max-width: 100%;
  @media only screen and (max-width: 56.25em) {
    max-height: 100%;
    max-width: unset;
  }
`;

const CardTextBox = styled.div`
  margin: auto;
  margin-top: 1rem;
  margin-botton: 1rem;
  box-sizing: border-box;
  @media only screen and (max-width: 56.25em) {
    margin: auto
  }
`;

const CardText = styled.span`
  font-size: 1.6rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #f0f0f0;
`;

const LinkCard = styled.a`
  text-decoration: none !important;
  &:hover, &:link, &:active, &:visited {
    text-decoration: none !important;
  }
`;

const ArticleCard = (props) => {
  return (
    <LinkCard href={props.article.link} target="_blank" rel="noopener noreferrer" style={{overflow: "hidden"}}>
      <CardBox>
        <CardImageBox>
          <CardImage src={props.article.image}/>
        </CardImageBox>
        <CardTextBox>
          <CardText>{props.article.title}</CardText>
        </CardTextBox>
      </CardBox>
    </LinkCard>
  );
}

export default ArticleCard;