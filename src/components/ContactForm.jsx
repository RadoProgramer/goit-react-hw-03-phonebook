import React, { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid/non-secure";
import styles from "./Contacts.module.scss";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    numberError: "",
  };

  handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    if (name === "number") {
      this.setState({ [name]: this.formatPhoneNumber(value) }, () => {
        this.validateNumber();
      });
    } else {
      this.setState({ [name]: value });
    }
  };

  formatPhoneNumber = (value) => {
    const cleaned = ("" + value).replace(/\D/g, "");

    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

    if (match) {
      return [match[1], match[2], match[3]].filter(Boolean).join("-");
    }

    return value;
  };

  validateNumber = () => {
    const { number } = this.state;
    const phonePattern = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    if (!phonePattern.test(number)) {
      this.setState({ numberError: "Invalid phone number format" });
    } else {
      this.setState({ numberError: "" });
    }
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, number, numberError } = this.state;

    if (numberError) {
      alert("Please fix the errors before submitting");
      return;
    }

    this.props.onAddContact(name, number);
    this.setState({ name: "", number: "" });
  };

  render() {
    const nameId = nanoid();
    const numId = nanoid();
    const { numberError } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input
          id={nameId}
          type="text"
          name="name"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor={numId}>Phone number</label>
        <input
          id={numId}
          type="tel"
          name="number"
          required
          value={this.state.number}
          onChange={this.handleChange}
        />
        {numberError && <span className={styles.error}>{numberError}</span>}
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
