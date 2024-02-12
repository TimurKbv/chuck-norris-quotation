import { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { prisma } from "@/prisma";

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

const Layout: FC = async () => {
  // get visitCounter from server
    const counter = await getCounter()

  return (
    <>
      <Header />

      <Main />

      <Footer getCounter={getCounter} incrementVisitors={incrementVisitors} visitors={counter} />
    </>
  );
};

export default Layout;
