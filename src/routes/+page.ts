import { sanityClient } from '$lib/sanity';
import type { DevExperience } from '../types/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const workExperiences: DevExperience[] = await sanityClient.fetch(
		`*[_type == "devExperience"] | order(startDate desc)`
	);

	return { workExperiences };
};
