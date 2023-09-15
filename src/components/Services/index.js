import React from 'react';
import service from '../../service.json';



const Services = () => {

// console.log(service);

  return (
    <div className='customers'>
    <h1>Services List</h1>
    <div className='ul'>
                {
                  service.map((ele) => (
                   <div className='li' key={ele.id}> 
                       <p>Service Name: <span>{ele.name}</span></p>
                       <p>Service Price: <span>{ele.price}</span></p>
                   </div>
               ))}
    </div>
</div>
  )
}

export default Services