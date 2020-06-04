import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Client } from 'pg';
require("dotenv/config");

const DB_PASSWORD = process.env.DB_PASSWORD

export const client = new Client({
  user: 'jxecsymlrqqcwd',
  host: 'ec2-46-137-79-235.eu-west-1.compute.amazonaws.com',
  database: 'd2jlee0a60a8qd',
  password: DB_PASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false
  }
})
client.connect();

client.query('SELECT * FROM public.suplies ORDER BY id ASC', (err, res) => {
  console.log(err, res.rows)
  // client.end()
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
