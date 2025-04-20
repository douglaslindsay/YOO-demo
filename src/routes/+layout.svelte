<script>
	let { children } = $props();
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '$lib/styles/global.css';
</script>

<Navbar/>

{@render children()}

<Footer/>