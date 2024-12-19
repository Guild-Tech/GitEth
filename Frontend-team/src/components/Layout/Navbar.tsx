import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import CustomBtn from '../Common/CustomBtn';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/store';
// import { DarkThemeToggle } from 'flowbite-react';
import notificationIcon from "../../assets/icons/notificationIcon.svg"
import { 
  loginWithGitHub,
  loginWithGoogle,
  // loginWithEmailPassword, loginWithGitHub, loginWithGoogle, 
  logout } from '@/store/actions/auth';
import git from "../../assets/icons/gith.svg";
import google from "../../assets/icons/google.svg";
import email from "../../assets/icons/email.svg";
import { Button } from '../ui/button';
import { setLoginType } from '@/store/actions/onboardState';
export default function Navigation() {
  const [activeLink, setActiveLink] = useState('Home'); // Initial active link
  const { user } = useSelector((state: RootState) => state.auth);
  const { loginType:isLogin } = useSelector((state: RootState) => state.onboardState);
  const [isProfile, setIsProfile] = useState(false);
  const [isDroped, setIsDroped] = useState(false);
  // const dispatch = useDispatch();
  // const { role, loginType } = useSelector((state: RootState) => state.onboardState);

  const dispatch = useAppDispatch()

  const navigate = useNavigate();
  const loginsTypes = [
    { title: "Login with GitHub", icon: git, type:"github" },
    { title: "Login with Google", icon: google, type:"google" },
    { title: "Login with Email", icon: email, type:"email" },
  ]

  const handleLogin = (logintype:string,) => {
    dispatch(setLoginType(logintype))
    if(logintype === "github"){

 
        navigate("/onboarding")

    } else if(logintype === "google"){
      // dispatch(loginWithGoogle())
        navigate("/onboarding")
    } else{

        navigate("/onboardingWithEmail")
 
    }
  }
  const DropdownLogin = () => {
    return (<div className='bg-white text-black p-7 rounded-xl flex flex-col gap-3'>
      <h3 className="text-base font-medium border-b border-opacity-20 p-2">Choose Login Type</h3>
      {loginsTypes.map((item, index) =>
        <div className="" key={index} onClick={() => setIsDroped(false)}>
            <div className={`rounded-full bg-gradient-to-r from-[#E8D07A] to-[#5312D6]  p-[1px]`} onClick={()=> handleLogin(item.type)} >
                <Button 
                
                className={`rounded-full h-full  w-full "bg-black hover:bg-slate-700":"bg-white text-black "}`}>
                  <img src={`${item.icon}`} alt={item.title} />
                  {item.title}
                </Button>
            </div>
          {/* <CustomBtn text={item.title} icon={item.icon} style="w-full" /> */}
        </div>
      )}

    </div>)
  }

  return (
    <Navbar className="fixed w-full z-50 bg-opacity-90 dark:bg-opacity-5 backdrop-blur-sm py-6 px-5 m-0">
      <Navbar.Brand href="/">
        <img src="/EthOpenSource.svg" alt="logo" className='w-48 md:w-44' />
      </Navbar.Brand>
      <div className="flex md:order-2 gap-2">

        {user ? <div className="flex gap-5 relative">
          <CustomBtn text={``} colored="yes" icon={notificationIcon} btnstyle="p-0" iconStyle="w-3 h-3  rounded-full" style="flex w-[48px] h-[48px] max-sm:w-[32px] max-sm:h-[32px]" onClick={() => { navigate("/notifications") }} />
          <CustomBtn text={`${user?.username?.slice(0, 9)}...`} icon={user.photoURL} iconStyle="w-8 h-8 rounded-full" colored="yes" style="hidden md:flex w-[137px] text-[16px]" onClick={() => setIsProfile(!isProfile)} />
          <CustomBtn text={``} icon={user.photoURL} btnstyle="p-0" iconStyle="w-8 h-8 rounded-full" colored="yes" style="md:hidden flex max-sm:w-fit max-sm:h-fit text-[16px]" onClick={() => setIsProfile(!isProfile)} />
          {isProfile && <div className="absolute top-12 right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex={-1}>
            <Link to="/profile" onClick={() => setIsProfile(false)} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-0">Your Profile</Link>
            <a href="#" onClick={() => setIsProfile(false)} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-1">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex={-1} id="user-menu-item-2" onClick={() => { dispatch(logout()); setIsProfile(false) }}>Sign out</a>
          </div>}
        </div> :
          <div className="relative">
            <CustomBtn text={`Login`} colored="yes" style="hidden md:flex" onClick={() => setIsDroped(!isDroped)} />
            {isDroped && <div className="absolute right-0 top-16 w-[280px]">{DropdownLogin()}</div>}
          </div>
        }
        {/* <DarkThemeToggle /> */}
        <Navbar.Toggle className='w-8 h-8 flex items-center justify-center ' />
      </div>



      <Navbar.Collapse className='border-[#293056] md:border rounded-full p-2'>
        <div
          className={`${activeLink === 'Home' ? 'border-[#293056] border rounded-full p-2 ' : 'p-2'
            }`}
        >
          <Link
            to="/"
            // active={activeLink === 'Home'}
            onClick={() => setActiveLink('Home')}
            className={`${activeLink === 'Home' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            Home
          </Link>
        </div>
        <div
          className={`${activeLink === 'Projects' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <Link
            to="/projects"
            onClick={() => setActiveLink('Projects')}
            className={`${activeLink === 'Projects' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            Explore Projects
          </Link>
        </div>
        <div
          className={`${activeLink === 'Learn' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <Link
            to="/learn"
            onClick={() => setActiveLink('Learn')}
            className={`${activeLink === 'Learn' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            Learn
          </Link>
        </div>
        <div
          className={`${activeLink === 'Contributors' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <Link
            to="/contributors"
            onClick={() => setActiveLink('Contributors')}
            className={`${activeLink === 'Contributors' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            Contributors
          </Link>
        </div>
        <div
          className={`${activeLink === 'Applications' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <Link
            to="/applications"
            onClick={() => setActiveLink('Applications')}
            className={`${activeLink === 'Applications' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            Applications
          </Link>
        </div>
        <div
          className={`${activeLink === 'Rewards' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <Link
            to="rewards"
            onClick={() => setActiveLink('Rewards')}
            className={`${activeLink === 'Rewards' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            Rewards
          </Link>
        </div>
        <div
          className={`${activeLink === 'Community' ? 'border-[#293056] border rounded-full p-2' : 'p-2'
            }`}
        >
          <Link
            to="/community"
            onClick={() => setActiveLink('Community')}
            className={`${activeLink === 'Community' ? ' bg-gray-800 rounded-3xl' : ''
              }`}
          >
            Community
          </Link>
        </div>
      </Navbar.Collapse>

    </Navbar>
  );
}
