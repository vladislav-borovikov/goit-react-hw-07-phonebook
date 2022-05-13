import { useDeleContactMutation } from '../../redax/redusers'
import { SpinnerInfinity } from 'spinners-react';


const ContactItem = ({ id, name, number}) => {
  const [deletContact, {isLoading: isDeliting}] = useDeleContactMutation()

    
    return (   
      <li key={id}>
          <p>
            {name} {number} 
          </p>
          <button type="submit" onClick={() => deletContact(id)}>
                  {isDeliting ? <SpinnerInfinity size="35" /> : 'DELETE'}
          </button>
        </li>
    
    
  );
};

export default ContactItem;