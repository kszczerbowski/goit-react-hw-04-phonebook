import React, { Component } from 'react';
import {
  StyledFilterArea,
  StyledLabel,
  StyledFilterInput,
} from './Filter.styled';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    return (
      <StyledFilterArea>
        <StyledLabel htmlFor="filterInput">Find contacts by name</StyledLabel>
        <StyledFilterInput
          onChange={this.props.onFilter}
          id="filterInput"
          type="text"
          name="filter"
        ></StyledFilterInput>
      </StyledFilterArea>
    );
  }
}

Filter.propTypes = {
  onFilter: PropTypes.func,
};
