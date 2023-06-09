import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import Logo from '../../tech.jpeg';
import './Navbar.css';

export const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={Logo} className='navLogo' alt='logo'/>

            <div className='navTitle'>Tech Shop</div>
            <div className='navLinks'>

                <Link to='/' className='links'>
                    Shop
                </Link>
                <Link to='/cart' className='links'>
                    <ShoppingCart size={32} />
                </Link>

            </div>
        </div>
    )
}