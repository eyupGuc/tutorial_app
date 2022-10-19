import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

  //! CRUD: GET-READ
  const getTutorials = async () => {
    try{
      const { data } = await axios(url);
    setTutorials(data);
    //  console.log(data)
    }catch(e){
        console.log(e)
      
    }
    //  setTutorials(data) // Burda çağrılırsa render/state sonsuz döngüye giriyor
  };
  // getTutorials() // Eğer state olsa idi sürekli render olurdu.

  //! ComponentDidMount
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <>
      <AddTutorial />
      <TutorialList tutor={tutorials} />
    </>
  );
};

export default Home;
