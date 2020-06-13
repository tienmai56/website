import React from 'react';
import styled from 'styled-components';

const CardBox = styled.div`
  background-color: #000;
	border-radius: 3px;
	border: 1px solid;
	border-image-slice: 1;
  border-width: 2px;
  width: 30rem;
  height: 100%;
  overflow: hidden;
  display: inline-block;
  margin: 1rem 0 0 0;
	border-image-source: linear-gradient(
		to left,
		#e80872,
		#592368
  );
  padding: 1rem;
  box-sizing: border-box;
`;

const CardImageBox = styled.div`
	margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
`;

const CardImage = styled.img`
  display: block;
	max-width: 100%;
`;

const CardTextBox = styled.div`
  margin-top: 2rem;
`;

const CardText = styled.span`
  font-size: 1.6rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 400;
  line-height: 1.7;
  color: #f0f0f0;
  text-decoration: none !important;
`;

const ArticleCard = (props) => {
  return (
    <a href={props.article.link} target="_blank" rel="noopener noreferrer" style={{overflow: "hidden"}}>
      <CardBox>
        <CardImageBox>
          <CardImage src={props.article.image}/>
        </CardImageBox>
        <CardTextBox>
          <CardText>{props.article.title}</CardText>
        </CardTextBox>
      </CardBox>
    </a>
  );
}

export default ArticleCard;