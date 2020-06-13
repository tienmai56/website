import React from 'react';
import styled from 'styled-components';

import ArticleCard from './ArticleCard';

const GroupBox = styled.table`
  margin: 2rem;
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: auto;
`;

const GroupRowBox = styled.tr`

`;

const GroupItemBox = styled.th`

`;

const GenerateTable = (data, th_per_tr) => {
  th_per_tr = Math.floor( window.outerWidth/300);
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