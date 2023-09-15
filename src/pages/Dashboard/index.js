
import Customers from '@/components/Customers';
import Services from '@/components/Services';
import React, { useState } from 'react';
import { BiSolidUserRectangle, BiSolidDashboard } from "react-icons/bi";
import { RiServiceFill } from "react-icons/ri";


const Dashboard = () => {

  const [activeTab, setActiveTab] = useState('customers'); 

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  
  return (
    <div className='dashboard'>
        <div className='sidebar'>
             <div className='img-details'>
                <div>
                    <BiSolidUserRectangle className='img-details-icon' />
                </div>
                <div className='img-details-name'>
                    <p>name</p>
                    <p>email</p>
                </div>
             </div>
             <div className='sidebar-details'>
                 <div className='icon-name' onClick={() => handleTabClick('customers')}>
                    <BiSolidDashboard className={`icon ${activeTab === 'customers' ? 'active' : ''}`}/>
                    <h1>customers</h1>
                 </div>
                 <div className='icon-name' onClick={() => handleTabClick('service')}>
                    <RiServiceFill className={`icon ${activeTab === 'service' ? 'active' : ''}`}/>
                    <h1>service</h1>
                 </div>
             </div>
        </div>
        <div className='details'>
             {/* <Customers /> */}
             {activeTab === 'customers' ? <Customers /> : null}
             {activeTab === 'service' ? <Services /> : null}
        </div>
    </div>
  )
}

export default Dashboard