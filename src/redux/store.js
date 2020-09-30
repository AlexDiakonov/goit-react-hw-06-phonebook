import contactsReducer from "../redux/contactsReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { contacts: contactsReducer },
});

export default store;
