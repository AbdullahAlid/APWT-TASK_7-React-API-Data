import React from 'react';
import {useState} from "react";
import"./Modal.css";


const Details = (props) => {

      const [data, setData] = useState(false);

      const handleDetails=()=>{
            setData(!data)
            
      };
      if(data) {
            document.body.classList.add('active-data')
      } 
      else {
            document.body.classList.remove('active-data')
      }


      return (
            <>
            <div className="container my-3" >
                  <div className="col-md-4">
                        <div className="card" style={{ width: "18rem" }}>
                              <div className="card-body">
                                    <p className="card-text">Id : {props.id}</p>
                                    <p className="card-text">Name : {props.name}</p>
                                    <p className="card-text">Email : {props.email}</p>
                                    <p className="card-text">Contact : {props.contact}</p>
                                    <button className="btn btn-primary" onClick={handleDetails}>Details</button>
                              </div>
                        </div>
                  </div>
            </div>
            {data && (
                  <div className="data">
                        <div onClick={handleDetails} className="overlay">
                              <div className="data-content">
                                    <p className="card-text">Id : {props.id}</p>
                                    <p className="card-text">Name : {props.name}</p>
                                    <p className="card-text">Email : {props.email}</p>
                                    <p className="card-text">Contact : {props.contact}</p>
                                    <button className="close-data" onClick={handleDetails}>Close</button>
                              </div>
                        </div>
                  </div>
            )}
            
            </>
      )
}

export default Details
