"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
// left section image
import image from '../../public/photo-1493612276216-ee3925520721.avif'


const Main: FC = () => {
    const [text, setText] = useState('')
    const [animate, setAnimate] = useState(false)

    useEffect(() => {        
        // get first random text
        handleText()
    }, [])    

    // get random chuck norris text from api
    const handleText = async () => {

        text && setAnimate(true)
        const res = await fetch('https://api.chucknorris.io/jokes/random?category=dev')
        if (!res.ok) {
        console.log(res);
        }  
        setTimeout(() => setAnimate(false), 600)
        const data = await res.json()
        setText(data.value)
    }

  return (
    <main className="flex min-h-[80vh] w-full justify-center items-center  p-24 h-full">
        
      {/* Image-section */}
      <section className="w-[50%] h-full flex justify-center ">
        <Image src={ image} alt="Chuck Norris image" width={400} placeholder="blur" className="shadow-2xl"/>
      </section>

      {/* Text-section */}
      <section className="flex flex-col w-[50%] h-full items-center justify-around gap-20">
        {/* text */}
        <div className="h-full">
            <h2 className="text-xl text-gray-800"> { text } </h2>
        </div>
        {/* button */}
        <button  
            // get new random text
            onClick={handleText} 
            className={animate ? "button animate uppercase" : "button uppercase"}
        >Click me </button>
      </section>

    </main>
  );
};


export default Main;
