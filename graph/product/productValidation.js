import Joi from "joi"

export const addValidation = Joi.object({
    _id:Joi.string().required().length(24),
    title:Joi.string().required().min(4),
    price:Joi.number().required(),
    quantity:Joi.number().required(),
    description:Joi.string().required().min(4).max(300),
    categoryId:Joi.string().required().length(24),
    })


export const updateValidation = Joi.object({
_id:Joi.string().required().length(24),
title:Joi.string().min(4),
price:Joi.number(),
quantity:Joi.number(),
description:Joi.string().min(4).max(300),
categoryId:Joi.string().length(24),
})