import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Trades from './pages/Trades'
import Expenses from './pages/Expenses'
import Partners from './pages/Partners'
import Reporting from './pages/Reporting'
import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'

function App() {

  const [selectedTab, setSelectedTab] = useState([])
  const [trades, setTrades] = useState([])
  const [partners, setPartners] = useState([])
  const [expenses, setExpenses] = useState([])

  const fetchTrades = async () => {

    const url="http://localhost:8080/trades/"
    try {
      await fetch(url).then((res) => res.json()).then((data) => {setTrades(data)});
    } catch (TypeError) {
      console.log("The server is not running.")
    }
  }

  const fetchPartners = async () => {

    const url="http://localhost:8080/partners/"
    try {
      await fetch(url).then((res) => res.json()).then((data) => {setPartners(data)});
    } catch (TypeError) {
      console.log("The server is not running.")
    }
  }

  const fetchExpenses = async () => {

    const url="http://localhost:8080/expenses/"
    try {
      await fetch(url).then((res) => res.json()).then((data) => {setExpenses(data)});
    } catch (TypeError) {
      console.log("The server is not running.")
    }
  }

  useEffect(() => {
    fetchPartners();
  }, [])

  useEffect(() => {
    fetchExpenses();
  }, [])

  useEffect(() => {
    fetchTrades();
  }, [])

  return (
    <>
      <Navbar selectedTab={selectedTab}/>
      <div>
        <Routes>
          <Route path="/" element={<Home setSelectedTab={setSelectedTab}/>}/>
          <Route path="/trades" element={<Trades setSelectedTab={setSelectedTab} trades={trades} setTrades={setTrades}/>}/>
          <Route path="/expenses" element={<Expenses setSelectedTab={setSelectedTab} expenses={expenses}/>}/>
          <Route path="/partners/" element={<Partners setSelectedTab={setSelectedTab} partners={partners}/>}/>
          <Route path="/reporting" element={<Reporting setSelectedTab={setSelectedTab} />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
