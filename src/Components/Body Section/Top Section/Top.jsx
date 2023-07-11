import React from 'react';
import './top.css';

import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle2 } from 'react-icons/tb';
import { IoMdNotificationsOutline } from 'react-icons/io';

import img from '../../../Assets/user.jpg'
import video from '../../../Assets/video.mp4'

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
                          <img src={img} alt="Admin Image" />
                    </div>
                </div>
            </div>
            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Create and sell extraordiary products</h1>
                    <p>The world's fast growing industry today are natural made poducts!</p>
                    <div className="buttons flex">
                        <button className="btn">Explore More</button>
                        <button className="btn transparent">Top Sellers</button>
                    </div>

                    <div className="videoDiv">
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>

            </div>
           
        </div>
    )
}

export default Top