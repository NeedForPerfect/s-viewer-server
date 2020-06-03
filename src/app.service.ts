import { Injectable } from '@nestjs/common';
import { client } from './main';



@Injectable()
export class AppService {
  getHello(): any {
    return {hello: 'Change'};
  }


  async getSuplies() {
    return await new Promise((resolve, reject) => {
      client.query('SELECT * FROM public.suplies ORDER BY id ASC', (err, res) => {
        resolve(res.rows);
      });
    });
  }

}
