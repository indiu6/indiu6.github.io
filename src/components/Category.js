import React from 'react';
import styled from 'styled-components';

const CategoryBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 40px;
  margin-bottom: 30px;
  font-size: 1.625rem;
  font-weight: 500;
  color: #333;
  @media screen and (min-width: 768px) {
     justify-content: flex-start;
     opacity: 0;
  }
`;

function Category ({ name }) {
    return (
        <CategoryBlock>{name}</CategoryBlock>
    );
}

export default Category;