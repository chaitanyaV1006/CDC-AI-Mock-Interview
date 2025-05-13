import { isaAuthenticated } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const RootLayout = async ({children}: {children: ReactNode}) => {
  // const isUserAuthenticated = await isaAuthenticated();
  // if(!isUserAuthenticated) redirect('/sign-in');
  return (
    <div className='root-layout'>
        <nav>
            <Link href="/" className='flex items-center gap-2'>
                <Image src = "/CDC_logo.png" alt = 'logo' width={150} height={200}/>
                <h2 className='text-primary-100'>CDC AI Mock Interview</h2>
            </Link>
        </nav>
        {children}
    </div>
  )
}

export default RootLayout