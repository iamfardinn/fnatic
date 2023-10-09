/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const SingleGameCard = ({ game, rating }) => {
    return (
        <>
            <div className="card  card-compact shadow-xl">
                {
                    rating && game.rating && <div className="badge m-1">{game.rating}% off</div>
                }
                <figure className='h-5/6'>

                    <img src={game.image} alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">${game.price}</h2>
                    <p>{game.name}</p>
                    <div className="card-actions justify-end">
                        <Link className="btn btn-neutral btn-sm" to={`/product/${game.id}`}>Details!</Link>
                    </div>
                </div>
            </div>
        </>
    );
};


export default SingleGameCard;