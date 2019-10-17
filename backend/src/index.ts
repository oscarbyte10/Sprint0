import app from './app';
import './database';
import bodyParser from 'body-parser';

const PORT = app.get('port');

app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`Servidor en puerto: ${PORT}: Conectado`);
});