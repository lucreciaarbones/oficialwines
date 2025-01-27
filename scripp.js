const express = require('express');
const app = express();
const PORT = 3000;

// Ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Inicia el servidor y muestra el mensaje en la terminal
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
