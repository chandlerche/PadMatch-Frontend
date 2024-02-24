import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddNewOwner() {

    let navigate = useNavigate();
    
    //store the owner info inside the state
    const [newOwner, setNewOwner] = useState({
        // initiate the new owner
        address: "",
        alternate_phone:"",
        check_memo :"",
        city:"",
        draw_account:"",
        email:"",
        manager_id:0,
        monthly_report:"",
        notes:"",
        owner_name:"",
        payment_method:"",
        phone:"",
        receives_1099:"",
        state:"",
        zipcode:"",
        numbers_of_properties:0,
        numbers_of_units:0
    });

    const {owner_name, address, alternate_phone, check_memo, city, draw_account, email, manager_id, monthly_report, phone, receives_1099, state, zipcode, notes, payment_method, numbers_of_properties, numbers_of_units} = newOwner;

    // once we got the values below, we can just pass them in the initial state above
    const onInputChange = (e) => {
        setNewOwner({...newOwner, [e.target.name]: e.target.value})
    }

    const onSubmit= async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/owner",newOwner);
        navigate("/");
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                {/* New Owner Form*/}
                <h2>New Owner</h2>

                <form onSubmit={(e)=>onSubmit(e)}>

                    {/* Name*/}
                    <div className='mb-3'>
                        <label htmlFor='Name' className='form-label'>Name</label>
                        <input type={'text'} className='form-control' placeholder='Name' name="owner_name" value={owner_name} onChange={(e)=>onInputChange(e)}></input>
                    </div>

                    {/* Address*/}
                    <div className='mb-3'>
                        <label htmlFor='Address' className='form-label'>Address</label>
                        <input type={'text'} className='form-control' placeholder='Address' name="address" value={address} onChange={(e)=>onInputChange(e)}></input>
                    </div>

                    {/* City*/}
                    <div className='mb-3'>
                        <label htmlFor='City' className='form-label'>City</label>
                        <input type={'text'} className='form-control' placeholder='City' name="city" value={city} onChange={(e)=>onInputChange(e)}></input>
                    </div>

                    {/* State*/}
                    <div className='mb-3'>
                        <label htmlFor='State' className='form-label'>State</label>
                        <input type={'text'} className='form-control' placeholder='State' name="state" value={state} onChange={(e)=>onInputChange(e)}></input>
                    </div>

                    {/* Zipcode*/}
                    <div className='mb-3'>
                        <label htmlFor='Zipcode' className='form-label'>Zip</label>
                        <input type={'text'} className='form-control' placeholder='Zip Code' name="zipcode" value={zipcode} onChange={(e)=>onInputChange(e)}></input>
                    </div>

                    {/* Phone*/}
                    <div className='mb-3'>
                        <label htmlFor='Phone' className='form-label'>Phone</label>
                        <input type={'text'} className='form-control' placeholder='(xxx)xxx-xxx' name="phone" value={phone} onChange={(e)=>onInputChange(e)}></input>
                    </div>

                    {/* Alternate Phone*/}
                    <div className='mb-3'>
                        <label htmlFor='AlternatePhone' className='form-label'>Alternate Phone</label>
                        <input type={'text'} className='form-control' placeholder='(xxx)xxx-xxx' name="alternate_phone" value={alternate_phone} onChange={(e)=>onInputChange(e)}></input>
                    </div>

                    {/* Email*/}
                    <div className='mb-3'>
                        <label htmlFor='Email' className='form-label'>Email</label>
                        <input type={'text'} className='form-control' placeholder='xxx@xxx.xxx' name="email" value={email} onChange={(e)=>onInputChange(e)}></input>
                    </div>

                    {/* Payment Method*/}
                    <div className='mb-3'>
                        <label htmlFor='PaymentMethod' className='form-label'>Payment Method</label>
                        <input type={'text'} className='form-control' placeholder='Check' name="payment_method" value={payment_method} onChange={(e)=>onInputChange(e)}></input>
                    </div>

                    {/* Check Memo*/}
                    <div className='mb-3'>
                        <label htmlFor='CheckMemo' className='form-label'>Check Memo</label>
                        <input type={'text'} className='form-control' name="check_memo" value={check_memo} onChange={(e)=>onInputChange(e)}></input>
                    </div>

                    {/* Receives 1099*/}
                    <div className='mb-3'>
                        <label htmlFor='Receives1099' className='form-label'>Receives 1099</label>
                        <input type={'text'} className='form-control' name="receives_1099" value={receives_1099} onChange={(e)=>onInputChange(e)}></input>
                    </div>

                    {/* Monthly Reports*/}
                    <div className='mb-3'>
                        <label htmlFor='MonthlyReports' className='form-label'>Monthly Reports</label>
                        <input type={'text'} className='form-control' name="monthly_report" value={monthly_report} onChange={(e)=>onInputChange(e)}></input>
                    </div>

                    {/* Draw Account*/}
                    <div className='mb-3'>
                        <label htmlFor='DrawAccount' className='form-label'>Draw Account</label>
                        <input type={'text'} className='form-control' name="draw_account" value={draw_account} onChange={(e)=>onInputChange(e)}></input>
                    </div>

                    {/* Notes*/}
                    <div className='mb-3'>
                        <label htmlFor='Notes' className='form-label'>Notes</label>
                        <input type={'text'} className='form-control' name="notes" value={notes} onChange={(e)=>onInputChange(e)}></input>
                    </div>



                    {/* Bottons */}
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                    <Link to="/" className='btn btn-outline-danger mx-2'>Cancel</Link>

                </form>
            </div>
        </div>
    </div>
  )
}
