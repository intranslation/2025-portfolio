import Navbar from "./Navbar";
import AboutMe from "./about-section/AboutMe";
import Experiences from "./experiences-section/Experiences";
import FullScreenMenu from "./menu-section/FullScreenMenu";

export function HomeView() {
  const isMobile = window.innerWidth <= 800;
  return (
    <>
      {!isMobile && <Navbar />}

      <FullScreenMenu />

      <AboutMe />

      <Experiences />
    </>
  );
}
