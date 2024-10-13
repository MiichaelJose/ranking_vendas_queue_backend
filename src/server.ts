import 'dotenv/config';
import 'reflect-metadata';
import { config } from '@shared/config';

import Application from '@shared/infra/bull/app';

const port = Number(config.get('port')) || 3009;

Application.start(port, () => {
  console.log(`✈️  Bull as started`, port);
}).catch(error => {
  console.error('🚨 Error on start server', error);
});
