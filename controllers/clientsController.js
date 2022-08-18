import clientsRepository from "../repositories/clientsRepositories.js"


export async function createClients(req, res){
    const {name, address, phone} = req.body

    try {
        await clientsRepository.createClientsRepository(name, address, phone)
        return res.sendStatus(201)
    } catch (error) {
        console.log("⚠ Error in createClients",error)
        return res.status(500).send("⚠ Error in createClients")
    }
}