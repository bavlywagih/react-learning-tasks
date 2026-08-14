import Image from "next/image";
import Welcome from "@/components/Welcome" ;
import Login from "@/components/Login" ;




function Home() {

  const Islogin = true ;

  return (
    <>  
      {Islogin ? <Welcome /> : <Login />}
    </>

  );
}

export default Home;