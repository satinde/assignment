import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {showUser, deleteUser} from '../../redux/features/userDetailSlice';

const Customers = () => {
    
    const dispatch = useDispatch();

    const users = useSelector((state) => state.app.user);
    
   
    useEffect(()=>{
          dispatch(showUser())
    }, []);

  return (
    <div className='customers'>
         <h1>Customer List</h1>
         <div className='ul'>
                {
                       users.map((ele) => (
                        <div className='li' key={ele.id}> 
                            <p>name: <span>{ele.name}</span></p>
                            <p>email: <span>{ele.email}</span></p>
                        
                            <button onClick={() => dispatch(deleteUser(ele.id))} className="btn">Delete</button>
                        </div>
                    ))}
         </div>
    </div>
  )
}

export default Customers;