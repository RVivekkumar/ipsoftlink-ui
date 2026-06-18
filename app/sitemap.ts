import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ipsoftlink.com',
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://ipsoftlink.com/about',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://ipsoftlink.com/contact',
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://ipsoftlink.com/software-development',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://ipsoftlink.com/mobile-developement',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://ipsoftlink.com/IT-consulting',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://ipsoftlink.com/digital-marketing',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://ipsoftlink.com/erp',
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
