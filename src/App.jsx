import { useState } from "react"
import SelectedContact from "./components/SelectedContact"
import ContactList from "./components/ContactList"

const App = () => {
  const [selectedContactId, setSelectedContactId] = useState(null)
  return (
    <>
      {
      selectedContactId?
      <div>Selected Contact View</div>:
      <ContactList setSelectedContactId={setSelectedContactId}/>
      // <SelectedContact selectedContactId={selectedContactId}/>
      }
    </>
  )
}

export default App
