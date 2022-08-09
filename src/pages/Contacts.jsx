import { useState } from "react";
import allContacts from "../contacts.json";

function Contacts() {
  const [contactsToDisplay, setContactToDisplay] = useState(
    allContacts.slice(0, 5)
  );

  const addContact = () => {
    const randomNum = Math.random() * allContacts.length;
    const randomPos = Math.floor(randomNum);
    const contactToAdd = allContacts[randomPos];
    const arryCopy = [...contactsToDisplay];
    arryCopy.unshift(contactToAdd);
    setContactToDisplay(arryCopy);
  };

  const sortContactByName = () => {
    const arrCopy = [...contactsToDisplay];

    arrCopy.sort((contact1, contact2) => {
      if (contact1.name > contact2.name) {
        return 1;
      } else {
        return -1;
      }
    });
    setContactToDisplay(arrCopy);
  };
  const sortContbyPop = () => {
    const arrCopy = [...contactsToDisplay];

    arrCopy.sort((contact1, contact2) => {
      if (contact1.popularity > contact2.popularity) {
        return -1;
      } else {
        return 1;
      }
    });
    setContactToDisplay(arrCopy);
  };
  const deleteContact = (id) => {
    const filteredArra = contactsToDisplay.filter((eachContact) => {
      return eachContact.id !== id;
    });

    setContactToDisplay(filteredArra);
  };
  return (
    <div>
      <h2>contacts</h2>
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={sortContactByName}>Sort by name</button>
      <button onClick={sortContbyPop}>Sort by popularity</button>

      {contactsToDisplay.map((eachContact) => {
        return (
          <div key={eachContact.id}>
            <table className="table">
              <tr className="th">
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
              </tr>
              <tr className="td">
                <td>
                  <img height={"100px"} src={eachContact.pictureUrl} />
                </td>
                <td>
                  <h3>{eachContact.name}</h3>
                </td>
                <td>
                  <h3>{eachContact.popularity}</h3>
                </td>
                <td>
                  <p>{eachContact.wonOscar && "🏆"} </p>
                </td>
                <td>
                  <p>{eachContact.wonEmmy && "🏆"} </p>
                </td>
              </tr>
            </table>
            <button onClick={() => deleteContact(eachContact.id)}>
              Delete Contact
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Contacts;
