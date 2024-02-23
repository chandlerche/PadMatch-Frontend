import React, { useEffect, useState } from 'react'
import OwnerNavBar from './OwnerNavBar'
import axios from 'axios';

export default function Owners() {

    const [owners, setOwners] = useState([])

    // useEffect: whenever the page loads, this happens
    useEffect(() => {
        loadOwners();
    }, []);

    // won't execute next line if not responses back, unless we use async and await
    const loadOwners = async () => {
        const result = await axios.get("http://localhost:8080/owners");
        setOwners(result.data);
    }


  return (
    <div>
        <OwnerNavBar/>
    
        <div className='container'>
            
            <div className='py-4'>
                <table className="table shadow">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Owner</th>
                        <th scope="col">Numbers of properties</th>
                        <th scope="col">Numbers of units</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Zipcode</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            owners.map((owner, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{owner.owner_name}</td>
                                    <td>{owner.numbers_of_properties}</td>
                                    <td>{owner.numbers_of_units}</td>
                                    <td>{owner.city}</td>
                                    <td>{owner.state}</td>
                                    <td>{owner.zipcode}</td>
                                    <td>{owner.phone}</td>
                                    <td>{owner.email}</td>
                                    <td>
                                        <button className='btn btn-primary mx-2'>View</button>
                                        <button className='btn btn-outline-primary mx-2'>Edit</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}