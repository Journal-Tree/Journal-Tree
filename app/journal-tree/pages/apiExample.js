import {useState, useEffect} from 'react'
import Link from "next/link";

export default function ApiExample() {

    const [jsData, setJsData] = useState(null)
    const [pythonData, setPythonData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const getJSApiTest = async () => {
            const res = await fetch('/api/test')
            const json = await res.json()
            setJsData(json)
            setLoading(false)
        }
        getJSApiTest()

        const getPythonApiTest = async () => {
            setLoading(true)
            const res = await fetch('/api/python')
            const json = await res.json()
            setPythonData(json)
            setLoading(false)
        }
        getPythonApiTest()

    }, [])

    let result = []
    if (isLoading) {
        result = [<p key={"loading"}>Loading...</p>]
    } else {
        result = []
        if (!jsData) {
            result.push(<p key={"js_wait"}>Waiting for JS API result</p>)
        } else {
            result.push(<div key={"js"}>Result of JS API call:{jsData.result}</div>)
        }
        if (!pythonData) {
            result.push(<p key={"python_wait"}>Waiting for Python API result</p>)
        } else {
            result.push(<div key={"python"}>Result of Python API call:{pythonData.message}</div>)
        }
    }
    return result
}