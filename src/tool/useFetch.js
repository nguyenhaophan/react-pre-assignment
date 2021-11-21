import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setData(data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, [url])

    return [data, loading]
}
