import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then((res) => {
                if (!res.ok) {
                    throw Error('Could Not Fetch the resource');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('Fetch Aborted!!')
                } else {
                    console.log(err.message);
                }
            });

        return () => abortCont.abort();
    }, [url]);

    return { data };
}

export default useFetch;