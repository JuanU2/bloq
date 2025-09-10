<script>
	import PostsList from '$lib/components/PostsList.svelte';
import { siteTitle } from '$lib/config';

	let { data } = $props();
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<!-- This is the README.md file in the root of the repo. It serves double duty as the homepage's content. If you'd rather use your own HTML and/or Svelte, you can delete/modify everything in this file. -->
<h1>
		Vitajte !
</h1>

<p>
	Tento blog som začal s účelom písať o témach ktoré ma zaujímajú, rád by som rozšíril povedomie o tom, ako fungujú bežné nástroje, ktoré denno denne používame <i>( ako napríklad internet )</i> pod kapotou.
</p>
<hr>
<PostsList posts={data.posts}/>
