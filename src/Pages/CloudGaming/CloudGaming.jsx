import { TbRefresh } from 'react-icons/tb';
import { FaTruck } from 'react-icons/fa';
import { AiTwotoneLock } from 'react-icons/ai';

const CloudGaming = () => {
    return (
        <>
            <div className="px-8 py-12 text-center">
                <h1 className="text-4xl font-bold">START YOUR CLOUD GAMING</h1>
                <p className="my-6 font-thin">
                Cloud gaming is a revolutionary technology that allows gamers to stream and play high-quality video games over the internet without the need for expensive gaming hardware. <br /> It offers instant access to a vast library of games, eliminating downloads and updates. Cloud gaming is transforming the gaming industry by making gaming more accessible and convenient.
                </p>
                <div className="flex justify-center">
                    <img src="https://i.ibb.co/WB3JwPS/wp9378570-valorant-pc-hd-wallpapers.png" alt="" />
                </div>
                <br />
                <hr />
                <br />
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="single-shipping">
                            <TbRefresh className='text-center font-bold text-5xl mx-auto' />
                            <h3>SELECT MEMBERSHIP</h3>
                        </div>
                        <div className="single-shipping">
                            <FaTruck className='text-center font-bold text-5xl mx-auto' />
                            <h3>GET COLDZXY NOW</h3>
                        </div>
                        <div className="single-shipping">
                            <AiTwotoneLock className='text-center font-bold text-5xl mx-auto' />
                            <h3>CONNECT GAME LIBRARY</h3>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CloudGaming;