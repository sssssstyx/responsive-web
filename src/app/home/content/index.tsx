import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import { Description } from './Description/Description'

export default function Content () {
    return (
        <ContentStyle className={""}>
            <Description />
        </ContentStyle>
    )
}


const ContentStyle = styled.div`
    ${tw`
        /* 位置 */
        /* 高、宽 */
        w-auto
        h-auto
        
        /* 外部轮廓大小 */
        sm:mx-16
        2xl:mx-auto
        
        2xl:px-10
        
        /* 最大宽度: 1536px */
        xl:max-w-screen-2xl
        
        /* z-index-1 */
        z-[1]
    `};
`;

