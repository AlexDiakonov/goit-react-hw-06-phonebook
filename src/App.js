import React, { Component } from "react";
import ContactForm from "./Components/ContactForm.jsx";
import Filter from "./Components/Filter";
import ContactItem from "./Components/ContactsList.jsx";
import style from "./ModuleStyles/PhoneBook.module.css";
import { CSSTransition } from "react-transition-group";
import "./ModuleStyles/animations.css";
import ParticlesBg from "particles-bg";
import { connect } from "react-redux";

class App extends Component {
  componentDidUpdate(prevProp, prevState) {
    if (prevProp.contacts !== this.props.contacts) {
      localStorage.setItem("contact", JSON.stringify(this.props.contacts));
    }
  }
  render() {
    console.log(this.props.contacts);
    const { contacts } = this.props;
    return (
      <div className={style.phonebook}>
        <ParticlesBg type="circle" bg={true}></ParticlesBg>
        <CSSTransition
          appear={true}
          in={true}
          timeout={2000}
          unmountOnExit
          classNames="logo"
        >
          <h2>Phonebook</h2>
        </CSSTransition>
        <ContactForm />
        <h2>Contacts</h2>
        {contacts.length > 1 && <Filter />}

        <ContactItem />
      </div>
    );
  }
}
const mSTP = (state) => ({
  contacts: state.contacts.items,
});

export default connect(mSTP)(App);
