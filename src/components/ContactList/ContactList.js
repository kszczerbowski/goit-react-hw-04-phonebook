import React, { Component } from 'react';
import { StyledContactList } from './ContactList.styled';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    return (
      <StyledContactList id="contactsList">
        {this.props.children}
      </StyledContactList>
    );
  }
}

ContactList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
