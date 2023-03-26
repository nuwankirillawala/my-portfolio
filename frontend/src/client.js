import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// import dotenv from 'dotenv';
// dotenv.config();

export const client = sanityClient({
    projectId: 'zwaiapj9',
    // projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skE2pjsh8pgaLwq9jfkweGhyMTrdkCHIYxDUQJB5ff76mrzMaqiIK9GloQBO3voxOq5cd51Y7Bi0XcH63tQoMHivuNi7GU9emLdxGqEmFgmAfsj6poM786MN4hzXL7Ja14RytlPzUz7KwFVakg5PwIt4y2P7cqGK5vIsfhn1W8z9FLTUMxl9'
    // token: process.env.REACT_APP_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);