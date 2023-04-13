import groq from 'groq';
import { SanityClient } from '@sanity/client';
import axios from 'axios';


const query = groq`
  *[_type == "projects"]
`

export default 