import { client } from '@/sanity/lib/client'
import { MetadataRoute } from 'next'
import { Post } from './utils/interface'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  async function getPosts() {
    const query = `
    *[_type == "post"] {
      title,
      slug,
      publishedAt,
      excerpt,
      tags[]-> {
        _id,
        slug,
        name
      }
    }
    `
    const data = await client.fetch(query)
    return data
  }

  const posts: Post[] = await getPosts()

  const postUrls = posts.map(post => ({
    url: `https://slava-cms-blog.vercel.app/${post.slug.current}`,
    lastModified: new Date(post.publishedAt),
  }))

  return [
    {
      url: `https://slava-cms-blog.vercel.app/`,
      lastModified: new Date(),
    },
    {
      url: 'https://slava-cms-blog.vercel.app/tag',
      lastModified: new Date(),
    },
    ...postUrls,
  ]
}
