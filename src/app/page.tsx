import Profile from "@/components/Profile/Profile"
import Experience from "@/components/Experience/Experience"
import Projects from "@/components/Projects/Projects"
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Profile/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  );
}
