<!-- This file handles any /blog/page/x route for pagination -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
  import { postsPerPage, siteDescription } from '$lib/config'

	let { data } = $props();
	const { page, totalPosts, posts } = data

	let lowerBound = $derived((page * postsPerPage) - (postsPerPage - 1) || 1)
	let upperBound = $derived(Math.min(page * postsPerPage, totalPosts))
</script>


<svelte:head>
	<title>Blog - stránka {page}</title>
	<meta data-key="description" name="description" content={siteDescription} />
</svelte:head>


<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
{#if posts.length}
	<h1>Posty {lowerBound}–{upperBound} z {totalPosts}</h1>
	<Pagination currentPage={page} {totalPosts} />

	<PostsList {posts} />

	<Pagination currentPage={page} {totalPosts} />
{:else}
	<h1>Ups!</h1>

	<p>Sorry, tu sa nenašiel žiaden post.</p>

	<a href="/blog">Späť na blog</a>
{/if}