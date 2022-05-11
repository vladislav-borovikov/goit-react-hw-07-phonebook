import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import {useState} from "react";
import toast, { Toaster } from 'react-hot-toast';


import {useFethPhonebookQuery, useDeleContactMutation, useCreateContactMutation} from '../../redax/redusers'


import RenderContacts from "../RenderContact/RenderContact";



const  Phonebook = () => {

  const {data} = useFethPhonebookQuery()
  const [deletContact, {isLoading: isDeliting}] = useDeleContactMutation()
  const [createContact] = useCreateContactMutation()

  const [filter, setFilter] = useState("")
  
  const changFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const visibleRender = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return data.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  const createNewContact = (e) => {
    const findedContact = data.find(
      (contact) => contact.name.toLocaleLowerCase() === e.name.toLowerCase()
    );
    if (findedContact) {
      toast.error(`${e.name} is already in contacts.`);
    } else
    createContact(e);

  }
      return (
      <div>
        <h1> Phonebook </h1>
        <Form onSubmit={createNewContact} />
        <Toaster />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={changFilter} />
        {data && <RenderContacts
          value={visibleRender()}
          onDelete={deletContact}
          deleting={isDeliting}
        />}
      </div>
    );
  
}

export default Phonebook;
