import { useState, useEffect } from "react";
import axios from "../api"

export const useFetch = (path)=>{
    const [data, setData] = useState(null) 
    const [loading, setLoading] = useState(null) 
    const [error, setError] = useState(null)

    useEffect(()=>{
        setLoading(true)
        axios
            .get(path)
            .then((res)=> setData(res.data))
            .catch((err)=> setError(err))
            .finally(setLoading(false))
    },[])

    return{data, error, loading}
}