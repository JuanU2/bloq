<!-- Renders posts listed by category -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'

	let { data } = $props();
  const { page, totalPosts, posts } = data

	let lowerBound = $derived((page * postsPerPage) - (postsPerPage - 1) || 1)
	let upperBound = $derived(Math.min(page * postsPerPage, totalPosts))
</script>


<svelte:head>
	<title>Blog kategória - stránka {page}</title>
	<meta data-key="description" name={siteDescription}>
</svelte:head>


<!-- TODO: this is duplicated across multiple `+page.svelte` files -->
{#if posts.length}
	<h1>Posty {lowerBound}–{upperBound} z {totalPosts}</h1>
	<Pagination currentPage={page} {totalPosts} />

	<PostsList {posts} />

	<Pagination currentPage={page} {totalPosts} />
{:else}
	<h1>Ups!</h1>

	<p>Sorry, tu nenájdete žiaden post.</p>

	<a href="/blog">Späť na blog</a>
{/if}