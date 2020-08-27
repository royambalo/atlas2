import React from "react";
import { useHistory } from "react-router-dom";
import { doApiPost } from "../services/apiService";
function AddContact(props) {
  let history = useHistory();

  let sendForm = (event) => {
    event.preventDefault();

    let bodyData = {
      firstName: event.target.id_Fname.value,
      lastName: event.target.id_Lname.value,
      email: event.target.id_email.value,
      areaCode: event.target.id_areacod.value,
      phoneNumber: event.target.id_phoneNumber.value,
    };
    console.log(bodyData);
    // let url = "http://localhost:3000/contactList/add";
    let url = "https://serverside-contact-list.herokuapp.com/contactList/add";

    doApiPost(url, bodyData).then((data) => {
      console.log(data);

      if (data.firstName) {
        console.log(data);
        alert("contact added!");
        history.push("/list");
      } else if (data.message) {
        alert(data.message);
      }
    });
  };
  return (
    <div className="container mt-4">
      <form className="col-lg-6" onSubmit={sendForm}>
        <label>First name:</label>
        <input
          id="id_Fname"
          type="text"
          className="form-control"
          placeholder="Enter First Name"
        />

        <label>LastName:</label>
        <input
          id="id_Lname"
          type="text"
          className="form-control"
          placeholder="Enter Last Name"
        />

        <label>Email:</label>
        <input
          id="id_email"
          type="text"
          className="form-control"
          placeholder="Enter your Email"
        />

        <label>Area Code:</label>
        <input
          id="id_areacod"
          type="text"
          className="form-control"
          placeholder="Enter your Area Code"
        />

        <label>Phone Number:</label>
        <input
          id="id_phoneNumber"
          type="text"
          className="form-control"
          placeholder="Enter your Phone Number"
        />

        <button className="btn btn-secondary mt-4">Add Contact</button>
      </form>
    </div>
  );
}
export default AddContact;
