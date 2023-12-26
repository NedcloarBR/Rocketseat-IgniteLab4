import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/Database/database.module';
import { HttpModule } from './modules/Http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
