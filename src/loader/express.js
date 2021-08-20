import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import routes from '../routes';

export default async ({ app }) => {

  // app.set("port", process.env.PORT);
  // app.set("views", path.join(__dirname, "../views"));

  // Settings
  app.enable('trust proxy');

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(morgan('tiny'));

  // Static files
  app.use(express.static(path.join(__dirname, '../static')));

  // Routes
  app.use('/xendit', routes.xenditCreditCard);
  app.use('/status', routes.status);
  app.get('/', routes.main.root);
  app.use(routes.main.notFound);
  app.use(routes.main.errorHandler);
  
  return app;
};
