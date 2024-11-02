import { useEffect, useState } from "react"

const SelectedContact = ({selectedContactId, setselectedContactId}) => {
  const [contact, setContact] = useState([])
  useEffect(()=> {
    const getSingleContact = async () => {
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
      const retrievedSingleContact = await response.json()
      console.log(retrievedSingleContact);
      setContact(retrievedSingleContact);
    }
    getSingleContact();
  }, [])
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">singleContact</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        <tr>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.phone}</td>
        </tr>
      </tbody>
    </table>
  )}

export default SelectedContact