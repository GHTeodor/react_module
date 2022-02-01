import Joi from "joi";


export const carValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[a-zA-ZА-ЯїЇґҐ]{1,20}$')).required().messages({
        'string.empty': 'поле "model" не може бути порожнім',
        'string.pattern.base': 'Тільки букви мінімум 1 максимум 20'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.empty': 'поле "price" не може бути порожнім',
        'number.min': '"price" Має бути більше або рівне 0',
        'number.max': '"price" Має бути менше, ніж 1 000 000'
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.empty': 'поле "year" не може бути порожнім',
        'number.min': '"year" від 1990',
        'number.max': '"year"до теперішнього'
    })
});