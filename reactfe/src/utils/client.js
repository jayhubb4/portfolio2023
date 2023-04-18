import React from 'react';
import { createClient } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: 'api8ljjp',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: import.meta.env.VITE_APP_SANITY_TOKEN,
})


const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);