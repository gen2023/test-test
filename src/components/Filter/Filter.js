import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts/contacts-actions';

const Filter = ({ value, handleFilter }) => (
  <div>
    <label>
      Find contacts by name
      <input
        type="text"
        className="input"
        placeholder="Enter name"
        value={value}
        name="filter"
        onChange={handleFilter}
      />
    </label>
  </div>
);

Filter.propTypes = {
  value: propTypes.string.isRequired,
  handleFilter: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  handleFilter: event =>
    dispatch(contactsActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
