import React from 'react';
import video from './bg-video-full-screen.mp4'
import styled from 'styled-components'
import tw from 'twin.macro'

export default function Video() {
    return(
        <>
            <VideoStyle autoPlay loop muted>
                <source src={video} type="video/mp4"/>
            </VideoStyle>
            
        </>
    )
}

// Video Styles
const VideoStyle = styled.video`
    ${tw`
        /* 位置 */
        flex
        absolute
        top-0
        left-0
        
        /* 大小 */
        w-full
        h-full
        sm:h-full
        
        /* 最大 1600x900px 移动端最大 height 360p*/
        max-h-[360px]
        sm:max-h-[900px]
        
        /* 超出部分隐藏 */
        overflow-hidden
        
        /* 平铺 */
        object-cover
        
        /* z-index */
        z-[-100]

    `}
`;

