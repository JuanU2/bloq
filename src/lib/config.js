/**
 * All of these values are used throughout the site – for example, 
 * in the <meta> tags, in the footer, and in the RSS feed.
 * 
 * PLEASE BE SURE TO UPDATE THEM ALL! Thank you!
 **/ 

export const siteTitle = 'Bloq.sk'
export const siteDescription = 'Underground blog o témach budúcnosti'
export const siteURL = 'bloq.sk'
export const siteLink = 'bloq.sk'
export const siteAuthor = 'Juan Marcos'

// Controls how many posts are shown per page on the main blog index pages
export const postsPerPage = 10

// Edit this to alter the main nav menu. (Also used by the footer and mobile nav.)
export const navItems = [
	{
		title: 'Blog',
		route: '/blog'
	}, {
		title: 'O mne',
		route: '/about'
	}
]