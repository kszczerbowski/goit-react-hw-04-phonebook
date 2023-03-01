import React from 'react';
import {
  StyledInputArea,
  StyledInput,
  StyledLabel,
  StyledAddButton,
} from './ContactForm.styled';
import PropTypes from 'prop-types';

export const ContactForm = ({ onSubmit }) => {
  return (
    <StyledInputArea>
      <form onSubmit={onSubmit}>
        <StyledLabel htmlFor="nameInput">Name</StyledLabel>
        <StyledInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="nameInput"
        />
        <StyledLabel htmlFor="phoneInput">Phone number</StyledLabel>
        <StyledInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="phoneInput"
        />
        <StyledAddButton type="submit">Add contact</StyledAddButton>
      </form>
    </StyledInputArea>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};
