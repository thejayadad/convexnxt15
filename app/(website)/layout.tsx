import Header from '@/components/header/header';
import React from 'react'

const layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div className=''>
       <Header />
       <main className='h-full'>
       {children}
       </main>
       <div className=''>
       Footer
       </div>
    </div>
  )
}

export default layout