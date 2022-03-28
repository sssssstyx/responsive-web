import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'

export default function Items(){
    return (
        <ListStyle>
            <NavItem>
                <Link to="/racing">Racing</Link>
            </NavItem>
            <NavItem>
                <Link to="/discover">Discover</Link>
            </NavItem>
            <NavItem>
                <Link to="/careers">Careers</Link>
            </NavItem>
            <NavItem>
                <Link to="/story">Story</Link>
            </NavItem>
        </ListStyle>
    )
}

// The styles for ul element on navigation bar
const ListStyle = styled.ul`
    ${tw`
        /* 摆放位置 */
        flex
        flex-col
        sm:flex-row
        
        /* 去点 */
        list-none
        
        /* 整体上移 */
        h-3/5
        sm:h-full
    `}
`;

// Navigation bar page lists
const NavItem = styled.li`
    ${tw`
        flex
        
        /* 背景颜色 */
        bg-transparent
        hover:bg-gray-50
        sm:hover:bg-transparent
        
        /* 字体颜色、位置、大小 */
        text-zinc-900
        sm:text-zinc-100
        text-2xl
        md:text-2xl
        lg:text-4xl
        font-medium
        
        /* 内部轮廓大小 */
        w-28
        h-8
        sm:w-full
        sm:h-full
        px-2
        sm:p-0
        
        /* 外部轮廓大小 */
        my-6
        sm:my-0
        sm:mr-5
        md:mr-6
        
        /* 边框 */
        rounded-2xl
        hover:shadow-[0_35px_60px_-15px_#CBD5E1FF]
        sm:hover:shadow-none
        
        /* 鼠标动作 */
        cursor-pointer
        hover:text-orange-550
        active:text-orange-600
        transition
        duration-300
        ease-in-out
    `}
`;

