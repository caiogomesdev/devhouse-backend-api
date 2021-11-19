const app = require('./app')

const PORT = 3333

app.listen(process.env.PORT | PORT, ()=> console.log('Servidor online na porta', PORT))