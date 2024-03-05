
// IMPORTAMOS DEPENDENCIAS DE LIBRERIAS
import express from 'express';
import "dotenv/config";

const app =express();

//PARSEA EL BODY
app.use(express.json())

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

