import { Injectable } from '@nestjs/common'
import { Connection } from 'rethinkdb'
import * as RethinkDb from 'rethinkdbdash'

@Injectable()
export class DbService {
  public static initialize(): Promise<Connection> {
    return RethinkDb({
      pool: true,
      servers: [
        {
          host: process.env.DB_HOST,
          port: process.env.DB_PORT,
          user: process.env.DB_USER,
          password: process.env.DB_PASS
        }
      ]
    })
  }
}
