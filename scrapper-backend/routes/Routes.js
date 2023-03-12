const express = require('express');
const router = express.Router()


const {listAll,create} = require("../Controller/product");


router.get('/product', listAll);
router.post('/product',create);
// router.post('/product');



module.exports = router;