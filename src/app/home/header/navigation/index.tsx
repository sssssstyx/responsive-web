import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro'
import { Logo } from './components/logo/Logo';
import { NavMenu } from './components/NavMenu';

export default function Nav() {
    
    const [open, setOpen] = useState<boolean | null>(false)
    
    return (
        <NavbarStyle>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <NavMenuContainer>
                <NavMenu />
            </NavMenuContainer>
        </NavbarStyle>
    );
}

const NavbarStyle = styled.nav`
    min-width:260px;
    ${tw`
        /* 颜色(定义在外部div中) */
        
        /* 高度、宽度 */
        
        h-14
        sm:h-12
        
        /* 外部轮廓大小 */
        sm:mt-5
        sm:mx-16
        2xl:mx-auto
        2xl:px-8
        
        /* 位置、排列方式 */
        flex
        items-center
        justify-center
        sm:justify-between
        
        /* 最大宽度: 1536px */
        xl:max-w-screen-2xl
        
        /* z-index:2 */
        z-[2]
    `};
`;

const LogoContainer = styled.div`
    ${tw`
        /* 位置 */
        flex
        items-center
    `};
`;
const NavMenuContainer = styled.div`
    ${tw`
        /* 无背景颜色 */
        bg-transparent
        
        /* 位置 */
        flex
        items-center
    `};
`;