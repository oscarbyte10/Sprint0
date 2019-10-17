import app from './app';

app.listen(app.get('port'));

console.log(`Servidor en puerto: ${app.get('port')}: Conectado`);