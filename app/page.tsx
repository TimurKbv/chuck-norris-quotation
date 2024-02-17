import LeftSectionMainPage from "./components/main_sections/LeftSectionMainPage";
import RightSectionMainPage from "./components/main_sections/RightSectionMainPage";

export default function Home() {
  
  return (
    <main className="flex min-h-[80vh] w-full justify-center items-center  p-24 h-full">
      {/* Image-section */}
      <LeftSectionMainPage />

      {/* Text-section */}
      <RightSectionMainPage />
    </main>
  );
}
