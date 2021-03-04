import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './films/films.module';


@Module({
  imports: [FilmsModule,
    MongooseModule.forRoot("mongodb://localhost/netflix")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
