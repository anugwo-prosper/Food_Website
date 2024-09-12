import React, { useContext } from 'react';
import styled from 'styled-components';
import { FoodAPI } from '../Fetch';
import Apiitems from './Apiitems';

const Apilist = () => {
  let { myapi, searchKey } = useContext(FoodAPI);

  const filteredResults = myapi.filter(item => 
    item.title.toLowerCase().includes(searchKey.toLowerCase())
  );

  if (!filteredResults || !Array.isArray(filteredResults)) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <Wrapper>
      {filteredResults.map(x => (
        <Apiitems key={x.id} tunde={x} />
      ))}
    </Wrapper>
  );
};

// Styled-components
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #fdf3f0; /* Light neutral color matching search bar */
  gap: 20px;
`;

const Loading = styled.div`
  color: #ff6347; /* Matches the search bar */
  font-size: 1.5rem;
  margin-top: 50px;
`;

export default Apilist;
