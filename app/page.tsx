import Image from "next/image";

type AgeParams = {
  age : number;
}

function Age (props : AgeParams) {
  return (
    <>
    <h2>your age is {props.age}</h2>
    </>
  )
}

type NameParams = {
  name : string;
}

function Name(props : NameParams){
  return (
    <>
    <h2>your name is {props.name}</h2>
    </>
  )
}

function Home() {
  return (
    <>
    <div >
      <h1>hello .... </h1>
      <Name name="bavly wagih samir assad atea" />
      <Age age={15} />
    </div>
    </>

  );
}

export default Home;