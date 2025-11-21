import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DbConfigService {
  constructor(private configService: ConfigService) {}

  /**
   * Get DB configuration for Postgres (Docker Compose)
   */
  async getDbConfig() {
    // Puedes usar variables de entorno para estos valores en tu docker-compose.yml
    const dbConfig = {
      type: 'postgres',
      host: this.configService.get('POSTGRES_HOST', 'localhost'),
      port: parseInt(this.configService.get('POSTGRES_PORT', '5432'), 10),
      username: this.configService.get('POSTGRES_USER', 'postgres'),
      password: this.configService.get('POSTGRES_PASSWORD', 'postgres'),
      database: this.configService.get('POSTGRES_DB', 'postgres'),
      entities: [__dirname + '/../../**/*.entity.{ts,js}'],
      synchronize: true,
      cache: false,
    };

    return dbConfig;
  }
}