import Agent from '@/components/agent'
import React from 'react'

const Page = () => {
  return (
    <>
        <h3>
            Interview generation
        </h3>
        <Agent userName = "You" userId = "user1" type = "generate"/>

    </>
  )
}

export default Page