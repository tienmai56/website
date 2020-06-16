import React from 'react';
import styled from 'styled-components';

import ArticleCard from './ArticleCard';

const GroupBox = styled.table`
  width: 100%;
  height: 100%;
  margin: auto;
  margin-top: 6rem;
  display: flex;
  justify-content: center;
`;

const GroupRowBox = styled.tr`
  overflow: hidden;
  position: relative;
  width: 100%;
  display: flex;
`;

const GroupItemBox = styled.th`
  margin: 0 0.1rem;
  padding: 0.5rem;
  display: flex;
  width: 30rem;
  transition all .2s ease;
  &:hover {
    transform: translate(0px, -0.4rem);
  }
}
`;

const GenerateTable = (data, th_per_tr) => {
  th_per_tr = Math.floor( Math.min(window.outerWidth, 1140)/302 );
  let trs = [];
  for(let i = 0; i < data.length; i += th_per_tr) {
    let ths = [];
    for(let j = i; j < Math.min(i + th_per_tr, data.length); ++j) {
      ths.push(
        <GroupItemBox key ={i + " " + j}>
          <ArticleCard article={data[j]} />
        </GroupItemBox>
      );
    }
    trs.push(
      <GroupRowBox key ={i}>
        {ths}
      </GroupRowBox>
    );
  }
  return trs;
};

const ArticleCardGroup = (props) => {
  return (
    <GroupBox>
      <tbody>
        {GenerateTable(props.articles, 4)}
      </tbody>
    </GroupBox>
  );
}

export default ArticleCardGroup;