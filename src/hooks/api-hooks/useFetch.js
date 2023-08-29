// useFetch custom hook
import { useState, useEffect } from "react";
import { GET } from "../../helpers/constants";
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    /*
     passing an empty array of deps here is to make the useEffect
     hook execute only once, when the component is first rendered
    */
    useEffect(() => {
        //setTimeout is to make the request time more realistic :)
        setTimeout(() => {
            fetch(url, { method: GET }).then(res => {
                if (!res.ok) {
                    throw Error('Error while fetching data from the server');
                }
                return res.json();
            }).then(data => {
                setData(data);
                setLoading(false);
                setError(null);
            })
            .catch(err => {
                setLoading(false);
                setError(err.message);
            });
        }, 1000);
    }, [url]);

    return { data, loading, error };
}

export default useFetch;