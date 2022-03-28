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
            <div className={""}>
                <ButtonStyle className={""} onClick={()=>{
                    console.log ("1")}}>See more</ButtonStyle>
            </div>
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

const ButtonStyle = styled.div`
    ${tw`
        /* 位置 */
        flex
        
        /* 字体样式、颜色、大小 */
        font-bold
        text-3xl
        text-zinc-500
        md:font-extrabold
        lg:font-black
        
        /* 边框 */
        border-transparent
        border-2
        border-solid
        
        /* 鼠标动作 */
        cursor-pointer
        hover:text-orange-550
        hover:border-black rounded-xl
        hover:shadow-[0_35px_60px_-15px_#CBD5E1FF]
        transition
        duration-200 ease-in-out
        
        
        z-10
    `}
`;
