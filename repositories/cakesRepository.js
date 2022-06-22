import db from "../config/db.js";


async function createCake(name, price, description, image){
    return db.query(`
        INSERT INTO cakes (name, price, description, image) VALUES($1, $2, $3, $4)`,
        [name, price, description, image]
    )
}


const cakesRepository = {
    createCake
}

export default cakesRepository