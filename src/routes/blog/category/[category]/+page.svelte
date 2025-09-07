<!-- Renders any page at /blog/category/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
  import { postsPerPage } from '$lib/config'

	let { data } = $props();

  const { page, posts, category, total } = data

	let lowerBound = $derived((page * postsPerPage) - (postsPerPage - 1) || 1)
	let upperBound = $derived(Math.min(page * postsPerPage, total))
</script>


<svelte:head>
	<title>Kategória: {category}</title>
</svelte:head>


<h1>Blog kategória: {category}</h1>

{#if posts.length}
	<PostsList posts={posts} />
	<Pagination currentPage={page} totalPosts={total} path="/blog/category/{category}/page" />
{:else}
	<p><strong>Ups!</strong> Prepáčte, z tejto kategórie sa nenašiel žiaden post "{category}".</p>

	<p><a href="/blog">Späť na blog</a></p>
{/if}