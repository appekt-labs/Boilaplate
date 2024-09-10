import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import Image from 'next/image'
function WaitListHeroSection() {
  return (
    <div className='grid lg:grid-cols-2 gap-5 lg:gap-2'>
    <section className='col-span-1 flex flex-col justify-center gap-6 lg:gap-4 text-center'>
        {/* Hero Title */}
        <div>
            <h1 className='text-xl lg:text-2xl font-semibold md:font-bold '>Be the first to experience BoilaPlate</h1>
        </div>
        {/* Hero Description */}
        <div>
            <p className='opacity-70 md:opacity-90'>
            Join our waitlist today and get early access to BoilaPlate. Effortlessly build your application with our next.js app boilerplate.
            </p>
        </div>
        {/* WaitList Form */}
        <div className='px-2'>
            <form className='flex gap-2'>
                <Input type="text" className='rounded-3xl ' placeholder="Enter your email" />
                <Button className='rounded-3xl' type="submit">Notify Me</Button>
            </form>
        </div>
    </section>
     <div className='hidden lg:col-span-1 lg:grid'>
     <Image src="https://fakeimg.pl/600x400" height={400} width={600}  alt='Product Illustration' />
     </div>
     <div className='lg:col-span-1 grid lg:hidden'>
     <Image src="https://fakeimg.pl/400x400" height={400} width={400}  alt='Product Illustration' />
     </div>
    </div>

  )
}

export default WaitListHeroSection