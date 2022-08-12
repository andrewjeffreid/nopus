import TradeRibbon from '../components/Trades/TradeRibbon'
import TradeTable from '../components/Trades/TradeTable'
import { useState, useEffect} from 'react'

export default function Trades({ setSelectedTab, trades, setTrades }) {

    useEffect(() => {
        setSelectedTab("trades")
    }, [setSelectedTab])

    const [selectedTrades, setSelectedTrades] = useState([])

    return (
        <div>
            <TradeRibbon trades={trades} setTrades={setTrades} selectedTrades={selectedTrades} setSelectedTrades={setSelectedTrades}/>
            <TradeTable trades={trades} selectedTrades={selectedTrades} setSelectedTrades={setSelectedTrades}/>
        </div>
    )
}