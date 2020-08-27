import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { doApiPost, doApiGet } from '../services/apiService';
function Edit(props) {
  let history = useHistory();
  let [item, setitem] = useState({})
  useEffect(() => {
    let editId = props.match.params.id
    let url = "https://serverside-contact-list.herokuapp.com/contactList/single/" + editId
    doApiGet(url)
      .then(data => {
        setitem(data)
      })
  }, [])
  let sendForm = (event) => {
    event.preventDefault();

    let bodyData = {
      _id: item._id,
      firstName: event.target.id_Fname.value,
      lastName: event.target.id_Lname.value,
      email: event.target.id_email.value,
      areaCode: event.target.id_areacod.value,
      phoneNumber: event.target.id_phoneNumber.value,
    }
    if (bodyData.phoneNumber.length === 10 && bodyData.phoneNumber[0] === "0")
      bodyData.phoneNumber = bodyData.phoneNumber.substring(1);

    let url = "https://serverside-contact-list.herokuapp.com/contactList/edit";

    doApiPost(url, bodyData)
      .then(data => {
        console.log(data);
        if (data.n) {
          alert("contact is update")
          history.push("/list");
        }
        else {
          alert("Problem unknown");
          history.push("/");
        }

      })
  }
  return (
    <div className="container mt-4">
      <form className="col-lg-6" onSubmit={sendForm}>
        <label>First name:</label>
        <input id="id_Fname" type="text" className="form-control" defaultValue={item.firstName} />

        <label>LastName:</label>
        <input id="id_Lname" type="text" className="form-control" defaultValue={item.lastName} />

        <label>Email:</label>
        <input id="id_email" type="text" className="form-control" defaultValue={item.email} />

        <label>Area Code:</label>
        <input id="id_areacod" type="text" className="form-control" defaultValue={item.areaCode} />

        <label>Phone Number:</label>
        <input id="id_phoneNumber" type="text" className="form-control" defaultValue={item.phoneNumber} />

        <button className="btn btn-secondary mt-4">Edit Contact</button>
      </form>
    </div>
  )
}
export default Edit
