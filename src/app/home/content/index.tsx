import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import Video from './components/video/Video'

export default function Content() {
    return(
        < ContentStyle className={""}>
            <Video />
            
        </ContentStyle>
    )
}

const  ContentStyle = styled.div`
    ${tw`
        /* 位置大小 */
        
    `};
`;