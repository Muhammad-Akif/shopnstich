import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_MATBLOGS_ENDPOINT;

/** *************************************************************
 * Any file inside the folder pages/api is mapped to /api/* and  *
 * will be treated as an API endpoint instead of a page.         *
 *************************************************************** */

// export a default function for API route to work
export default async function asynchandler(req, res) {
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${process.env.MATBLOGS_TOKEN}`,
    },
  });
  const query = gql`
    mutation CreateAuth($email: String!, $uid: Int) {
      createAuth(data: { email: $email,  uid:$uid}) { id }
    }
  `;
    console.log("body => ",req.body);
  const result = await graphQLClient.request(query, {
    // name: req.body.name,
    email: req.body.email,
    uid: req.body.uid,
    // comment: req.body.comment,
    // slug: req.body.slug,
  });

  return res.status(200).send(result);
}