import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import cors from'cors';

// import agentRoutes from './api/server/routes/AgentRoutes';

config.config();

const app = express();

// Log requests to the console.
app.use(logger('dev'));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 5000;

// app.use('/api/v1/agent', agentRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to Neon School Forum API.'
}));

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});

export default app