import React from 'react';
import './footer.css';
import links_info from './links';
import styles from './logo.module.css';
import { NavLink } from 'react-router-dom';

const LinkBlock = (props) => {
    return (
        <div className='link-block'>
            <span>{props.block.blockName}</span>
            { props.block.links.map( link => <a href={link.href} >{link.linkName}</a> ) }
        </div>
    )
}

const Footer = (props) => {


    return (
        <footer className='footer'>

            { links_info.map( block => <LinkBlock block={block} />) }

            <div className={styles.logo}>
                <NavLink to="/cases">
                    <img src="logo.png" draggable="false"></img>
                </NavLink>
            </div>

        </footer>
    )
}

export default Footer;