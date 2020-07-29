import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import './ContactsForm.css';

import contactsActions from '../../redux/contacts/contacts-actions';

class ContactsForm extends Component {
  static propTypes = {
    onContact: propTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    const { onContact } = this.props;

    event.preventDefault();
    onContact(this.state);
    this.resetForm();
  };

  resetForm() {
    this.setState({ name: '', number: '' });
  }

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Name
            <input
              type="text"
              className="input"
              placeholder="Enter name"
              value={name}
              name="name"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Number
            <input
              type="text"
              className="input"
              placeholder="Enter number"
              value={number}
              name="number"
              onChange={this.handleChange}
            />
          </label>
        </div>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onContact: contact => dispatch(contactsActions.saveContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactsForm);
