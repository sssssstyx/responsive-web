import React from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'
import Nav from './header/navigation'
import Content from './content'
import Video from './content/components/video/Video'

export default function Home(){
    return (
        <HomeStyles>
            <HeaderStyles>
                <Nav />
            </HeaderStyles>
    
            <ContentStyles>
                <Content />
            </ContentStyles>
        </HomeStyles>
    )
}

// Home page
const HomeStyles = styled.div`
    ${tw`
        flex
        flex-row
        /* 位置大小 */
        w-full
        h-full
        items-center
        overflow-x-hidden
    `};
`;

// Header
const HeaderStyles = styled.div`
    ${tw`
        /* 颜色(空) */
        
        /* 位置大小 */
        flex
        items-center
        justify-center
        top-0
        left-0
        w-full
        h-16
        sm:h-20
        
    `}
`

// Content
const ContentStyles = styled.div`
    ${tw`
        
        /* 位置大小 */
        flex
        
    `}
`