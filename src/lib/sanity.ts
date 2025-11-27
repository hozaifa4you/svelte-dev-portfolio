import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
	projectId: 'ou0hvnfk',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2025-11-27'
};

export const sanityClient = createClient(config);
