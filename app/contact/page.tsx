'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Switch } from "@headlessui/react"
import { TbArrowUpRight } from 'react-icons/tb';

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Contact() {
  const [agreed, setAgreed] = React.useState(false);

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Sales</h2>
        <p className="mt-2 text-lg leading-8 text-muted-foreground">
          Please feel free to ask anything
        </p>
      </div>
      <form className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="mt-2.5">
            <Input type='name' id='firstname' placeholder='First Name' />
          </div>

          <div className="mt-2.5">
            <Input type='name' id='lastname' placeholder='Last Name' />
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input type='name' id='company' placeholder='Company' />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input type='email' id='email' placeholder='Email address' />
            </div>
          </div>

          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Textarea placeholder='Type Your Message Here...' />
            </div>
          </div>

          <div className='flex gap-x-4 sm:col-span-2 items-center'>
            <Switch
              checked={agreed}
              onChange={setAgreed}
              name="terms"
              className={classNames(
                agreed ? 'bg-primary' : 'bg-gray-200',
                'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
              )}
            >
              <span className="sr-only">Agree to terms</span>
              <span
                aria-hidden="true"
                className={classNames(
                  agreed ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition'
                )}
              />
            </Switch>
            <label htmlFor="terms" className="text-sm leading-6 text-muted-foreground cursor-pointer select-none">
              I agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a>
            </label>
          </div>
          <div className='mt-10'>
            <Button type='submit' className='w-full flex items-center px-8 py-3 text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2'>Let&apos;s Talk <TbArrowUpRight className='w-5 h-5 ml-2' /></Button>
          </div>

        </div>
      </form>
    </div >
  );
}
