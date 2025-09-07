<script>
	let { data } = $props();
  const { uniqueCategories } = data
</script>


<svelte:head>
	<title>Blog | Kategórie</title>
</svelte:head>


<div class="compressed-content">
	<h1 class="h2">Všetky kategórie blogov</h1>
	
	<ul>
		{#each uniqueCategories as category}
		<li>
			<a href="/blog/category/{category.title}">
				{ category.title }
			</a>
			({category.count})
		</li>
		{/each}
	</ul>
</div>