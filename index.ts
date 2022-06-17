import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3001;

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger/swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req: Request, res: Response) => {
  res.send('Boo!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});