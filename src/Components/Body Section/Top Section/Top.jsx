import React from 'react';
import './top.css';

import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle2 } from 'react-icons/tb';
import { IoMdNotificationsOutline } from 'react-icons/io';

import img from '../../../Assets/user.jpg'

const Top = () => {
    return (
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to MyGarden</h1>
                    <p>Hello Biyyu, Wellcome back!</p>
                </div>
                <div className="searchBar flex">
                    <input type="text" placeholder='Search' />
                    <BiSearchAlt className='icon'/>
                </div>
                <div className="adminDiv flex">
                    <TbMessageCircle2 className='icon'/>
                    <IoMdNotificationsOutline className='icon'/>
                    <div className="adminImage">
                          {/* <img src={img} alt="Admin Image" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top