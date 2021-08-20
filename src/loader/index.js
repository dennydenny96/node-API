import 'dotenv/config';
import expressLoader from './express';

const init = async ({ expressApp }) => {
  await expressLoader({ app: expressApp });
  console.log('Express Initialized');

  // More loaders can be initialized here
};

export default { init };
