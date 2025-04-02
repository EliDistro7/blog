

import { groq } from 'next-sanity'

import { client } from '../../sanity/lib/client'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '../../sanity/lib/utils'
import { formatDate } from '../../sanity/lib/utils'
import Link from 'next/link'

export async function generateStaticParams() {
  const slugs = await client.fetch(groq`
    *[_type == "event" && defined(slug.current)] {
      "slug": slug.current
    }
  `)
  return slugs
}

export default async function EventPage({ params }: { params: { slug: string } }) {
  const event = await client.fetch(groq`
    *[_type == "event" && slug.current == $slug][0] {
      _id,
      title,
      date,
      location,
      description,
      featuredImage,
      "relatedPosts": relatedPosts[]->{
        title,
        slug,
        excerpt,
        coverImage
      }
    }
  `, { slug: params.slug })

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <article>
        <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
        
        <div className="flex gap-4 mb-8">
          <p className="text-gray-600">
            <span className="font-medium">Date:</span> {formatDate(event.date)}
          </p>
          {event.location && (
            <p className="text-gray-600">
              <span className="font-medium">Location:</span> {event.location}
            </p>
          )}
        </div>

        {event.featuredImage && (
          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={urlForImage(event.featuredImage).url()}
              alt={event.featuredImage.alt || event.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="prose lg:prose-xl max-w-none mb-12">
          <PortableText value={event.description} />
        </div>

        {event.relatedPosts?.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Blog Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {event.relatedPosts.map((post) => (
                <Link 
                  key={post.slug.current} 
                  href={`/blog/${post.slug.current}`}
                  className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {post.coverImage && (
                    <div className="h-40 relative">
                      <Image
                        src={urlForImage(post.coverImage).url()}
                        alt={post.coverImage.alt || post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  )
}