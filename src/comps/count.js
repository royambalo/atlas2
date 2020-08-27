import React from 'react';
function Count(props) {

  return (
    <div className="container d-flex justify-content-around align-items-center mt-5">
      <h3 className="display-3 text-info border border-black p-4">
        NUMBER OF CONTACTS IS:
     {props.lengthArr}
      </h3>
    </div>
  )
}

export default Count
