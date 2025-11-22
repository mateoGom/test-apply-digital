import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppConfigModule } from './config/appconfig.module';
import { DbConfigService } from './config/services/dbconfig.service';
import { ProductModule } from './publicModule/providers/products/module/product.module';




@Module({

  imports: [
   AppConfigModule,

    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule, AppConfigModule],
    //   inject: [DbConfigService],
    //   useFactory: async (dbConfigService: DbConfigService): Promise<TypeOrmModuleOptions> => {
    //     const dbConfig = await dbConfigService.getDbConfig();
    //     return {
    //       ...dbConfig,
    //     };
    //   },
    // }),
        ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
