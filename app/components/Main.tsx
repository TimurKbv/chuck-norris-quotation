import { FC } from "react";
import LeftSectionMainPage from "./main_sections/LeftSectionMainPage";
import RightSectionMainPage from "./main_sections/RightSectionMainPage";


const Main: FC = () => {

  return (
    <main className="flex min-h-[80vh] w-full justify-center items-center  p-24 h-full">
        
      {/* Image-section */}
      <LeftSectionMainPage />

      {/* Text-section */}
      <RightSectionMainPage  />

    </main>
  );
};


export default Main;
