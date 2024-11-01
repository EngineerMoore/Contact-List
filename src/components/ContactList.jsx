import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];


const ContactList = ({setSelectedContactId}) => {
  const [contacts, setContacts] = useState(dummyContacts);
  useEffect(()=>{
    const fetchContacts = async () => {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`);
        const contactsData = await response.json();
        console.log(contactsData);
        setContacts(contactsData);
      } catch (error) {
        (console.error(error));
      }
    }
    fetchContacts();
  },[])
 console.log(contacts)
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {
          contacts.map((contact)=>{
            return <ContactRow key ={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>
          })
        }
      </tbody>
    </table>
    );
}
export default ContactList

/* Goal: when a user clicks a contact row a new page is 
  created displaying their details */

  /*create the components I'd like rendered to 
  the page */
  // add real data
    // loop through data and pull specific person's info
  // place into a function
  // add function to an event listener on the row

  // place the new content into a seperate component

      /* add a useState to transfer the info down to the component */
        /* we want to each page to be a direct child of the App component
        so we need the data to be stored on the app so we can eventually
        transfer it down to both pages.*/
        // useState needs to be added to app
    // place component on a seperate page and connect it to the App

  // Make page only show clicked contact details
    /* use a ternary operator to only show the details page if the
    Contactlist isn't  showing*/
      /* use a useState to change the state (information) of the page based
      if the boolean is true or false on */
        /* TODO: test what happens if we set the single contact as the
        the truthy value? */
  
  // create a back button on the single page
    // create back component
    // change useState for ternary back to true