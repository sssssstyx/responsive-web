import React from 'react';

import styled from 'styled-components'
import tw from 'twin.macro'
import { Text } from './Text'
import { Button } from './Button'

export function Description () {
    return (
        <>
            < DescriptionContainer className={""}>
                <Text />
                <Button />
            </DescriptionContainer>
        </>
    )
}


const DescriptionContainer = styled.div`
    ${tw`
        /* 位置 */
        flex
        flex-col
        items-center
        sm:items-stretch
        
        /* 高、宽 */
        /* 最大宽度 */
        
        h-full
        w-full
        
        /* z-index-1 */
        z-[1]
    `};
`;
