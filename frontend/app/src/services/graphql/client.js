import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import config from '../../config';

const client = new ApolloClient({
    uri: config.GRAPHQL_BASE_URL
});

/***
 * You can try these out at http://localhost:1337/graphql
 */

export const getStaticContent = () => {
    return client.query({
        query: gql`
            query {
                textfields(limit: 2000) {
                    key
                    content
                }
                mediafields(limit: 2000) {
                    key
                    media {
                        url
                        public_id
                    }
                }
            }
        `
    });
};

export const getDynamicContent = () => {
    return client.query({
        query: gql`
            query {
                events {
                    _id
                    name
                    shortDescription
                    begins
                    ends
                    linkToEventSite
                    linkToTickets
                    locationDescription
                    image {
                        url
                        public_id
                    }
                }
                partners {
                    name
                    website
                    description
                    mainPartner
                    supportingPartner
                    logo {
                        url
                        public_id
                    }
                }
                teammembers {
                    fullName
                    title
                    email
                }
                speakers {
                    name
                    topic
                    description
                    isOldSpeaker
                    image {
                        url
                        public_id
                    }
                }
            }
        `
    });
};
