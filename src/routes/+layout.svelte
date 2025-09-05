<script>
	let { children } = $props();
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '$lib/styles/global.css';

    import fixed_images from '$lib/data/fixed_images.json';
</script>

<svelte:head>
    <link rel="icon" href={"/"+fixed_images.favicon} />
</svelte:head>

<Navbar/>

{@render children()}

<Footer/>