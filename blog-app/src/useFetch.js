import React from "react";

const useFetch = (url) => {
    const [data, setData] = React.useState(null);
    const [pending, setPending] = React.useState(true);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
        const abortCont = new AbortController();
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch data :(");
                }
                return res.json();
            })
            .then(data => {
                setError(null);
                setData(data);
                setPending(false);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log("fetch aborted");
                } else {
                    setPending(false);
                    setError(err.message);
                }
            });

        return () => abortCont.abort(); // cleanup function
    }, [url]);

    return { data, pending, error };
}

export default useFetch;
