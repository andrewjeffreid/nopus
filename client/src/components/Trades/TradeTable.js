import '../Table.css'

export default function TradeTable({ trades, selectedTrades, setSelectedTrades}) {

    const handleChange = (trade) => {

        const newSelectedTrades = selectedTrades.includes(trade)? selectedTrades.filter(selectedTrade => selectedTrade !== trade): [...selectedTrades, trade]
        setSelectedTrades(newSelectedTrades)
    }

    return (
        <table id="trade-table">
            <thead>
                <tr>
                    <th>Select</th>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                    <th>USD</th>
                    <th>Exchange</th>
                </tr>
            </thead>
            <tbody>
                {(trades.map(trade => {
                    return (
                        <tr key={trade._id}>
                            <td><input type="checkbox" onChange={e=>{handleChange(trade)}}/></td>
                            <td>{trade.date}</td>
                            <td>{trade.type}</td>
                            <td>{trade.amount}</td>
                            <td>{trade.currency}</td>
                            <td>{trade.usd}</td>
                            <td>{trade.exchange}</td>
                        </tr>
                    )
                }))}
            </tbody>
        </table>
    )
}