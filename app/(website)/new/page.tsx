import PostForm from '@/components/form/post-form'
import HeroSection from '@/components/home/hero'
import Link from 'next/link'
import React from 'react'

const NewPage = () => {
  return (
    <div className="w-full">
        <HeroSection
        title='NewPost'
        description=''
        subDescription=''
        showDescription={false}
        />
        <div className='mx-auto max-w-screen-lg flex flex-col px-4 py-8'>
            <div className='flex items-center'>
                <Link href='/'>
                    Back
                </Link>
                
            </div>
            <div className='w-full py-8'>
                    <PostForm />
            </div>
        </div>
    </div>
  )
}

export default NewPage