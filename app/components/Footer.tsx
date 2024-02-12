'use client'
import React, { FC, useEffect, useState } from 'react'
import Visitors from './Visitors'


type FooterProps = {
    visitors: number | undefined,
    getCounter: () => Promise<any>,
    incrementVisitors: (count: number | undefined) => Promise<void>
}

const Footer: FC<FooterProps> =  ({ getCounter, incrementVisitors, visitors }) => {
    const [counter, setCounter] = useState(visitors)

    // increment counter request & and set new counter from server
    useEffect(() => {
        const result = async () => {
            await incrementVisitors(counter)
            const c =  await getCounter()
            setCounter(c)
        }
        result()      
    }, [])
    
    
  return (
    <footer className="h-[10vh] flex justify-center items-center gap-10">
        
        {/* Visitors Component */}
       <Visitors counter={counter} />

    </footer>
  )
}

export default Footer


