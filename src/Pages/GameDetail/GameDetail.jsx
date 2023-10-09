import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const GameDetail = () => {

    const [game,setGame]=useState([]);
    const{ id } =useParams()

    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/iamfardinn/json/games/${id}`)
        .then(res => res.json())
        .then(data=> setGame(data));
    },[])
    return (
        <>
            
            <div className="grid grid-cols-1 md:grid-cols-2 md:h-[650px]">

                <div className=" flex justify-center items-center bg-white">
                    <img src={game.image} alt="" />
                </div>

                <div className=" bg-black text-white flex items-center">
                    <div className=" bg-black h-auto md:h-[80%] md:-ml-24  p-4">
                        <h1 className="text-5xl font-bold mb-8">{game.name}</h1>
                        <p>{game.description}</p>
                        <p>One of the Best  </p>

                        <h1 className="text-4xl font-bold my-4">${game.price}</h1>
                        <br />
                        <button className="btn">Buy it now!</button>

                    </div>
                </div>
            </div>
            <img src="https://i.ibb.co/YR98kwp/wallpaperflare-com-wallpaper-14.jpg"></img>
        </>
    );
};

export default GameDetail;