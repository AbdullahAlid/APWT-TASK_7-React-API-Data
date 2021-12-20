import axios from 'axios';
import React, {useState} from "react";
import Details from './Details';



const List = () => {
      const [list, setList] = useState([]);


      useState(()=>{
            axios.get("http://127.0.0.1:8000/api/company").then(resp=>{
                  console.log(resp.data);
                  setList(resp.data);
            }).catch(err=>{
                  console.log(err);
            })
      },[])
      return (
            <>
            <div className="container my-3">
                  <div className="row">
                        {list.map(com=>(
                              <div key={com.id}> 
                                    <Details id={com.id} name={com.name} license={com.lisenceNo} email={com.email} contact={com.phone}/>
                              </div>    
                        ))}
                  </div>

            </div>
            
            </>
      )
}

export default List;
