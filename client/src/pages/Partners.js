import PartnerRibbon from '../components/Partners/PartnerRibbon'
import PartnerTable from '../components/Partners/PartnerTable'
import { useState, useEffect } from 'react'

export default function Partners({ setSelectedTab, partners }) {

    useEffect(() => {
        setSelectedTab("partners")
    }, [setSelectedTab])

    const [selectedPartners, setSelectedPartners] = useState([])

    return (
        <div>
            <PartnerRibbon selectedPartners={selectedPartners} setSelectedPartners={setSelectedPartners}/>
            <PartnerTable partners={partners} selectedPartners={selectedPartners} setSelectedPartners={setSelectedPartners}/>
        </div>
    )
}