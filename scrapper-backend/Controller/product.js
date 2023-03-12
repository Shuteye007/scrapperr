// exports.read = async (req, res) => {
//     console.log(req.body);
//     res.json(req.body);
// }
const Product = require('../models/product')


exports.listAll = async (req, res ) => {
    let products = await Product.find({})
    .exec();
    res.json(products);
    
};

// exports.create = async (req, res) => {
//     try{
//         console.log(req.body);
//         const newProduct = await new Product(req.body).save()
//         res.json(newProduct)

//     }catch (err) {
//         console.log(err);
//         res.status(400).send("Create product failed");
//         res.status(400).json({
//             err: err.message,
//         })
//     }
// };
