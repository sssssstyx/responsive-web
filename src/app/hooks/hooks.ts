import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {AppDispatch, RootState} from '../store/store';
import React, { useEffect } from 'react'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const OnClickOutsideHook = (ref: React.MutableRefObject<any>, callback: () => any) => {
    useEffect (() => {
        function clickHandler (e: MouseEvent) {
            if (ref?.current && !ref.current.contains(e.target)) {
                callback()
                console.log ("Callback")
            }
        }
        
        window.addEventListener ("mousedown", clickHandler);
        return window.removeEventListener ("mousedown", clickHandler);
        console.log ("set false")
        
    }, [ref,callback])
}