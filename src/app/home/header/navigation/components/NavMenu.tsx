import React, { useState } from "react"
import styled from "styled-components"
import tw from 'twin.macro'
import { FiMenu } from 'react-icons/fi'
import { VscChromeClose } from 'react-icons/vsc'
import Items from "./Items"

export default function NavMenu() {
    const [open, setOpen] = useState<boolean | null>(false)
    
    return (
        <div className="">
            <MobileIconStyle className={`${open ? "hidden" : "block"}`} onClick={() => setOpen (true)}/>
            <MobileCloseIconStyle className={`${open ? "block" : "hidden"}`} onClick={() => setOpen (false)}/>
            <div className={"flex"}>
                <MobileSideBar className={`${open ? '-translate-x-0' : 'translate-x-full'}`}>
                    <Items />
                </MobileSideBar>
            </div>
            <div className={"hidden sm:block"}>
                <Items />
            </div>
        </div>
    );
}


// Sidebar main styles
const MobileSideBar = styled.div`{
    ${tw`
        /* Display */

        /* 位置 */
        fixed
        flex
        right-0
        top-0
        items-center
        justify-center
        
        /* sidebar高、宽 */
        sm:hidden
        h-full
        w-full
        
        /* 颜色样式 */
        opacity-75
        bg-gradient-to-b
        from-zinc-100
        to-zinc-600
        /* opacity-30 */
        
        /* 位移动画 */
        transition
        duration-300
        ease-in-out
        
        /* z-index-2 */
        z-[2]
    `}
}`

// Open icon on mobile sidebar 右上角的打开侧拉栏svg
const MobileIconStyle = styled(FiMenu)`
    ${tw`
        /* 颜色 */
        text-zinc-100
        
        /* 小屏往上大小隐藏 */
        sm:hidden
        
        /* 位置大小 */
        fixed
        mb-2
        pb-1
        top-6
        right-3
        
        /* 字体大小 */
        text-2xl
        
        /* 鼠标大小 */
        cursor-pointer
        
        /* z-index-3 */
        z-[3]
    `}
`;

// Close icon on the sidebar 右上角关闭侧拉栏用svg
const MobileCloseIconStyle = styled(VscChromeClose)`
    ${tw`
        /* 颜色 */
        text-zinc-700
        
        /* 大屏隐藏 */
        sm:hidden
        
        /* 位置大小 */
        fixed
        mb-2
        pb-1
        top-6
        right-3

        
        /* 字体大小 */
        text-2xl
        
        /* 鼠标指针变化 */
        cursor-pointer
        
        /* z-index-4 */
        z-[4]
    `}
`;

