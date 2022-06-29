import { gql, request } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_BLOG_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
        query MyQuery {
            postsConnection {
                edges {
                    node {
                        author {
                            bio
                            id
                            name
                            photo {
                                url
                            }
                        }
                        createdAt
                        slug
                        title
                        excerpt
                        featuredImage {
                            url
                        }
                        categories {
                            slug
                            name
                        }
                    }
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
};
