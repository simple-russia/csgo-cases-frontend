import React from 'react';
import links_info from './links';
import Logo from 'Components/logo';

import './footer.scss';


const LinkBlock = (props) => {
    return (
        <div className='link-block'>
            <span>{props.block.blockName}</span>
            { props.block.links.map( (link, index) => <a key={index} href={link.href} >{link.linkName}</a> ) }
        </div>
    )
}


const Footer = (props) => {

    return (
        <footer className='footer'>
            
            <div className="block-links-cont">
                { links_info.map( (block, index) =>
                    <LinkBlock key={index} block={block} />
                )}
            </div>

            <Logo />

        </footer>
    )
}

export default Footer;