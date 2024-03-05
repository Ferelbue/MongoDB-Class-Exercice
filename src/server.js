
// IMPORTAMOS DEPENDENCIAS DE LIBRERIAS
import express from 'express';
import "dotenv/config";
import { dbConnection } from './database/db.js';

const app = express();

//PARSEA EL BODY
app.use(express.json())

const PORT = process.env.PORT || 4001;

dbConnection()
    .then(() => {

        console.log('Database connected')

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    })
    .catch(error => {

        console.log(error)
    })


