import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";



import {useFethPhonebookQuery, useCreateContactMutation, addFilter} from '../../redax/redusers'


import RenderContacts from "../RenderContact/RenderContact";



const  Phonebook = () => {

  const {data} = useFethPhonebookQuery()
  const [createContact] = useCreateContactMutation()
  const dispatch = useDispatch()

  const stateFilter = useSelector(state => state.filter.filter)

   const changFilter = (event) => {
    dispatch(addFilter(event.currentTarget.value))
  };

  const visibleRender = () => {
    const normalizedFilter = stateFilter.toLocaleLowerCase();
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
        <Filter value={stateFilter} onChange={changFilter} />
        {data && <RenderContacts
          value={visibleRender()}/>}
      </div>
    );
  
}

export default Phonebook;
