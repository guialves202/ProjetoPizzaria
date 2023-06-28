import express from 'express';
import routes from './routes.js';
import cors from 'cors';

const app = express();

// indicar para o express ler body em json;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    app.use(cors());
    next();
})

// usar as rotas
app.use(routes);

export default app;
