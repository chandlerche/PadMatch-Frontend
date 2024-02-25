import React, { useEffect, useState } from 'react'
import OwnerNavBar from './OwnerNavBar'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Owners() {

    const [owners, setOwners] = useState([])

    const {id} = useParams();

    // useEffect: whenever the page loads, this happens
    useEffect(() => {
        loadOwners();
    }, []);

    // won't execute next line if not responses back, unless we use async and await
    const loadOwners = async () => {
        const result = await axios.get("http://localhost:8080/owners");
        setOwners(result.data);
    }

    const deleteOwner = async (id) => {
        await axios.delete(`http://localhost:8080/owners/${id}`)
        loadOwners();
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
                                        <Link to={`/viewowner/${owner.id}`} className='btn btn-primary mx-2'>View</Link>
                                        <Link to={`/editowner/${owner.id}`} className='btn btn-outline-primary mx-2'>Edit</Link>
                                        <button onClick={()=>deleteOwner(owner.id)} className='btn btn-danger'>Delete</button>
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
