export default function PartnerTable({ partners, selectedPartners, setSelectedPartners}) {

    const handleChange = (partner) => {

        const newSelectedPartners = selectedPartners.includes(partner)? selectedPartners.filter(selectedPartner => selectedPartner !== partner): [...selectedPartners, partner]
        setSelectedPartners(newSelectedPartners)
    }

    return (
        <table id="partner-table">
            <thead>
                <tr>
                    <th>Select</th>
                    <th>Investor Number</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Equity</th>
                </tr>
            </thead>
            <tbody>
                {(partners.map(partner => {
                    return (
                        <tr key={partner._id}>
                            <td><input type="checkbox" onChange={e=>{handleChange(partner)}}/></td>
                            <td>{partner.investorNo}</td>
                            <td>{partner.name}</td>
                            <td>{partner.address}</td>
                            <td>{partner.equity}</td>
                        </tr>
                    )
                }))}
            </tbody>
        </table>
    )
}