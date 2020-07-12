import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useFactory: async () => ({
        debug: process.env.NODE_ENV === 'dev',
        playground: process.env.NODE_ENV === 'dev',
        autoSchemaFile: join(process.cwd(), 'src/schema.gql')
      })
    })
  ]
})
export class AppModule {}
