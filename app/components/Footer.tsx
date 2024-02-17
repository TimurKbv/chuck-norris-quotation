import React, { FC } from 'react'
import Visitors from './Visitors'
import { prisma } from '@/prisma'

// GET VisitCounter
const getCounter = async () => {
  'use server'
  const visitors = await prisma.visitor.findUnique({
      where: {
         id: "65bbaadc02c0c3f726dcbf3a" 
      },
      select: {
        count: true
      }
    })
    return Number(visitors?.count)
}
// increment VisitCounter
const incrementVisitors = async (count: number | undefined) => {
  'use server'
  
  let newCount = count ? count + 1 : undefined

  await prisma.visitor.update({
      where: {
         id: "65bbaadc02c0c3f726dcbf3a" 
      },
      data: {
        count: newCount
      }
    })
}

const Footer: FC = async () => {
      // get visitCounter from server
    const counter = await getCounter()
    
  return (
    <footer className="h-[10vh] flex justify-center items-center gap-10">
        
        {/* Visitors Component */}
       <Visitors visitors={counter} incrementVisitors={incrementVisitors} getCounter={getCounter} />

    </footer>
  )
}

export default Footer


