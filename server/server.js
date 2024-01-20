import express from 'express'
import axios from "axios"
import cors from 'cors'


const app = express()
const puerto = 3000; // Elige el puerto que prefieras
app.use(cors())

// Ruta para redirigir las solicitudes a la API objetivo
app.get('/api/categories', async (req, res) => {
    try {
      // Realiza la solicitud a la API objetivo
      const response = await axios.get('https://api-quiz-b9lw.onrender.com/api/quiz');
  
      // Envia la respuesta de la API objetivo de vuelta al cliente
      res.json(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error en la solicitud a la API objetivo:', error);
      res.status(500).send('Error interno del servidor');
    }
  });
  
  // Inicia el servidor en el puerto especificado
  app.listen(puerto, () => {
    console.log(`Servidor proxy escuchando en el puerto ${puerto}`);
  });