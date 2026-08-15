import Login from "@/components/Login/Login";
import Welcome from "@/components/Welcome/Welcome";

function Home() {
  const IsLogin = true ;
  return (
    <>  
      {IsLogin ? <Welcome /> : <Login />}
    </>

  );
}

export default Home;