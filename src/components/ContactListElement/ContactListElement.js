import React, { Component } from 'react';
import { StyledDeleteButton } from './ContactListElement.styled';
import PropTypes from 'prop-types';

export class ContactListElement extends Component {
  render() {
    const { name, number, onDeleteContact } = this.props;
    return (
      <li>
        <span id="name">{name}</span>: {number}
        <StyledDeleteButton
          onClick={() => {
            onDeleteContact(name);
          }}
          type="button"
        >
          Delete
        </StyledDeleteButton>
      </li>
    );
  }

  componentDidMount() {
    const { name, number, id } = this.props;
    localStorage.setItem(
      JSON.stringify(id),
      JSON.stringify({ name, number, id })
    );
  }

  componentWillUnmount() {
    localStorage.removeItem(JSON.stringify(this.props.id));
  }
}

ContactListElement.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  deleteContact: PropTypes.func,
};
