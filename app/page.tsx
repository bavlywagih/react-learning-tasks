import Image from "next/image";
import Header from "@/components/Header"
import Profile from "@/components/Profile"
import Content from "@/components/Content";
import Footer from "@/components/footer";




function Home() {
  return (
    <>
    <Header title="My React Website" />
    <Profile name="bavly" age={18} job="fullstack" />
    <Content course="React" level="Beginner" />
    <Footer year={2026} />
    </>

  );
}

export default Home;