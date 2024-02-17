import Image from 'next/image'
import React from 'react'
import image from '../../../public/photo-1493612276216-ee3925520721.avif'


const LeftSectionMainPage = () => {
  return (
    <section className="w-[50%] h-full flex justify-center ">
    <Image src={ image} alt="Chuck Norris image" width={400} placeholder="blur" className="shadow-2xl"/>
  </section>
  )
}

export default LeftSectionMainPage
