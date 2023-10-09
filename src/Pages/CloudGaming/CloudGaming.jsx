import { BiSolidGame } from 'react-icons/bi';
import { LuGamepad2 } from 'react-icons/lu';
import { SiRiotgames } from 'react-icons/si';

const CloudGaming = () => {
    return (
        <>
            <div className=" px-8 py-12 text-center">
                <h1 className="text-4xl font-bold">START YOUR CLOUD GAMING</h1>
                <p className="mt-16 my-6 font-medium">
                Cloud gaming leverages powerful remote servers to handle the processing and rendering of games, enabling users to play on a variety of devices, including smartphones, tablets, and low-end PCs. It offers flexibility and portability, enabling gamers to enjoy their favorite titles anytime, anywhere.  Additionally, cloud gaming services often provide social features and multiplayer options, enhancing the overall gaming experience. This technology has the potential to democratize gaming, making it accessible to a broader audience while reducing the need for expensive gaming hardware upgrades.
                </p>
                <div className="mt-24 flex justify-center">
                    <img src="https://i.ibb.co/WB3JwPS/wp9378570-valorant-pc-hd-wallpapers.png" alt="" />
                </div>
                <br />
                
                <br />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                        <div className="single-shipping">
                            <BiSolidGame className='text-center font-bold text-5xl mx-auto' />
                            <h3>SELECT MEMBERSHIP</h3>
                        </div>
                        <div className="single-shipping">
                            <LuGamepad2 className='text-center font-bold text-5xl mx-auto' />
                            <h3>GET COLDZXY NOW</h3>
                        </div>
                        <div className="single-shipping">
                            <SiRiotgames className='text-center font-bold text-5xl mx-auto' />
                            <h3>CONNECT GAME LIBRARY</h3>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CloudGaming;