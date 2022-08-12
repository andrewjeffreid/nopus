const partner = require("../models/partner");

// READ
const getAllPartners = async (req, res) => {

    res.send(await partner.find())
}

// CREATE
const createPartner = (req, res) => {

    partner.create({
        investorNo: req.body.investorNo,
        name: req.body.name,
        address: req.body.address,
        equity: req.body.equity,
    })

    res.send("created");
}

// UPDATE
const updatePartnerById = async (req, res) => {

    await partner.updateOne({_id: req.body._id}, {$set:
        {
        investorNo: req.body.investorNo,
        name: req.body.name,
        address: req.body.address,
        equity: req.body.equity
        },
    })

    res.send("updated");
}

//DELETE
const deletePartnerById = async (req, res) => {
    
    await partner.deleteOne({_id: req.body._id})

    res.send("deleted");
}

module.exports = {
    getAllPartners,
    createPartner,
    updatePartnerById,
    deletePartnerById,
}

