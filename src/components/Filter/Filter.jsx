import React from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid/non-secure";
import styles from "./Filter.module.scss";

const Filter = ({ filter, onChange }) => {
  const searchId = nanoid();
  return (
    <div className={styles.filter}>
      <label htmlFor={searchId}>Find contact</label>
      <input
        type="text"
        id={searchId}
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
