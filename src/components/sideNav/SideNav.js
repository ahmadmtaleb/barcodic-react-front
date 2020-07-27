
import React from 'react';
import SideNav, {  NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './SideNav.css';

import {
   
    Link
  } from "react-router-dom";
import { Button } from 'antd';
 

function SideBar (props){
   
    return(

<div className="side_nav_main_container">
<SideNav  
    onSelect={(selected) => {
        // Add your code here
    }}
    className="side_nav_slide_container"
>
    <SideNav.Toggle/>
    
    <SideNav.Nav defaultSelected="home">
    <div className="userN">   <h6 className="namef">Welcome</h6>
        <h6 className="namef">{props.name}</h6></div>
        <Link className="side_nav_links"  to='/'>  <NavItem className="side_nav_nait"  eventKey="I&E">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                    
                Dashboard
                    
            </NavText>
            </NavItem>
        </Link>
        
        
        <Link className="side_nav_links" to='/Category'> <NavItem className="side_nav_nait"   eventKey="category">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Category
            </NavText>
            </NavItem>
        </Link>
        <Link className="side_nav_links" to='/Register'> <NavItem className="side_nav_nait"   eventKey="category">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Register
            </NavText>
            </NavItem>
        </Link>
        <NavItem className="side_nav_nait-logout" eventKey="logout" >
            <Button type="danger" onClick={props.onClick}>logout</Button>
        </NavItem>

        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>

        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>

        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="white_nav_barcode_item"/>
        <NavItem className="side_nav_nait" className="black_nav_barcode_item"/>

       
    </SideNav.Nav>
</SideNav>
</div>
    )
}
export default SideBar;
