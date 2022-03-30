import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export function Text(){
    return (
        <div>
            <TextStyle>
                <div className={"text-md font-light md:text-xl lg:text-3xl"}>Defy the limits</div>
            
                <h2 className={" text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl"}>McLaren GT</h2>
            </TextStyle>
        </div>
    )
}

const TextStyle = styled.div`
    ${tw`
        /* Display */
        
        
        w-full
        h-full
        
        /* 字体大小*/
        
        
        /* 字体样式、颜色 */
        text-zinc-50
        md:font-light
        font-medium
    `}
`