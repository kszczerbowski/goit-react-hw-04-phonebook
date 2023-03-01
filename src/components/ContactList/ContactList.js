import React from 'react';
import { StyledContactList } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ children }) => {
  return <StyledContactList id="contactsList">{children}</StyledContactList>;
};

ContactList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
