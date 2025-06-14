import { Module } from '@nestjs/common';
import Redis from 'ioredis';

@Module({
  providers: [
    {
      provide: 'REDIS_CLIENT',
      useFactory: () => {
        return new Redis({
          host: 'redis-18745.c44.us-east-1-2.ec2.redns.redis-cloud.com',
          port: 18745,
          password: 'MwtTXZjdyiFNI48QoA1JUoPKmMX8RAK9',
        });
      },
    },
  ],
  exports: ['REDIS_CLIENT'],
})
export class RedisModule {}
