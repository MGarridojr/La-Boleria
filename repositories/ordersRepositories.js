import db from "../config/db.js"


async function createOrderRepository(clientId, cakeId, quantity, totalPrice){
    const query = `
        INSERT INTO orders("clientId", "cakeId", quantity, "totalPrice") VALUES($1, $2, $3, $4)`
    const values = [clientId, cakeId, quantity, totalPrice]

    return db.query(query, values)
}

async function showAllordersReporsitory(){
    const query = `
        SELECT 
            cl.id as "clientId", 
            cl."name" as "clientName", 
            cl.address, 
            cl.phone, 
            ca.id as "cakeId", 
            ca."name" as "cakeName",
            ca.price,
            ca.description,
            ca.image,
            o.id as "orderId",
            o."createdAt",
            o.quantity,
            o."totalPrice"  FROM orders o
        JOIN clients cl ON cl.id = o."clientId"
        JOIN cakes ca ON ca.id = o."cakeId"`

   const orders = await db.query(query)

   return orders.rows
}

async function showOrderReporsitory(id){
    const query = `
        SELECT 
            cl.id as "clientId", 
            cl."name" as "clientName", 
            cl.address, 
            cl.phone, 
            ca.id as "cakeId", 
            ca."name" as "cakeName",
            ca.price,
            ca.description,
            ca.image,
            o.id as "orderId",
            o."createdAt",
            o.quantity,
            o."totalPrice"  FROM orders o
        JOIN clients cl ON cl.id = o."clientId"
        JOIN cakes ca ON ca.id = o."cakeId"
        WHERE o.id=$1`
    
    const value = [id]

   const orders = await db.query(query, value)

   return orders.rows
}

const ordersRepository = {
    createOrderRepository,
    showAllordersReporsitory,
    showOrderReporsitory
}

export default ordersRepository