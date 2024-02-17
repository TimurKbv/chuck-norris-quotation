"use client";
import React, { FC, useEffect, useState } from "react";
import Button from "../Button";

const RightSectionMainPage: FC = () => {
  const [text, setText] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // get first random text
    handleText();
  }, []);

  // get random chuck norris text from api
  const handleText = async () => {
    
    text && setAnimate(true);
    const res = await fetch(
      "https://api.chucknorris.io/jokes/random?category=dev"
    );
    if (!res.ok) {
      console.log(res);
    }
    setTimeout(() => setAnimate(false), 600);
    const data = await res.json();
    setText(data.value);
  };

  return (
    <section className="flex flex-col w-[50%] h-full items-center justify-around gap-20">
      {/* text */}
      <div className="h-full">
        <h2 className="text-xl text-gray-800"> {text} </h2>
      </div>
      {/* CLICK ME button */}
      <Button handleText={handleText} animate={animate} />
    </section>
  );
};

export default RightSectionMainPage;
