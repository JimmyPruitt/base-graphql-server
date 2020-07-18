import RethinkDb from 'rethinkdbdash'
import { Provider } from '@nestjs/common'

export class DbProvider {
  public static createProviders(): Provider[] {
    return [this.createConnectionProvider()]
  }

  public static createConnectionProvider(): Provider {
    return {
      provide: 'DB_CONNECTION',
      useFactory: () =>
        RethinkDb({
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
}
