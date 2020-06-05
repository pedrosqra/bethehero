const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
 
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// ROTA DE LISTAGEM DE ONGS
routes.get('/ongs', OngController.index); 

// ROTA DE CADASTRO DE ONGAS
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    },)
}), OngController.create);

// ROTA DE LOGIN
routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    }),
}), SessionController.create);

// ROTA DE LISTAGEM DE CASOS DE UMA ONG LOGADA
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({authorization: Joi.string().required(),
}).unknown(),  
}), ProfileController.index);

// ROTA PÁGINA DE CASOS DE UMA ONG
routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
}), IncidentController.index); 

// ROTA DE CADASTRO DE INCIDENTES DE UMA ONG
routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    },)
}), IncidentController.create);

// ROTA PARA DELETAR UM INCIDENTE DE UM ONG
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({authorization: Joi.string().required(),
}).unknown(),
}), IncidentController.delete);

module.exports = routes;