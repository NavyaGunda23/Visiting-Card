import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios'

function App() {

  const [ useDetails, setUserDetails] = useState([])

  useEffect(()=>{
  getData()

  })

  async function getData(){
    let request =  await axios.get('https://jsonplaceholder.typicode.com/users');
    setUserDetails(useDetails => request.data)
    console.log(request)
    return request.data
  } 
  return (
    <div className="App">
      
      <div className="card_layout">
            {useDetails.map(x => (
                    <div className="card"> 
                    <p className="mt-0">{x.name}</p>
                      <p><i className = "icon16 di-block icon-email v-middle mr-10"></i><span className="info-text">{x.email}</span></p>
                      <p><i className = "icon16 di-block icon-phone v-middle mr-10"></i><span className="info-text">{x.phone}</span></p>
                      <p className="d-flex mb-0"> <i className = "icon20 di-block icon-location v-middle mr-10"></i><span className="info-text">{x.address.street},{x.address.city},{x.address.zipcode},{x.address.suite}</span></p>
                    
                    </div>
            ))}
      </div>
    </div>
  );
}

export default App;
