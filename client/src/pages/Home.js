import { useEffect } from "react"


export default function Home({ setSelectedTab }) {

    useEffect(() => {
        setSelectedTab("home")
    }, [setSelectedTab])

    return (
        <div>
            <h1>NOPUS</h1>
            <h2>Project Overview</h2>
            <p>
                I built this app out for cryptocurrency trading accounting using a MERN stack.
                It's not complete, and I'm putting it on the shelf indefinitely. 
                Throughout the project, I definitely became a lot more comfortable working 
                on full stack web apps. I encountered my first problems with 
                architecture/scalability and ended up rebuilding it twice.
                Eventually, I want to take another crack at it.
            </p>
            <h2>Features</h2>
            <ul>
                <li>React frontend, Node/Express backend, Mongoose database</li>
                <li>CRUD capabilities</li>
                <li>Microsoft inspired UI</li>
                <li>Unit testing for accounting calculations using Jest</li>
                <li>FIFO accounting</li>
                <li>SDK for coingecko API to get current market prices</li>
                <li>Some good functional programming practices and design patterns</li>
            </ul>
            <h2>Things I Would Change</h2>
            <ul>
                <li>Completely refactor frontend</li>
                <li>Perform accounting calculations like I'd do them on paper
                    vs shortcutting and trying to do them all at once. 
                </li>
                <li>Implement a true general ledger system with a database schema for each 
                    account and a modular system for debiting and crediting.
                </li>
            </ul>
        </div>
    )
}