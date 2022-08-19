import ordersRepository from "../repositories/ordersRepositories.js"


export async function createOrders(req, res){
    const {clientId, cakeId, quantity, totalPrice} = req.body

    try {
        await ordersRepository.createOrderRepository(clientId, cakeId, quantity, totalPrice)

        return res.sendStatus(201)
    } catch (error) {
        console.log("⚠ Error in createOrders",error)
        return res.status(500).send("⚠ Error in createOrders")
    }
}

export async function getAllOrders(req, res){
    try{
        const orders = await ordersRepository.showAllordersReporsitory()
        const data = orders.map((order)=>{
            const response = {
            client: {
                id: order.clientId,
                name: order.clientName,
                address: order.address,
                phone: order.phone
            },
            cake: {
                id: order.cakeId,
                name: order.cakeName,
                price: order.price,
                description: order.description,
                image: order.image
            },
            orderId: order.orderId,
            createdAt: new Date(order.createdAt).toLocaleString('en-CA', {year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute:'2-digit'}) ,
            quantity: order.quantity,
            totalPrice: order.totalPrice
        }
        return response        
        })
        return res.send(data)
    } catch (error) {
        console.log("⚠ Error in getAllOrdersteOrders",error)
        return res.status(500).send("⚠ Error in getAllOrders")
    }
}