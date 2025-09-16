<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$components';

	function handleClick() {
		goto('/#contact-form');
	}
</script>

<section class="hero-section default-margin">
	<h3>Hello! I'm Hozaifa</h3>
	<div class="underscore mb-m"></div>

	<h1>I'm a Svelte Developer crafting intuitive & performance</h1>
	<h1 class="dark-grey mb-m">web experiences</h1>

	<Button onclick={handleClick}>Let's Talk</Button>
</section>

<style>
	.hero-section {
		padding-top: 60px;
	}
</style>
