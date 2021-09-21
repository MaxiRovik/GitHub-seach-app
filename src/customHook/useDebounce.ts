import {useCallback, useRef} from "react";

export default function useDebounce(callback:(arg:string) => any, delay:number, getRequestString:(request:string)=> void){
        const inputTimer:any = useRef();
        const debouncedCallback = useCallback((comingString:string)=>{
            if(inputTimer.current) {
                clearTimeout(inputTimer.current)
            }
            inputTimer.current = setTimeout(()=> {
                if(comingString!==''){
                    callback(comingString);
                    getRequestString(comingString)
                }
            }, delay)
        }, [callback, delay])

    return debouncedCallback;
}