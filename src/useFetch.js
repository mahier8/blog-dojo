import {useEffect, useState} from 'react';



const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
            console.log(res);
            if (!res.ok) {
                throw Error('could not fetch data for that resource');
            }
            return res.json();
            }) // have data but no error
            .then(data => {
            console.log(data);
            setData(data);
            setisPending(false);
            setError(null);
            }) // no data condition but have error
            .catch(err => {
            setisPending(false);
            setError(err.message);
            })
        }, [url]) 
    return {data, isPending,error}
}

export default useFetch;