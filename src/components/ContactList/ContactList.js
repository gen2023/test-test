import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import contactsActions from '../../redux/contacts/contacts-actions';

import './Contact.css';

const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className="contextListContacts">
    <header className="listContacts">
      <span className="headerList">name</span>
      <span className="headerList">telephone</span>
      <span className="headerList">action</span>
    </header>

    {contacts.map(({ id, name, number }) => (
      <ContactListItem
        key={id}
        name={name}
        number={number}
        onRemove={() => onRemoveContact(id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: propTypes.oneOfType([
    propTypes.arrayOf(
      propTypes.exact({
        id: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        number: propTypes.number.isRequired,
      }),
    ),
    propTypes.array,
  ]),
  onRemoveContact: propTypes.func.isRequired,
};
const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onRemoveContact: id => dispatch(contactsActions.removeContact(id)),
  onToggleCompleted: () => null,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
