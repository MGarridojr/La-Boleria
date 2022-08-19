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