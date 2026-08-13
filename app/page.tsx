import Image from "next/image";

type StudentParms = {
  name : string ;
  age : number; 
  college : string;
  level : number;
}
function Student(props : StudentParms) {
  return(
    <>
    <h2>your name is {props.name} </h2> 
    <h2>your age is {props.age} </h2> 
    <h2>your college is {props.college} </h2> 
    <h2>your level is {props.level} </h2> 
    </>
  )
}

function Home() {
  return (
    <>
    <h1>
      Student Information 
    </h1>

    <Student name="user" age={20} college="Computer Science" level={1} /> 
    </>
  );
}
export default Home;