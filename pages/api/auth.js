import { GraphQLClient, gql } from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_MATBLOGS_ENDPOINT;
export default async function asynchandler(req, res) {
  console.log(req)
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${process.env.MATBLOGS_TOKEN}`,
    },
  });
  const query = gql`
  mutation CreateAuth($email: String!, $uid: Int!) {
    createAuth(data: { email: $email,  uid: $uid}) { id }
  }
  `;
  
  console.log("body => ",req.body);
  const result = await graphQLClient.request(query, {
    email: req.body?.email,
    uid: req.body?.uid,
  });

  return res.status(200).send(result);
}