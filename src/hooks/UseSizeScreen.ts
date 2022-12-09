import { useEffect, useState } from "react";

export function useSizeScreen() {
    const [size, setSize] = useState({
        width: 1980,
        height: 980
    })

    const changeSize = () => {
        const width = 
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
        
        const height = 
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

        setSize({width, height});
    }

    useEffect(()=>{
        changeSize();
        window.addEventListener('resize', changeSize);
    },[])
    return size
}