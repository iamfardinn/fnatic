import { useEffect, useState } from "react";
import ShowGames from "../../Components/ShowGames";


const Games = () => {

    const  [games,setGames]=useState([]);

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/iamfardinn/json/games')
        .then(res =>res.json())
        .then(data => setGames(data));
    },[])
    return (
        <>
            <ShowGames name={'Popular Games'} games={games}></ShowGames>
           
        </>
        
    );
    
};

export default Games;