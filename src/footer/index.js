import React from 'react';
import links_template from './links';
import Logo from 'Components/logo';

import './footer.scss';


const LinkBlock = (props) => {
    return (
        <div className='link-block'>
            <span>{props.block.blockName}</span>
            { props.block.links.map( (link, index) => <a key={index} href={link.href} target={"_blank"}>{link.linkName}</a> ) }
        </div>
    )
}


const Footer = (props) => {

    const links = links_template(); // dynamic language render of static content
    
    return (
        <footer className='footer'>
            
            <div className="block-links-cont">
                { links.map( (block, index) =>
                    <LinkBlock key={index} block={block} />
                )}
            </div>

            <Logo />

            <span className='author-copyright'>© 2022 Isaev Alexei</span>

        </footer>
    )
}

export default Footer;