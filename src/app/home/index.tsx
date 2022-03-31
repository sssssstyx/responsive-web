import React from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'
import Nav from './header/navigation'
import Content from './content'
import Video from '../components/video/Video'

export default function Home(){
    return (
        <HomeStyles>
            <HeaderStyles>
                <Nav />
            </HeaderStyles>
            <Video />
            <BcStyles />
            <ContentStyles>
                <Content />
            </ContentStyles>
        </HomeStyles>
    )
}

// Home page
const HomeStyles = styled.div`
    ${tw`
        
        /* 位置大小 */
        flex
        flex-col
        
        w-full
        h-full
        
        /* 排列方式 */
        overflow-x-hidden
    `};
`;

// Header
const HeaderStyles = styled.div`
    ${tw`
        /* Display */
        
        
        /* 颜色(空) */
        
        /* 位置大小 */
        
        
        /* 高、宽 */
        w-full
        h-16
        sm:h-20
        
    `}
`

// Before Content
const BcStyles = styled.div`
    ${tw`
        /* 位置大小 */
        flex
        relative
        
        /* mobile < 640px：65vh  */
        h-[60%]
        
        /* sm > 640px: 36vh */
        sm:h-[50%]
        
        /* md 768px: 70vh */
        md:h-[60%]
        
        /* lg 1024px: 70vh */
        lg:h-[65%]
        
        /* xl 1280px: 50vh */
        xl:h-[60%]
        
        /* 2xl 1536px: 50vh */
        xl:h-[50%]
    `}
`


// Content
const ContentStyles = styled.div`
    ${tw`
        /* 位置大小 */
        
    `}
`