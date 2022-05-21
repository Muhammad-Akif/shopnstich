import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_MATBLOGS_ENDPOINT;


export const getMenuDetails = async () => {
  const query = gql`
  query MyQuery {
    categories {
      name
      collections {
        name
        varieties {
          name,
          slug
        }
      }
    }
  }
  `
  const result = await request(graphqlAPI, query);
  console.log("result --> ", result);

  return result.categories;
}

export const getVarieties = async () => {
  const query = gql`
  query MyQuery {
    varietiesConnection {
      edges {
        node {
          slug
        }
      }
    }
  }
    `
  const result = await request(graphqlAPI, query);

  return result.varietiesConnection.edges;
}

export const getVarietyDetails = async (slug) => {
  const query = gql`  
    query getVarietyDetails($slug: String!) {
      variety(where: {slug: $slug}) {
        products {
          id
          name
          price
          image {
            url
          }
          slug
          createdAt
        }
        name
        collection {
          name
          category {
            name
          }
        }
        image {
          url
        }
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug });

  return result.variety;
}

export const getProducts = async () => {
  const query = gql`
  query MyQuery {
    productsConnection {
      edges {
        node {
          slug
        }
      }
    }
  }
    `
  const result = await request(graphqlAPI, query);

  return result.productsConnection.edges;
}

export const getProductDetails = async (slug) => {
  const query = gql`  
    query getProductDetails($slug: String!) {
      product(where: {slug: $slug}) {
            id
            name
            price
            slug
            description
            image {
              url
            }
            variety {
              name
            }
            category {
              name
            }        
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug });

  return result.product;
}

// export const getRecentPosts = async () => {
//   const query = gql`
//     query GetPostDetails() {
//       posts(
//         orderBy: createdAt_ASC
//         last:3
//       ){
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `
//   const result = await request(graphqlAPI, query);

//   return result.posts;
// }


// export const getSimilarPosts = async (categories,slug) => {
//   const query = gql`
//     query GetPostDetails($categories: [String!], $slug: String! ){
//       posts(
//         where: { slug_not: $slug, AND: {categories_some: { slug_in: $categories }}}
//         last: 3
//       ){
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `
//   const result = await request(graphqlAPI, query, { categories, slug});

//   return result.posts;
// }

// export const getCategories = async () => {
//   const query = gql`
//     query GetCategories {
//       categories { 
//         name
//         slug
//       }
//     }
//   `
//   const result = await request(graphqlAPI, query);

//   return result.categories;
// }

export const submitAuth = async (obj) => {
  console.log('obj --> ', obj)
  const result = await fetch('/api/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });

  return result.json();
};

// export const getComments = async (slug) => {
//   const query = gql`
//     query GetComments($slug:String!) {
//       comments(where: {post: {slug:$slug}}){
//         name
//         createdAt
//         comment
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query, { slug });

//   return result.comments;
// };

export const getAllProducts = async () => {
  const query = gql`
  query MyQuery {
    products {
      id
      excerpt
      name
      price
      slug
      image {
        url
      }
      description
      category {
        name
      }
    }
  }
  `;

  const result = await request(graphqlAPI, query);
  console.log('result ---> ',result);

  return result.products;
};

// export const getAdjacentPosts = async (createdAt, slug) => {
//   const query = gql`
//     query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
//       next:posts(
//         first: 1
//         orderBy: createdAt_ASC
//         where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//       previous:posts(
//         first: 1
//         orderBy: createdAt_DESC
//         where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
//       ) {
//         title
//         featuredImage {
//           url
//         }
//         createdAt
//         slug
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query, { slug, createdAt });

//   return { next: result.next[0], previous: result.previous[0] };
// };

// export const getCategoryPost = async (slug) => {
//   const query = gql`
//     query GetCategoryPost($slug: String!) {
//       postsConnection(where: {categories_some: {slug: $slug}}) {
//         edges {
//           cursor
//           node {
//             author {
//               bio
//               name
//               id
//               photo {
//                 url
//               }
//             }
//             createdAt
//             slug
//             title
//             excerpt
//             featuredImage {
//               url
//             }
//             categories {
//               name
//               slug
//             }
//           }
//         }
//       }
//     }
//   `;

//   const result = await request(graphqlAPI, query, { slug });

//   return result.postsConnection.edges;
// };