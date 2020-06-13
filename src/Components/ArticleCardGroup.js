import React from 'react';
import styled from 'styled-components';

import ArticleCard from './ArticleCard';

const GroupBox = styled.table`
  margin: 2rem;
  width: 100%;
  height: 100%;
  margin: auto;
`;

const GroupRowBox = styled.tr`
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const GroupItemBox = styled.th`
  margin: 0;
  padding: 0;
  display: inline;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
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