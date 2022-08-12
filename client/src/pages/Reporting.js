import { useEffect } from 'react'

export default function Reporting({ setSelectedTab }) {

    useEffect(() => {
        setSelectedTab("statements")
    }, [setSelectedTab])

    return (
        <h1>Reporting</h1>
    )
}