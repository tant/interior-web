'use client'

import React from 'react'
import Badge from './Badge'
import { motion } from 'framer-motion'
import { titleVariants, tagVariants } from '@/utils/animation'

const SectionStats = () => {
  return (
    <div className='bg-primary dark:bg-tertiary py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
            {/* Badge 1 */}
            <motion.div 
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className={'mx-auto flex max-w-xs flex-col gap-y-4'}
            >
              <dt className='text-white leading-7'>
                Projects Completed
              </dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
                <Badge 
                  endCountNum={250}
                  endCountText=' +'
                  containerStyles=''
                />
              </dd>
            </motion.div>
            {/* Badge 2 */}
            <motion.div 
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVariants}
              className={'mx-auto flex max-w-xs flex-col gap-y-4'}
            >
              <dt className='text-white leading-7'>
                Satisfied Clients
              </dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
                <Badge 
                  endCountNum={1200}
                  endCountText=' +'
                  containerStyles=''
                />
              </dd>
            </motion.div>
            {/* Badge 3 */}
            <motion.div 
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVariants} 
              className={'mx-auto flex max-w-xs flex-col gap-y-4'}
            >
              <dt className='text-white leading-7'>
                Years of Experience
              </dt>
              <dd className='order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl'>
                <Badge 
                  endCountNum={10}
                  endCountText=' +'
                  containerStyles=''
                />
              </dd>
            </motion.div>
        </dl>
      </div>
    </div>
  )
}

export default SectionStats