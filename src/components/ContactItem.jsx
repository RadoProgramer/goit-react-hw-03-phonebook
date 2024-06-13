import React from "react";
import PropTypes from 'prop-types';
import styles from "./Contacts.module.scss";

const ContactItem = ({ name, number, onDelete }) => (
  <li className={styles.contactItem}>
    {name}: {number}
    <button onClick={onDelete}>Delete</button>
  </li>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
