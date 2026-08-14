import Profile from "@/components/Profile";


// 
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     margin: auto auto;
//     width: 27rem;
//     height: 27rem;
//     border: black 1px solid;
//     align-items: center;
//     border-radius: 1rem;

function Home() {
  return (
    <>  
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",margin:"auto auto",width:"27rem",height:"27rem",border:"black 1px solid",alignItems:"center",borderRadius:"1rem"}}>
        <Profile />
      </div>
    </>

  );
}

export default Home;