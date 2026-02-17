<script lang="ts">
	import { SectionHeader, WorkExperience } from '$components';
	import image from '$assets/about-me.jpg';
	import Button from '$components/ui/Button.svelte';
	import { goto } from '$app/navigation';
	import type { DevExperience } from '../../types/sanity';

	interface AboutMeSectionProps {
		workExperiences: DevExperience[];
	}

	const { workExperiences }: AboutMeSectionProps = $props();

	function onclick() {
		goto('/contact');
	}
</script>

<section class="about-me mt-l">
	<SectionHeader sectionName="about-me">About. Me</SectionHeader>

	<div class="mt-m content-container default-margin">
		<img src={image} class="image" alt="About Me" />
		<div class="text">
			<p>
				Hello! I'm [Hozaifa Bin Masud], a passionate developer with a love for creating
				intuitive and
			</p>
			<p>
				My journey into coding began at a young age, and since then, I've honed my skills in
				various programming languages and frameworks. I enjoy collaborating with teams to bring
				innovative ideas to life and am always eager to learn new technologies and
				methodologies.
			</p>
			<p>
				When I'm not coding, you can find me exploring the outdoors, reading tech blogs, or
				experimenting with new recipes in the kitchen. I'm excited to connect with like-minded
				individuals and contribute to impactful projects.
			</p>

			<Button className="mt-m" {onclick}>Tell me about your projects</Button>
		</div>
	</div>

	<WorkExperience {workExperiences} />
</section>

<style>
	.content-container {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
	}

	.image {
		width: 42%;
		border-radius: 20px;
		object-fit: cover;
	}

	.text {
		width: 55%;
		text-align: left;
	}
</style>
