import Profile from "@/components/Profile/Profile"
import Experience from "@/components/Experience/Experience"
import Projects from "@/components/Projects/Projects"
import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Profile/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  );
}
