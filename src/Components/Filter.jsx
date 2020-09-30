import React from "react";
import style from "../ModuleStyles/PhoneBook.module.css";
import PropTypes from "prop-types";
import taskActions from "../redux/contactActions";
import { connect } from "react-redux";

function Filter({ value, handleFilter }) {
  return (
    <form className={style.searchForm}>
      <span className={style.formDescription}>Find contacts by name</span>
      <input
        className={style.searchInput}
        onChange={(e) => handleFilter(e.target.value)}
        value={value}
        type="text"
      ></input>
    </form>
  );
}
const mSTP = (state) => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = {
  handleFilter: taskActions.doFilter,
};

export default connect(mSTP, mapDispatchToProps)(Filter);

Filter.propTypes = {
  handleFilter: PropTypes.func,
  filter: PropTypes.string,
};
