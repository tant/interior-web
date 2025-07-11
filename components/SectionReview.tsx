'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { desVariants, tagVariants, titleVariants } from "@/utils/animation"

const posts = [
  {
    id: 1,
    title: 'Our dream home brought to life',
    href: '#',
    description: 'The design team turned our ideas into a beautiful, functional space. Every detail was carefully considered and the result exceeded our expectations.',
    date: 'May 10, 2025',
    datetime: '2025-05-10',
    category: { title: '5.0', href: '#' },
    author: {
      name: 'Pham & Linh',
      role: 'Homeowners',
      href: '#',
      imageUrl: '/image/profile1.jpg',
    },
  },
  {
    id: 2,
    title: 'Professional and creative service',
    href: '#',
    description: 'From the first meeting to the final touches, the team was attentive and creative. Our office now feels modern and inspiring.',
    date: 'Apr 22, 2025',
    datetime: '2025-04-22',
    category: { title: '5.0', href: '#' },
    author: {
      name: 'Le Minh',
      role: 'Business Owner',
      href: '#',
      imageUrl: '/image/profile2.jpg',
    },
  },
  {
    id: 3,
    title: 'Excellent project management',
    href: '#',
    description: 'The renovation was completed on time and within budget. Communication was clear and the results are fantastic. Highly recommended!',
    date: 'Mar 30, 2025',
    datetime: '2025-03-30',
    category: { title: '5.0', href: '#' },
    author: {
      name: 'Tran Thi Hoa',
      role: 'Apartment Owner',
      href: '#',
      imageUrl: '/image/profile3.jpg',
    },
  },
]

export default function SectionReview() {
  return (
    <div className="pt-12"> 
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className={"text-3xl font-bold tracking-tight sm:text-4xl"}
        > 
          Customer&apos;s review 
        </motion.h2>
        <motion.p 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={desVariants}
          className={"mt-2 text-lg leading08 text-muted-foreground"}
        >
          
        </motion.p>
      
        <motion.div 
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className={"mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0 sm:py-16 py-10 border-b border-gray-200 border-t gap-y-16 "}
        >
        {
          posts.map((post) => (
            <article 
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime}>
                  <Image alt='' src="/image/star.svg" width={80} height={5} />
                </time>
                <a href={post.category.href}
                  className="relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black transition-all"
                >
                  {post.category.title}
                </a>
              </div>

              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span>{post.title}</span>
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">
                  {post.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4">
                <Image 
                  src={post.author.imageUrl} 
                  alt='' 
                  width={100} height={100} 
                  className="h-10 w-10 rounded-full bg-gray-500" 
                  
                />
                <div className="text-sm leading-6">
                  <p className="text-semibold">
                    <a href={post.author.href} >
                      <span></span>
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))
        }
        </motion.div>
      </div>
    </div>
  )
}