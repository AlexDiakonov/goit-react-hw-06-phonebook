import { combineReducers } from "redux";
import { toast } from "react-toastify";
import { createReducer } from "@reduxjs/toolkit";
import contactAction from "./contactActions";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const notifiation = () => {
  toast.info(`First, you have to enter the name!`, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

const itemsInStorage = () => {
  const itemsInStor = JSON.parse(localStorage.getItem("contact"));
  if (itemsInStor) {
    return itemsInStor;
  } else {
    return [];
  }
};
const addContact = (state, action) => {
  if (action.payload.contact.name.length >= 1) {
    return [...state, action.payload.contact];
  } else {
    notifiation();
  }
};
const removeContact = (state, action) =>
  state.filter((items) => items.id !== action.payload.id);

const items = createReducer(itemsInStorage(), {
  [contactAction.addContact]: addContact,
  [contactAction.delContact]: removeContact,
});
// const items = (state = itemsInStorage(), { type, payload }) => {
//   switch (type) {
//     case "contact/add":
//       {
//         if (payload.contact.name.length >= 1) {
//           return [...state, payload.contact];
//         } else {
//           notifiation();
//         }
//       }
//       break;
//     case "contact/delete":
//       return state.filter((item) => item.id !== payload.id);

//     default:
//       return state;
//   }
// };
const setFilter = (state, action) => action.payload.filter;

const filter = createReducer("", {
  [contactAction.doFilter]: setFilter,
});
// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case "contact/filter":
//       return payload.filter;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
