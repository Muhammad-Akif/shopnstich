import { GraphQLClient, gql } from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_MATBLOGS_ENDPOINT;
const graphcmsToken = process.env.MATBLOGS_TOKEN
export default async function authentication(req, res) {
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    },
  });
  const query = gql`
  mutation CreateAuth($email: String!, $uid: String!) {
    createAuth(data: { email: $email,  uid: $uid}) { id }
  }
  `;
  const query_publish = gql`
  mutation PublishAuth($id: ID!) {
    publishAuth(where: { id: $id }, to: PUBLISHED) { id }
  }
  `;
  try {
    const createResult = await graphQLClient.request(query, req.body);
    const newVal = await createResult.createAuth
    console.log('main ---> ', newVal);
    if(newVal){
    const result = await graphQLClient.request(query_publish, newVal);
      return res.status(200).send(result);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}