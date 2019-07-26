module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory()
        .then(items => {
            res.status(200).send(items)           
        }).catch(err => {
            res.status(500).send({errorMessage: 'Error'})
            console.log(err)
        })
    },
    addProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, image} = req.body
        db.create_product([name, price, image])
        .then(createdItem => {
            res.status(200).send(createdItem)  
        }).catch(err => {
            res.status(500).send({errorMessage: 'Error'})
            console.log(err)
        })
    }
}
