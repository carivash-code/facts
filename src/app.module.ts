import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FactsModule } from './facts/facts.module';
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    ConfigModule.forRoot(),
    FactsModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "viaduct.proxy.rlwy.net",
      port: 54302,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
