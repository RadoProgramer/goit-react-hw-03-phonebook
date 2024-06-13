import { nanoid } from "nanoid/non-secure";
import { Component } from "react";
import PropTypes from "prop-types";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import styles from "./Contacts.module.scss";

export default class Contacts extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem("contacts")) || [],
    filter: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isDuplicate) {
      alert(`${name} is already in the contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleFilterChange = (ev) => {
    this.setState({ filter: ev.currentTarget.value });
  };

  render() {
    return (
      <div className={styles.contacts}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
