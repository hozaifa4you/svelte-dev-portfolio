<script lang="ts">
	import { page } from '$app/state';
	import { HeroSection } from '$components';
	import AboutMeSection from '$components/sections/AboutMeSection.svelte';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Dev Portfolio - Home</title>
</svelte:head>

<HeroSection />
<AboutMeSection />
