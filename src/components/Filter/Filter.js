import React from 'react';
import {
  StyledFilterArea,
  StyledLabel,
  StyledFilterInput,
} from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onFilter }) => {
  return (
    <StyledFilterArea>
      <StyledLabel htmlFor="filterInput">Find contacts by name</StyledLabel>
      <StyledFilterInput
        onChange={onFilter}
        id="filterInput"
        type="text"
        name="filter"
      ></StyledFilterInput>
    </StyledFilterArea>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func,
};
