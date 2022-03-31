import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { Link } from 'react-router-dom'

/*
const basedata = {
    "navigation" : {
        "navigationMenu": [
            {
                "name": "Racing",
                "link": "racing"
            },
            {
                "name": "Bespoke",
                "link": "bespoke"
            },
            {
                "name": "Bespoke",
                "link": "bespoke"
            },
            {
                "name": "Story",
                "link": "story"
            },
        ]
    }
}
*/


export default function Items(){
    return (
        <ListStyle>
            <NavItem>
                <Link to="/racing">Racing</Link>
            </NavItem>
            <NavItem>
                <Link to="/bespoke">Bespoke</Link>
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
        md:font-light
        font-medium
        text-lg
        md:text-xl
        lg:text-2xl
        lg:uppercase
        justify-center
        
        /* 内部轮廓 */
        w-28
        h-8
        sm:w-full
        sm:h-full
        sm:p-0
        
        /* 外部轮廓 */
        my-6
        sm:my-0
        sm:ml-5
        
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

