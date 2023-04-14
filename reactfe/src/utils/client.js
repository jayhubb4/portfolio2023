import React from 'react';
import { createClient } from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const projectId = import.meta.VITE_APP_SANITY_ID;
const token = import.meta.VITE_APP_SANITY_TOKEN;

export const client = createClient({
    projectId: 'api8ljjp',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: import.meta.VITE_APP_SANITY_TOKEN,
})


const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);