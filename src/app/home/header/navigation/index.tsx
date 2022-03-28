import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro'
import { Logo } from './components/logo/Logo';
import NavMenu from './components/NavMenu';

export default function Nav() {
    return (
        <NavbarStyle>
            <LogoContainer>
                <Logo/>
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
        
        /* 高度、长度 */
        w-full
        h-14
        sm:h-10
        
        /* 最大长度 */
        max-w-7xl
        
        /* 位置、排列方式 */
        flex
        items-center
        justify-center
        sm:justify-between
        
        /* z-index */
        z-20
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