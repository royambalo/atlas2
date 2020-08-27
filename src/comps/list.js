import React, { useEffect, useState } from 'react';
import { doApiGet, doApiPost } from '../services/apiService';
import { Link } from 'react-router-dom';
function List(props) {
  let [list_ar, setlist_ar] = useState([])
  let [counterApi, setCounterApi] = useState(0);
  useEffect(() => {
    // let url = "http://localhost:3000/contactList"
    let url = "https://serverside-contact-list.herokuapp.com/contactList"
    doApiGet(url)
      .then(data => {
        setlist_ar(data)
        props.setlength_Arr(data.length)
      })
  }, [counterApi])
  const delContact = async (_id) => {
    let userChoose = global.confirm("Are you sure you want to delete?");
    if (userChoose) {
      let url = "https://serverside-contact-list.herokuapp.com/contactList/del";
      let data = await doApiPost(url, { _id: _id });
      if (data.massage) {
        setCounterApi(counterApi + 1)
      }
      else {
        alert("error something not work!")
      }

    }
  }

  return (
    <div className="container">
      <h2 className="text-center mt-4">List of contacts</h2>
      <table className="mt-4 table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Area code</th>
            <th>Phone Number</th>
            <th>Edit</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          {list_ar.map((item, i) => {
            return (
              <tr key={item._id}  >
                <td className="align-middle">{i + 1}</td>
                <td className="align-middle">{item.firstName}</td>
                <td className="align-middle">{item.lastName}</td>
                <td className="align-middle">{item.email}</td>
                <td className="align-middle">{item.areaCode}</td>
                <td className="align-middle">{item.phoneNumber}</td>
                <td className="align-middle">
                  {/* <button onClick={()=>{edit(item)}} className="btn btn-warning">Edit</button> */}
                  <Link to={`/edit/` + item._id} className="btn btn-warning">
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="text-white bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                      <path fillRule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                    </svg>
                  </Link>
                </td>
                <td className="align-middle">
                  <button onClick={() => { delContact(item._id) }} className="btn btn-danger mr-2">
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default List
