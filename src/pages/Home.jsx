import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios  from "axios";
import { useEffect, useState } from "react"; 

const Home = () => {
  const [tutorials,setTutorials]=useState([])
  const url= "https://axios-example-cw.herokuapp.com/api/tutorials";
  const getTutorials=async()=>{
   const {data}= await axios(url);
  //  console.log(data)
  //  setTutorials(data) // Burda çağrılırsa render/state sonsuz döngüye giriyor
  }
  // getTutorials() // Eğer state olsa idi sürekli render olurdu.
  useEffect(()=>{
    getTutorials()
  },[])

  return (
    <>
      <AddTutorial />
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
