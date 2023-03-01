import { StyledContainer } from './App.styled';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactListElement } from './ContactListElement/ContactListElement';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    this.setState({ contacts: this.getContactsFromLocalStorage() });
  }

  handleClearForm = event => {
    const form = event.currentTarget;
    form.elements.name.value = '';
    form.elements.number.value = '';
  };

  handleDeleteContact = nameToDelete => {
    const namesArray = this.state.contacts.map(contact => contact.name);
    const index = namesArray.indexOf(nameToDelete);
    this.setState({
      ...this.state.contacts.splice(index, 1),
    });
  };

  handleAddContact = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (
      this.state.contacts
        .map(contact => contact.name)
        .includes(form.elements.name.value)
    ) {
      window.alert(`${form.elements.name.value} is already in contacts!`);
    } else {
      this.setState({
        contacts: [
          ...this.state.contacts,
          {
            name: form.elements.name.value,
            number: form.elements.number.value,
            id: nanoid(),
          },
        ],
      });
    }
    this.handleClearForm(event);
    document.querySelector('input#nameInput').focus();
  };

  handleFilter = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getContactsFromLocalStorage = () => {
    const arrOfValues = Object.values({ ...localStorage });
    const arrOfObjects = arrOfValues.map(record => JSON.parse(record));
    return arrOfObjects;
  };

  render() {
    const filteredAndSortedContacts = this.state.contacts
      .filter(contact => {
        return contact.name
          .toLowerCase()
          .includes(this.state.filter.toLowerCase());
      })
      .sort((firstContact, secondContact) =>
        firstContact.name.localeCompare(secondContact.name)
      );
    return (
      <StyledContainer>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} />
        <ContactList>
          {filteredAndSortedContacts.map(contact => {
            return (
              <ContactListElement
                key={contact.name}
                id={contact.id}
                name={contact.name}
                number={contact.number}
                onDeleteContact={this.handleDeleteContact}
              />
            );
          })}
        </ContactList>
      </StyledContainer>
    );
  }
}
