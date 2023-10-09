
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Menus =() =>{
  const links =['games','about','cloudgaming','blog'];
  return(
    <>
    {
    links.map(link =><li key ={link}>
      <Link to={`/${link}`} className="btn btn-sm  btn-ghost">{link}</Link>
    </li>)
}
    </>
  )
}
const NavBar = () => {
    const{user,logOut} =useAuth();
    return (
      <>
          <div className="navbar bg-base-100">
              <div className="navbar-start">
                  <div className="dropdown">
                      <label tabIndex={0} className="btn btn-ghost lg:hidden">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </label>
                      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                          <Menus />
                      </ul>
                  </div>
                  <Link to='/' className="btn btn-ghost font-bold normal-case text-3xl text-red-500">fnatic</Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                      <Menus />
                  </ul>
              </div>
              <div className="navbar-end">
                  {
                      user?.email ? <div className="dropdown dropdown-end">
                          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                              <div className="w-10 rounded-full">
                                  <img src={user.photoURL} alt={user.displayName} />
                              </div>
                          </label>
                          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                              <li>
                                  <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                              </li>
                              <li>
                                  <button className="btn btn-sm  btn-ghost"
                                      onClick={logOut}
                                  >Logout</button>

                              </li>
                          </ul>
                      </div>
                          :
                          <Link to='/login'>
                              <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Play Now</button>
                          </Link>
                  }
              </div>
          </div>
      </>
  );
};

export default NavBar;