import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactsForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Modal from './Modal';

import '../../node_modules/modern-normalize/modern-normalize.css';

class App extends Component {
  state = {
    // message: '',
    showModal: this.props.showModal,
  };
  static propTypes = {
    message: propTypes.string,
    showModal: propTypes.bool,
  };

  closeModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    // this.props.showModal = false;
  };

  render() {
    const { showModal } = this.state;
    const { message } = this.props;
    // const { message, showModal } = this.props;
    //console.log(showModal);
    return (
      <>
        {message !== '' && showModal ? (
          <Modal onClose={this.closeModal}>{message}</Modal>
        ) : null}

        <h1>Phonebook</h1>
        <ContactsForm />
        <h2>Contact</h2>

        <Filter />

        <ContactList />
      </>
    );
  }
}

const mapStateToProps = state => {
  //console.log(state.message);
  return {
    message: state.contacts.message,
    showModal: state.contacts.showModal,
  };
};

export default connect(mapStateToProps)(App);
