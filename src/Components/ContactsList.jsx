import React from "react";
import style from "../ModuleStyles/PhoneBook.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import taskActions from "../redux/contactActions";

function ContactList({ contacts, deleteContact }) {
  return (
    <TransitionGroup component="ul">
      {contacts.map(({ name, id, number }) => (
        <CSSTransition key={id} timeout={300} classNames="items">
          <li key={id}>
            <span className={`${style.contactName} ${style.contactDetails}`}>
              {name + ":"}
            </span>
            <span className={`${style.contactPhone} ${style.contactDetails}`}>
              {number}
            </span>
            <button
              className={style.removeButton}
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const visibleContacts = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return { contacts: visibleContacts };
};
const mDTP = {
  deleteContact: taskActions.delContact,
};
export default connect(mapStateToProps, mDTP)(ContactList);

ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
  onRemove: PropTypes.func,
};
