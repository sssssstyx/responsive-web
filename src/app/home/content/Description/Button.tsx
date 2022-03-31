import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import tw from 'twin.macro'

export function Button(){
    return(
        <BtnContainerStyle>
            <ButtonStyle>
                <Link to={"/GT"}>Discover</Link>
            </ButtonStyle>
        </BtnContainerStyle>
    )
}

const BtnContainerStyle = styled.div`
    ${tw`
        /* Display */
        flex
        
        /* 长、宽 */
        w-[180px]
        h-40
        
        /* 居中 */
        items-center
        justify-center
        sm:justify-start
    `}
`;

const ButtonStyle = styled.div`
    ${tw`
        /* 位置 */
        
        /* 字体样式、颜色 */
        text-lg
        text-[#c5bb82]
        font-light
        lg:uppercase
        
        /* 内部大小 */
        px-5
        py-1
        sm:px-6
        
        /* 边框 */
        border-[#9da8ae]
        border-[1px]
        rounded-sm
        border-solid
        
        /* 鼠标动作 */
        cursor-pointer
        hover:(tracking-[0.1px] text-orange-550 border-orange-550 shadow-sm)
        transition
        duration-200 ease-in-out
        
        /* z-index:1 */
        z-[1]
    `}
`;
