import React from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid/non-secure";

const Filter = ({ filter, onChange }) => {
  const searchId = nanoid();
  return (
    <>
      <label htmlFor={searchId}>Find contact</label>
      <input
        type="text"
        id={searchId}
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
