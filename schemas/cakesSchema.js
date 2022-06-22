import Joi from "joi";


const cakeSchema = Joi.object({
    name: Joi.string().min(2).required(),
    price: Joi.number().required(),
    description: Joi.string().allow(null, "").required(),
    image: Joi.string().uri().required()
})