import React from 'react';
import { Link } from 'react-router-dom';
import McLarenLogo from "./img/McLaren-White-Logo.png";
import styled from 'styled-components';
import tw from 'twin.macro';

export function Logo (){
    return (
        <LogoStyle>
            <Link to="/Home" >
                <img src={McLarenLogo} alt={"McLaren White Logo"} />
            </Link>
        </LogoStyle>
    );
}

const LogoStyle = styled.div`
    ${tw`
        /* Width of 24 by default, 36 on medium screens, and 40 on large screens */
        /* w-24 width: 6rem;  96px */
        top-0
        w-28
        md:w-40
        lg:w-52
        
        /*  图片属性 */
        [> img]:w-auto h-auto sm:pb-3 bg-transparent
        
        /* z-index-2 */
        z-[2]
    `};
`;