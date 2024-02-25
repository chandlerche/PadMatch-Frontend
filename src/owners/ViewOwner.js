import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ViewOwner() {


    const [ownerDetail, setOwnerDetail] = useState({
        owner_name:"",
        address: "",
        alternate_phone:"",
        check_memo :"",
        city:"",
        draw_account:"",
        email:"",
        manager_id:0,
        monthly_report:"",
        notes:"",
        payment_method:"",
        phone:"",
        receives_1099:"",
        state:"",
        zipcode:"",
        numbers_of_properties:0,
        numbers_of_units:0
    })

    const {id} = useParams();

    useEffect(()=>{
        loadOwnerDetail();
    }, []);

    const loadOwnerDetail = async () => {
        const result = await axios.get(`http://localhost:8080/owners/${id}`);
        setOwnerDetail(result.data);
    }


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>

                <h2 className='text-center m-4'>Owner Details</h2>

                <div className='card'>
                    <div className='card-header'>
                        Details of owner id: {ownerDetail.id}
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name:</b>
                                {ownerDetail.owner_name}
                            </li>

                            <li className='list-group-item'>
                                <b>Numbers of Properties:</b>
                                {ownerDetail.numbers_of_properties}
                            </li>

                            <li className='list-group-item'>
                                <b>Numbers of Units:</b>
                                {ownerDetail.numbers_of_units}
                            </li>

                            <li className='list-group-item'>
                                <b>Address:</b>
                                {ownerDetail.address}
                            </li>

                            <li className='list-group-item'>
                                <b>Email:</b>
                                {ownerDetail.email}
                            </li>

                            <li className='list-group-item'>
                                <b>Phone:</b>
                                {ownerDetail.phone}
                            </li>

                            <li className='list-group-item'>
                                <b>Alternate Phone:</b>
                                {ownerDetail.alternate_phone}
                            </li>

                            <li className='list-group-item'>
                                <b>City:</b>
                                {ownerDetail.city}
                            </li>

                            <li className='list-group-item'>
                                <b>State:</b>
                                {ownerDetail.state}
                            </li>

                            <li className='list-group-item'>
                                <b>Zipcode:</b>
                                {ownerDetail.zipcode}
                            </li>

                            <li className='list-group-item'>
                                <b>Payment Method:</b>
                                {ownerDetail.payment_method}
                            </li>

                            <li className='list-group-item'>
                                <b>Check memo:</b>
                                {ownerDetail.check_memo}
                            </li>

                            <li className='list-group-item'>
                                <b>Receives 1099:</b>
                                {ownerDetail.receives_1099}
                            </li>

                            <li className='list-group-item'>
                                <b>Monthly Reports:</b>
                                {ownerDetail.monthly_report}
                            </li>

                            <li className='list-group-item'>
                                <b>Draw Account:</b>
                                {ownerDetail.draw_account}
                            </li>

                            <li className='list-group-item'>
                                <b>Notes:</b>
                                {ownerDetail.notes}
                            </li>
                        </ul>
                    </div>
                </div>

                <Link className="btn btn-primary my-2" to="/">Back to Owners</Link>

            </div>
        </div>
    </div>
  )
}
