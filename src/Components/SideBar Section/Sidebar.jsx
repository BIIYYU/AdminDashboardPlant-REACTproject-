import React from 'react';
import './sidebar.css';
// import Logo
import logo from '../../Assets/PLANT.png';
// import icon
import {IoMdSpeedometer} from 'react-icons/io';
import {MdDeliveryDining} from 'react-icons/md';
import {MdTravelExplore} from 'react-icons/md';
import {BsTrophy} from 'react-icons/bs';
import {AiOutlinePieChart} from 'react-icons/ai';
import {BiTrendingUp} from 'react-icons/bi';
import {MdOutlinePermContactCalendar} from 'react-icons/md';
import {BsFillCreditCard2FrontFill} from 'react-icons/bs';

const Sidebar = () => {
    return(
        <div className='sideBar grid'>
            <div className='logoDiv flex'>
                <img src={logo} alt="Image Name"/>
                <h2>Planti.</h2>
            </div>

            <div className="menuDiv">
                <h3 className='divTitle'>QUICK MENU</h3>
                <ul className="menulist grid">
                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <IoMdSpeedometer className="icon"/>
                            <span className="smallText">Dashboard</span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <MdDeliveryDining className="icon"/>
                            <span className="smallText">My Orders</span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <MdTravelExplore className="icon"/>
                            <span className="smallText">Explore</span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <BsTrophy className="icon"/>
                            <span className="smallText">Products</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="settingDiv">
                <h3 className='divTitle'>Settings</h3>
                <ul className="menulist grid">
                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <AiOutlinePieChart className="icon"/>
                            <span className="smallText">Chart</span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <BiTrendingUp className="icon"/>
                            <span className="smallText">Trend</span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <MdOutlinePermContactCalendar className="icon"/>
                            <span className="smallText">Contact</span>
                        </a>
                    </li>
                    <li className="listItem">
                        <a href="#" className='menuLink flex'>
                            <BsFillCreditCard2FrontFill className="icon"/>
                            <span className="smallText">Billing</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar