import { MetadataRoute } from 'next';

// In a real application, you would fetch this data from your CMS or database.
const placeholderPostSlugs = ['first-post', 'deep-dive-into-nextjs', 'styling-with-tailwind'];

export default function sitemap(): MetadataRoute.Sitemap {
  // It's important to set the base URL of your site here.
  // The user should replace this with their actual domain.
  const siteUrl = 'https://www.flann-chen.com'; // Placeholder URL

  const staticPages = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const blogPages = placeholderPostSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'never', // Or 'monthly' if they might be updated
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
