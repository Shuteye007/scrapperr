import React from 'react'
import {Menu, Badge} from 'antd';
import {Link} from 'react-router-dom';


const { Item} = Menu;

const Header = () => {
    
    return(
        
        <Menu  mode="horizontal">

            <Item key="home" >
                <Link to={"/"}> Home </Link>
            </Item>

            <Item key="AboutUs">
                <Link to={"/AboutUs"}> About Us </Link>
            </Item>

        </Menu>

    )
}

export default Header;