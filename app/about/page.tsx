'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TbArrowUpRight } from 'react-icons/tb';
import { motion } from 'framer-motion';
import { titleVariants } from '@/utils/animation';
import { useScroll, useTransform } from 'framer-motion';

const AboutPage = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className='pb-10'>
      <div className="bg-[url('/image/whoweare.jpg')] bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64">Who are we?</h1>
      </div>
      <div className="container">
        <div className="pt-4">
          <motion.h2
            initial={"offscreen"}
            whileInView={"onscreen"}
            variants={titleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl"
          >
            We have great idea & Interior Design
          </motion.h2>
          <motion.p
            className="text-2xl text-center font-medium pb-10 mt-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Our interior design company is a company that provides interior design services for homes, offices, apartments, and others. We provide the best interior design services for you. We have a team that is experienced in the field of interior.
          </motion.p>
        </div>
        <div className="items-center lg:flex gap-x-8">
          {/* Left Image Section */}
          <motion.div
            style={{ scale }}
            ref={ref}
            className="w-full">
            <Image src="/image/gallery1123.jpg" width={700} height={700} alt="Gallery showcase" />
          </motion.div>
          {/* Right Content Section */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
          >
            <p className='pb-8 tracking-wide mt-6'>
              At our interior design company, we believe every space can inspire and transform your life. Our journey began with a passion for creativity and a commitment to exceptional design that blends aesthetics and function. Our experienced team works closely with clients to understand their vision, delivering fresh ideas and practical solutions for homes and offices.
              <br />
              Our portfolio spans modern apartments to commercial spaces, each tailored to our clients’ needs. We balance trends with timeless style, focusing on quality and sustainability. From start to finish, we prioritize communication and attention to detail.
              <br />
              <span className='text-xl font-extrabold tracking-tight'>We are dedicated to enhancing your lifestyle through thoughtful, inspiring design.</span>
            </p>
            <Button className="inline-flex items-center px-8 py-3 shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
              Read More <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
        
        {/* Team Section */}
        <div className='lg:py-20'>
            <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className='pt-8 pb-4'
            >
            <h1 className='text-4xl font-bold tracking-wider text-center uppercase'>Team</h1>
            </motion.div>

          <div className='grid py-8 gap-20 lg:grid-cols-3'>
            <div className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src="/image/profile2.jpg" width={200} height={200} alt='' className='mx-auto rounded-full' />
                <h2 className='py-4 text-2xl font-semibold uppercase'>Lead Designer</h2>
                <p className='text-sm'>
                  Expert in creative concepts and interior aesthetics, ensuring every project is visually stunning and functional.
                </p>
              </div>
            </div>

            <div className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src="/image/profile3.jpg" width={200} height={200} alt='' className='mx-auto rounded-full' />
                <h2 className='py-4 text-2xl font-semibold uppercase'>Project Manager</h2>
                <p className='text-sm'>
                  Oversees project timelines and client communication, delivering seamless and successful design experiences.
                </p>
              </div>
            </div>

            <div className='border-2 border-primary'>
              <div className='p-4 text-center bg-gray-100 aspect-square dark:bg-tertiary -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3'>
                <Image src="/image/profile1.jpg" width={200} height={200} alt='' className='mx-auto rounded-full' />
                <h2 className='py-4 text-2xl font-semibold uppercase'>Senior Architect</h2>
                <p className='text-sm'>
                  Specializes in structural planning and innovative solutions, blending architecture with interior design.
                </p>
              </div>
            </div>
          </div>


        </div>


      </div>
    </div>
  );
};

export default AboutPage;

