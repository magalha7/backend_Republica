const express = require('express');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

// Settings
//Se existir uma porta no sistema use ela
app.set('port', process.env.PORT || 3000);

// Middlewares (Help in Data Procees)
app.use(cors({origin: 'http://localhost:4200'}));
app.use(express.json());

// Routes
app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/republicas', require('./routes/republica.routes'));
app.use('/api/despesas', require('./routes/despesa.routes'));
app.use('/api/tarefas', require('./routes/tarefa.routes'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Servidor rodando na porta ${app.get('port')}`);
});