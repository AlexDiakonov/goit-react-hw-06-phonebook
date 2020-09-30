import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/add", (name, number) => ({
  payload: {
    contact: {
      name: name,
      id: uuidv4(),
      number: number,
    },
  },
}));
// const addContact = (name, number) => ({
//   type: "contact/add",
//   payload: {
//     contact: {
//       name: name,
//       id: uuidv4(),
//       number: number,
//     },
//   },
// });

const delContact = createAction("contact/delete", (id) => ({
  payload: { id },
}));
// const delContact = (id) => ({
//   type: "contact/delete",
//   payload: { id },
// });

const doFilter = createAction("contact/filter", (filter) => ({
  payload: { filter },
}));
// const doFilter = (filter) => ({
//   type: "contact/filter",
//   payload: { filter },
// });

export default { addContact, doFilter, delContact };
