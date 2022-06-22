import cakesRepository from "../repositories/cakesRepository.js"


export async function cakesnomepraperguntarfelipe(req, res){
    const { name, price, description, image } = req.body

    try{
        await cakesRepository.createCake(name, price, description, image)
        return res.sendStatus(201)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}