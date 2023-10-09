/* eslint-disable react/prop-types */

import SingleGameCard from "./SingleGameCard";




const ShowGames = ({ name, games }) => {
    return (
        <>
            <div className="px-8 py-12">
                <h1 className="text-3xl font-bold">{name}</h1>
                <br />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                    {
                        games.map((item) => <SingleGameCard
                            key={item.id}
                            game={item}
                            rating
                        />)
                    }
                </div>
            </div>

        </>
    );
};

export default ShowGames;