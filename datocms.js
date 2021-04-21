import { GraphQLClient } from 'graphql-request'
import { datoToken } from '@/config/dev'

export function request ({ query, variables, preview }) {
  const endpoint = preview
    ? 'https://graphql.datocms.com/preview'
    : 'https://graphql.datocms.com/'
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${datoToken}`
    }
  })
  return client.request(query, variables)
}
