import { useEffect } from "react";
const useFetch = (url,method) => {
    const abortCont = new AbortController()
    useEffect(()=>{
        fetch(url,{
            method: method,
            header:{"Content-type":"application/json"},
            signal:abortCont.signal
        }).then((res)=>{
            const data = res.json();
            return data;
        }).catch((err)=>{
            return err
        })
    },[])
}
 
export default useFetch;
