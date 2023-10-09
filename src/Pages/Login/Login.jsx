
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';

const Login = () => {
   
    const {signin} =useAuth();


    const navigate =useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const email =e.target.email.value;
        const password = e.target.password.value;

    
         if (password.length < 7) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        signin(email, password)
            .then(res => {toast.success('User logged in successfully');
            navigate('/home') })
            .catch(error => {
                toast.error(error.message)
            })
    }

  return (
    <>
      <div
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co/p0H9Gkm/wallpaperflare-com-wallpaper-13.jpg')`,
        }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-800 to-gray-800 opacity-75"></div>
        <div className="mx-0 min-h-screen justify-center sm:flex sm:flex-row">
          <div className="z-10 flex flex-col self-center p-10 sm:max-w-5xl xl:max-w-2xl">
            <div className="hidden flex-col self-start text-white lg:flex">
              <img src="https://ibb.co/YR5qYVr" className="mb-3" alt="Your Image" />
              <h1 className="mb-3 text-5xl font-bold">Welcome Back!</h1>
              <p className="pr-3">
              Fnatic: A top esports organization, known for elite gaming talent, fierce competition, and global fan engagement in esports championships.
              </p>
            </div>
          </div>
          <div className="z-10 flex justify-center self-center">
            <div className="w-100 mx-auto rounded-2xl p-12">
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white">Sign In</h3>
                <p className="text-white">Please sign in to your account.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium tracking-wide text-white">Email</label>
                  <input
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-green-400 focus:outline-none"
                    type="email" name='email'
                    placeholder="mail@gmail.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium tracking-wide text-white"> Password </label>
                  <input
                    className="w-full content-center rounded-lg border border-gray-300 px-4 py-2 text-base focus:border-green-400 focus:outline-none"
                    type="password" name='password'
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 bg-blue-500 focus:ring-blue-400"
                    />
                    <label htmlFor="remember_me" className="ml-2 block text-sm text-white"> Remember me </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-white hover:text-green-500"> New Here? <Link to="/register" className="label-text-alt link link-hover">Create an account</Link> </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full cursor-pointer justify-center rounded-full bg-green-400 p-3 font-semibold tracking-wide text-gray-100 shadow-lg transition duration-500 ease-in hover:bg-green-500"
                  >
                    Login
                  </button>
                </div>
                
              </form>
              <div className="pt-5 text-center text-xs text-white">
                <span>Copyright © 2023-2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
