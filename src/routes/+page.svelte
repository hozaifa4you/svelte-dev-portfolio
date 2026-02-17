<script lang="ts">
	import { HeroSection } from '$components';
	import AboutMeSection from '$components/sections/AboutMeSection.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	let { workExperiences } = data;
</script>

<svelte:head>
	<title>Dev Portfolio - Home</title>
</svelte:head>

<HeroSection />
<AboutMeSection {workExperiences} />
