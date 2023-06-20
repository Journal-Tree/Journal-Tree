import {useState, useEffect} from 'react'


export default function ApiExample() {

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const getApiTest = async () => {
            const res = await fetch('/api/test')
            const json = await res.json()
            setData(json)
            setLoading(false)
        }
        getApiTest()

    }, [])


    if (isLoading) {
        return <p>Loading...</p>
    } else if (!data) {
        return <p>Waiting for API result</p>
    } else {
        return <div>Result of API call:{data.result}</div>
    }
}