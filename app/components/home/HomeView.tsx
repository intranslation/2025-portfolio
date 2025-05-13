import Navbar from "./Navbar";
import AboutMe from "./about-section/AboutMe";
import Experiences from "./experiences-section/Experiences";
import FullScreenMenu from "./menu-section/FullScreenMenu";

export function HomeView() {
  return (
    <>
      <Navbar />

      <FullScreenMenu />

      <AboutMe />

      <Experiences />
    </>
  );
}
