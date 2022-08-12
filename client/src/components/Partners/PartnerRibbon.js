import Delete from '../../assets/delete.svg'
import add from '../../assets/add.svg'
import edit from '../../assets/edit.svg'
import '../Ribbon.css'
import AddPartner from './AddPartner'
import EditPartner from './EditPartner'
import { useState } from 'react'


export default function PartnerRibbon({ selectedPartners }) {

    const [showAddPartner, setShowAddPartner] = useState(false)
    const [showEditPartner, setShowEditPartner] = useState(false)

    const toggleShowAddPartner = () => {
        setShowAddPartner(!showAddPartner)
    }

    const toggleShowEditPartner = () => {
        if (!showEditPartner) {
            if (selectedPartners.length === 1) {
                setShowEditPartner(!showEditPartner)
            } 
        } else {
            setShowEditPartner(!showEditPartner)
        }
        
    }

    const deletePartners = (selectedPartners) => {

        const url = "http://localhost:8080/partners/delete"

        try {
            selectedPartners.forEach((partner) => {
                fetch(url, {
                    method: "DELETE",
                    headers: {'Content-Type': 'application/json'}, 
                    body: JSON.stringify(partner)
                }).then((res) => {
                    console.log("Request complete! response:", res)
                    window.location.reload()
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="ribbon">
            <div>
                <button onClick={e=>toggleShowAddPartner()}><img src={add} alt="add partner"/></button>
                {showAddPartner ? <AddPartner/> : null}
                <p>Add<br/>Partner</p>
            </div> 
            <div>
                <button onClick={e=>toggleShowEditPartner()}><img src={edit} alt="edit partner"/></button>
                {showEditPartner ? <EditPartner selectedPartners={selectedPartners} /> : null}
                <p>Edit<br/>Partner</p>
            </div>
            <div>
            <button onClick={e=>deletePartners(selectedPartners)}><img src={Delete} alt="delete partner"/></button>
                <p>Delete<br/>Partner</p>
            </div>
        </div>
    )
}