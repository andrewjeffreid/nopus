import csv from '../../assets/csv.svg'
import Delete from '../../assets/delete.svg'
import add from '../../assets/add.svg'
import edit from '../../assets/edit.svg'
import '../Ribbon.css'
import ImportTrades from './ImportTrades'
import AddTrade from './AddTrade'
import EditTrade from './EditTrade'
import { useState } from 'react'
import clear from '../../assets/clear.svg'


export default function TradeRibbon({ trades, setTrades, selectedTrades, setSelectedTrades }) {

    const [showImportTrades, setShowImportTrades] = useState(false)
    const [showAddTrade, setShowAddTrade] = useState(false)
    const [showEditTrade, setShowEditTrade] = useState(false)

    const toggleShowImportTrades = () => {
        setShowImportTrades(!showImportTrades)
    }

    const toggleShowAddTrade = () => {
        setShowAddTrade(!showAddTrade)
    }

    const toggleShowEditTrade = () => {
        if (!showEditTrade) {
            if (selectedTrades.length === 1) {
                setShowEditTrade(!showEditTrade)
            } 
        } else {
            setShowEditTrade(!showEditTrade)
        }
    }

    const deleteTrades = (selectedTrades) => {

        const url = "http://localhost:8080/trades/delete"

        try {

            selectedTrades.forEach((trade) => {
                fetch(url, {
                    method: "DELETE",
                    headers: {'Content-Type': 'application/json'}, 
                    body: JSON.stringify(trade)
                }).then((res) => {
                    console.log("Request complete! response:", res)
                    window.location.reload()
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

    const clearTrades = () => {

        const url = "http://localhost:8080/trades/clear"

        try {
            fetch(url, {
                method: "DELETE",
            }).then((res) => {
                console.log(res)
            })
        } catch (err) {
            console.log(err)
        }

        window.location.reload()
    }

    return (
        <div className="ribbon">
            <div>
                <button onClick={e=>toggleShowImportTrades()}><img src={csv} alt="import trades"/></button>
                {showImportTrades ? <ImportTrades /> : null}
                <p>Import<br/>Trades</p>
            </div>
            <div>
                <button onClick={e=>toggleShowAddTrade()}><img src={add} alt="add trade"/></button>
                {showAddTrade ? <AddTrade trades={trades} setTrades={setTrades} /> : null}
                <p>Add<br/>Trade</p>
            </div> 
            <div>
                <button onClick={e=>toggleShowEditTrade()}><img src={edit} alt="edit trade"/></button>
                {showEditTrade ? <EditTrade selectedTrades={selectedTrades} /> : null}
                <p>Edit<br/>Trade</p>
            </div>
            <div>
                <button onClick={e=>deleteTrades(selectedTrades)}><img src={Delete} alt="delete trades"/></button>
                <p>Delete<br/>Trade</p>
            </div>
            <div>
                <button onClick={e=>clearTrades()}><img src={clear} alt="clear trades"/></button>
                <p>Clear<br/>Trades</p>
            </div>
        </div>
    )
}