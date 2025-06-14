import { Module } from '@nestjs/common';
import { EmbeddingService } from './common/embedding.service';
import { HealthController } from './health/health.controller';
import { BullModule } from '@nestjs/bull';
import { MatchModule } from './match/match.module';
import { JobModule } from './jobs/job.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [
    JobModule,
    DbModule,
    BullModule.forRoot({
      redis: {
        host: 'redis-18745.c44.us-east-1-2.ec2.redns.redis-cloud.com',
        port: 18745,
        password: 'MwtTXZjdyiFNI48QoA1JUoPKmMX8RAK9',
      },
    }),

    MatchModule,
  ],
  controllers: [HealthController],
  providers: [EmbeddingService],
})
export class AppModule {}
