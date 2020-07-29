import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const saveContact = createAction('contacts/save', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

const removeContact = createAction('contacts/remove');
const changeFilter = createAction('contacts/changeFilter');

export default { saveContact, removeContact, changeFilter };
