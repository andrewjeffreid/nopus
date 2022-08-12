const express = require('express');
const router = express.Router();

const { getAllPartners, createPartner, updatePartnerById, deletePartnerById } = require('../controllers/partner');

// get all products from db
router.get('/', getAllPartners);

router.post('/create', createPartner);

router.put('/update', updatePartnerById);

router.delete('/delete', deletePartnerById);

module.exports = router;