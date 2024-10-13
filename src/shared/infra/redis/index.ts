import Redis from 'ioredis';

import { config } from '@shared/config';

const RedisClient = new Redis(config.get('redis.cacheUri'), {
  maxRetriesPerRequest: null
});

RedisClient.on('connect', () => {
  console.log('Conectado a Redis', config.get('redis.cacheUri'));
});

RedisClient.on('error', error => {
  console.error('error', error);
});

export { RedisClient };
