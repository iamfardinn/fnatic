import { useEffect, useState } from "react";
import Slider from "./Slider";
import ShowGames from "../../Components/ShowGames";
import About from "../About/About";


const Home = () => {

const [games,setGames] =useState([]);

useEffect(()=>{
    fetch('https://my-json-server.typicode.com/iamfardinn/json/games')
    .then(res=>res.json())
    .then(data=> setGames(data));
},[])




    return (
       <>
       <Slider></Slider>
<ShowGames name={"Most Played"} games={games.slice(3,6)}/>
<ShowGames name={"Hits"} games={games.slice(0,3)}/>
<About></About>


 
       
       </>
       
    );
};

export default Home;