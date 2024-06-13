import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactItem.module.scss";

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className={styles.contactItem}>
      {contact.name}: {contact.number}
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
