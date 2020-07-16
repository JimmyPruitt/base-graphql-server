import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { DbService } from './db/db.service'

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useFactory: async () => ({
        debug: process.env.NODE_ENV === 'dev',
        playground: process.env.NODE_ENV === 'dev',
        autoSchemaFile: join(process.cwd(), 'src/schema.gql')
      })
    })
  ],
  providers: [
    {
      provide: 'DB_CONNECTION',
      useFactory: DbService.initialize
    }
  ]
})
export class AppModule {}
