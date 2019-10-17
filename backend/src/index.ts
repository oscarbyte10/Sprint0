import app from './app';
import './database/database';

const PORT = app.get('port');

app.listen(PORT, () => {
    console.log(`Servidor en puerto: ${PORT}: Conectado`);
});