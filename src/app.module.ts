import { Module } from '@nestjs/common';
import { FactsModule } from './facts/facts.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    FactsModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "monorail.proxy.rlwy.net",
      port: 3307,
      username: "user_crud",
      password: "root",
      database: "db_crud",
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
