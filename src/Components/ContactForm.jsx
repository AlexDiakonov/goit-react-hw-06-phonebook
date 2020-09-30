import React, { Component } from "react";
import style from "../ModuleStyles/PhoneBook.module.css";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";
import { connect } from "react-redux";
import taskActions from "../redux/contactActions";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class ContactForm extends Component {
  state = { name: "", number: "" };
  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleChangeNum = (e) => {
    this.setState({ number: e.target.value });
  };
  notifiation = () => {
    toast.error(`${this.state.name} is already in list!`, {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const contacts = this.props.contacts;
    const { name } = this.state;
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      this.notifiation();
    } else {
      this.setState({ name: "", number: "" });
      this.props.addContact(this.state.name, this.state.number);
    }
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={style.submitForm} onSubmit={this.handleSubmit}>
        <span className={style.details}>Name: </span>
        <input type="text" value={name} onChange={this.handleChange}></input>
        <br></br>
        <span className={style.details}>Phone:</span>
        <InputMask
          mask="(999)-999-99-99"
          type="text"
          value={number}
          onChange={this.handleChangeNum}
        ></InputMask>

        <br></br>
        <button
          className={style.addContactBtn}
          onSubmit={this.handleSubmit}
          type="submit"
        >
          {name ? `Add ${name}` : "Add Contact"}
        </button>
      </form>
    );
  }
}

const mDPT = {
  addContact: taskActions.addContact,
};
const mSTP = (state) => ({
  contacts: state.contacts.items,
});

export default connect(mSTP, mDPT)(ContactForm);

ContactForm.propTypes = {
  contacts: PropTypes.array,
  addContact: PropTypes.func,
};
