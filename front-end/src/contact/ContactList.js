import { useState } from "react";

import ContactItem from "./ContactItem";
import "./ContactList.css";

const ContactList = (props) => {
  const [selected, setSeleted] = useState("");
  const setSelectedContactHandler = (selectedId) => {
    setSeleted(selectedId);
  };

  return (
    <ul className={"contact-list"}>
      {props.contacts
        .filter((contact) =>
          Object.values(contact).some((value) => value.toString().indexOf(props.searchKeyword) !== -1))
        .map((contact) => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            phone={contact.phone}
            onClick={props.onClick}
            onSelected={setSelectedContactHandler}
            selected={selected}
          />
        ))}
    </ul>
  );
};

export default ContactList;
