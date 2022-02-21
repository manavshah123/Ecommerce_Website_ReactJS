import React from 'react'
import './topbar.css'
import logo from "./logo.png";

export default function Topbar() {
  return (
    <div>
        <div className="topnav">
                <div className=" main_logo">
                <a href="#" className="logo_li">
                <span className="span-logo" >
                    <img src={logo} style={{width: 20}}/>
                </span>
                </a>
            </div> 
            <a className="active" href="#home">Home</a>
            <a href="#Fruits">Fruits</a>
            <a href="#cFruits">Cut Fruits</a>
            <a href="#coldpressedjuices">Cold-pressed Juices</a>
            <a href="#Smoothies">Smoothies</a>
        </div>
       
      </div>
  )
}
