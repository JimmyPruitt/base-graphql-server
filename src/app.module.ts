import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { DbModule } from './db/db.module'

@Module({
  imports: [
    DbModule.forRoot(),
    GraphQLModule.forRoot({
      debug: process.env.NODE_ENV === 'dev',
      playground: process.env.NODE_ENV === 'dev',
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    })
  ],
  providers: []
})
export class AppModule {}
