// import React, { useContext, useEffect, useState } from 'react';
// import { assets } from '../assets/assets';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const location = useLocation();

//   const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//   const logout = () => {
//     navigate('/login');
//     localStorage.removeItem('token');
//     setToken('');
//     setCartItems({});
//   };

//   useEffect(() => {
//     setVisible(false);
//   }, [location]);

//   useEffect(() => {
//     if (visible) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = '';
//     }
//   }, [visible]);

//   return (
//     <div className='flex items-center justify-between py-5 font-medium'>

//       {/* Logo */}
//       <Link
//         to='/'
//         className='pl-4 font-extrabold text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text whitespace-nowrap'
//         style={{
//           fontSize: 'clamp(14px, 4vw, 34px)', // Responsive font-size, min 14px max 34px
//           lineHeight: '1',
//         }}
//       >
//         Z<span className="text-black">aman&apos;s</span> <span className="text-blue-600">Gadget</span>
//       </Link>

//       {/* Desktop Menu */}
//       <ul className='hidden gap-5 text-sm text-gray-700 sm:flex'>
//         <NavLink to='/' className='flex flex-col items-center gap-1'>
//           <p>HOME</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/collection' className='flex flex-col items-center gap-1'>
//           <p>COLLECTION</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/about' className='flex flex-col items-center gap-1'>
//           <p>ABOUT</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//         <NavLink to='/contact' className='flex flex-col items-center gap-1'>
//           <p>CONTACT</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
//         </NavLink>
//       </ul>

//       {/* Icons */}
//       <div className='flex items-center gap-6'>

//         {/* Search Icon */}
//         <img
//           onClick={() => {
//             setShowSearch(true);
//             navigate('/collection');
//           }}
//           src={assets.search_icon}
//           className='w-[22px] h-[22px] min-w-[20px] min-h-[20px] sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer object-contain'
//           alt="search"
//         />

//         {/* Profile Icon with Dropdown */}
//         <div className='relative group'>
//           <img
//             onClick={() => (token ? null : navigate('/login'))}
//             className='w-[22px] h-[22px] min-w-[20px] min-h-[20px] sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer object-contain'
//             src={assets.profile_icon}
//             alt="profile"
//           />

//           {token && (
//             <div className='absolute right-0 hidden pt-4 group-hover:block dropdown-menu'>
//               <div className='flex flex-col gap-2 px-5 py-3 text-gray-500 rounded w-36 bg-slate-100'>
//                 <p className='cursor-pointer hover:text-black'>My Profile</p>
//                 <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
//                 <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Cart Icon */}
//         <Link to='/cart' className='relative'>
//           <img
//             src={assets.cart_icon}
//             className='w-[22px] h-[22px] min-w-[20px] min-h-[20px] sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain'
//             alt="cart"
//           />
//           <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
//             {getCartCount()}
//           </p>
//         </Link>

//         {/* Mobile Menu Icon */}
//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           className='w-[22px] h-[22px] min-w-[20px] min-h-[20px] sm:w-6 sm:h-6 md:w-7 md:h-7 cursor-pointer object-contain sm:hidden'
//           alt="menu"
//         />
//       </div>

//       {/* Sidebar menu */}
//       <div
//         className={`fixed top-0 right-0 w-full h-full bg-white z-[9999] transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}
//       >
//         <div className='flex flex-col text-gray-600'>
//           <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
//             <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="back" />
//             <p>Back</p>
//           </div>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useContext, useEffect, useState } from 'react';
// import { assets } from '../assets/assets';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const location = useLocation();
//   const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//   const logout = () => {
//     navigate('/login');
//     localStorage.removeItem('token');
//     setToken('');
//     setCartItems({});
//   };

//   useEffect(() => {
//     setVisible(false);
//   }, [location]);

//   useEffect(() => {
//     document.body.style.overflow = visible ? 'hidden' : '';
//   }, [visible]);

//   return (
//     <div className="fixed top-0 left-0 z-50 w-full text-white bg-black shadow-md">
//       <div className="flex items-center justify-between px-4 py-4 md:px-10">

//         {/* Logo */}
//         <Link
//           to='/'
//           className='pl-2 font-extrabold whitespace-nowrap'
//           style={{
//             fontSize: 'clamp(16px, 3.5vw, 28px)',
//             lineHeight: '1',
//           }}
//         >
//           <span className="text-[#f27c1e]">Z</span>
//           <span className="text-white">aman&apos;s</span>
//           <span className="text-[#f27c1e]"> Gadget</span>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className='hidden gap-6 text-sm md:flex xl:text-base'>
//           <NavLink to='/' className='hover:text-[#f27c1e] transition'>HOME</NavLink>
//           <NavLink to='/collection' className='hover:text-[#f27c1e] transition'>COLLECTION</NavLink>
//           <NavLink to='/about' className='hover:text-[#f27c1e] transition'>ABOUT</NavLink>
//           <NavLink to='/contact' className='hover:text-[#f27c1e] transition'>CONTACT</NavLink>
//         </ul>

//         {/* Icons */}
//         <div className='flex items-center gap-5'>

//           {/* Search */}
//           <img
//             onClick={() => {
//               setShowSearch(true);
//               navigate('/collection');
//             }}
//             src={assets.search_icon}
//             alt="search"
//             className='w-[22px] h-[22px] sm:w-6 sm:h-6 cursor-pointer object-contain'
//             style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//           />

//           {/* Profile */}
//           <div className='relative group'>
//             <img
//               onClick={() => (token ? null : navigate('/login'))}
//               src={assets.profile_icon}
//               alt="profile"
//               className='w-[22px] h-[22px] sm:w-6 sm:h-6 cursor-pointer object-contain'
//               style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//             />
//             {token && (
//               <div className='absolute right-0 hidden pt-4 group-hover:block'>
//                 <div className='flex flex-col gap-2 px-5 py-3 text-white bg-gray-800 rounded w-36'>
//                   <p className='cursor-pointer hover:text-[#f27c1e]'>My Profile</p>
//                   <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-[#f27c1e]'>Orders</p>
//                   <p onClick={logout} className='cursor-pointer hover:text-[#f27c1e]'>Logout</p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Cart */}
//           <Link to='/cart' className='relative'>
//             <img
//               src={assets.cart_icon}
//               alt="cart"
//               className='w-[22px] h-[22px] sm:w-6 sm:h-6 object-contain'
//               style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//             />
//             <p className='absolute right-[-6px] bottom-[-6px] w-4 h-4 text-center text-[10px] bg-[#f27c1e] text-white rounded-full leading-4'>
//               {getCartCount()}
//             </p>
//           </Link>

//           {/* Mobile Menu Icon */}
//           <img
//             onClick={() => setVisible(true)}
//             src={assets.menu_icon}
//             alt="menu"
//             className='w-[22px] h-[22px] sm:w-6 sm:h-6 cursor-pointer object-contain md:hidden'
//             style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//           />
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 right-0 w-full h-full bg-black text-white z-[9999] transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}
//       >
//         <div className='flex flex-col'>
//           <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer'>
//             <img className='h-4 rotate-180 invert' src={assets.dropdown_icon} alt="back" />
//             <p>Back</p>
//           </div>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/'>HOME</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/collection'>COLLECTION</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/about'>ABOUT</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/contact'>CONTACT</NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// import React, { useContext, useEffect, useState } from 'react';
// import { assets } from '../assets/assets';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const location = useLocation();
//   const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//   const logout = () => {
//     navigate('/login');
//     localStorage.removeItem('token');
//     setToken('');
//     setCartItems({});
//   };

//   useEffect(() => {
//     setVisible(false);
//   }, [location]);

//   useEffect(() => {
//     document.body.style.overflow = visible ? 'hidden' : '';
//   }, [visible]);

//   return (
//     <div className="fixed top-0 left-0 z-50 w-full text-white bg-black shadow-md">
//       <div className="flex items-center justify-between px-4 pt-4 pb-3 sm:px-6 md:px-10">

//         {/* Logo */}
//         <Link
//           to='/'
//           className='pl-2 font-extrabold whitespace-nowrap'
//           style={{
//             fontSize: 'clamp(16px, 3.5vw, 28px)',
//             lineHeight: '1',
//           }}
//         >
//           <span className="text-[#f27c1e]">Z</span>
//           <span className="text-white">aman&apos;s</span>
//           <span className="text-[#f27c1e]"> Gadget</span>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className='hidden gap-6 text-sm md:flex xl:text-base'>
//           <NavLink to='/' className='hover:text-[#f27c1e] transition'>HOME</NavLink>
//           <NavLink to='/collection' className='hover:text-[#f27c1e] transition'>COLLECTION</NavLink>
//           <NavLink to='/about' className='hover:text-[#f27c1e] transition'>ABOUT</NavLink>
//           <NavLink to='/contact' className='hover:text-[#f27c1e] transition'>CONTACT</NavLink>
//         </ul>

//         {/* Icons */}
//         <div className='flex items-center gap-5'>

//           {/* Search */}
//           <img
//             onClick={() => {
//               setShowSearch(true);
//               navigate('/collection');
//             }}
//             src={assets.search_icon}
//             alt="search"
//             className='w-[22px] h-[22px] sm:w-6 sm:h-6 cursor-pointer object-contain'
//             style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//           />

//           {/* Profile */}
//           <div className='relative group'>
//             <img
//               onClick={() => (token ? null : navigate('/login'))}
//               src={assets.profile_icon}
//               alt="profile"
//               className='w-[22px] h-[22px] sm:w-6 sm:h-6 cursor-pointer object-contain'
//               style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//             />
//             {token && (
//               <div className='absolute right-0 hidden pt-4 group-hover:block'>
//                 <div className='flex flex-col gap-2 px-5 py-3 text-white bg-gray-800 rounded w-36'>
//                   <p className='cursor-pointer hover:text-[#f27c1e]'>My Profile</p>
//                   <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-[#f27c1e]'>Orders</p>
//                   <p onClick={logout} className='cursor-pointer hover:text-[#f27c1e]'>Logout</p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Cart */}
//           <Link to='/cart' className='relative'>
//             <img
//               src={assets.cart_icon}
//               alt="cart"
//               className='w-[22px] h-[22px] sm:w-6 sm:h-6 object-contain'
//               style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//             />
//             <p className='absolute right-[-6px] bottom-[-6px] w-4 h-4 text-center text-[10px] bg-[#f27c1e] text-white rounded-full leading-4'>
//               {getCartCount()}
//             </p>
//           </Link>

//           {/* Mobile Menu Icon */}
//           <img
//             onClick={() => setVisible(true)}
//             src={assets.menu_icon}
//             alt="menu"
//             className='w-[22px] h-[22px] sm:w-6 sm:h-6 cursor-pointer object-contain md:hidden'
//             style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//           />
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 right-0 w-full h-full bg-black text-white z-[9999] transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}
//       >
//         <div className='flex flex-col'>
//           <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer'>
//             <img className='h-4 rotate-180 invert' src={assets.dropdown_icon} alt="back" />
//             <p>Back</p>
//           </div>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/'>HOME</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/collection'>COLLECTION</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/about'>ABOUT</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/contact'>CONTACT</NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useContext, useEffect, useState } from 'react';
// import { assets } from '../assets/assets';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const location = useLocation();
//   const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//   const logout = () => {
//     navigate('/login');
//     localStorage.removeItem('token');
//     setToken('');
//     setCartItems({});
//   };

//   useEffect(() => {
//     setVisible(false);
//   }, [location]);

//   useEffect(() => {
//     document.body.style.overflow = visible ? 'hidden' : '';
//   }, [visible]);

//   return (
//     <div className="fixed top-0 left-0 z-50 w-full text-white bg-black shadow-md">
//       <div className="flex items-center justify-between max-w-screen-xl px-4 pt-3 pb-2 mx-auto sm:px-6 md:px-10">

//         {/* Logo */}
//         <Link
//           to='/'
//           className='pl-2 font-extrabold whitespace-nowrap'
//           style={{
//             fontSize: 'clamp(16px, 3.5vw, 28px)',
//             lineHeight: '1',
//           }}
//         >
//           <span className="text-[#f27c1e]">Z</span>
//           <span className="text-white">aman&apos;s</span>
//           <span className="text-[#f27c1e]"> Gadget</span>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className='hidden gap-6 text-sm md:flex xl:text-base'>
//           <NavLink to='/' className='hover:text-[#f27c1e] transition'>HOME</NavLink>
//           <NavLink to='/collection' className='hover:text-[#f27c1e] transition'>COLLECTION</NavLink>
//           <NavLink to='/about' className='hover:text-[#f27c1e] transition'>ABOUT</NavLink>
//           <NavLink to='/contact' className='hover:text-[#f27c1e] transition'>CONTACT</NavLink>
//         </ul>

//         {/* Icons */}
//         <div className='flex items-center gap-5'>

//           {/* Search */}
//           <img
//             onClick={() => {
//               setShowSearch(true);
//               navigate('/collection');
//             }}
//             src={assets.search_icon}
//             alt="search"
//             className='w-[22px] h-[22px] sm:w-6 sm:h-6 cursor-pointer object-contain'
//             style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//           />

//           {/* Profile */}
//           <div className='relative group'>
//             <img
//               onClick={() => (token ? null : navigate('/login'))}
//               src={assets.profile_icon}
//               alt="profile"
//               className='w-[22px] h-[22px] sm:w-6 sm:h-6 cursor-pointer object-contain'
//               style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//             />
//             {token && (
//               <div className='absolute right-0 hidden pt-4 group-hover:block'>
//                 <div className='flex flex-col gap-2 px-5 py-3 text-white bg-gray-800 rounded w-36'>
//                   <p className='cursor-pointer hover:text-[#f27c1e]'>My Profile</p>
//                   <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-[#f27c1e]'>Orders</p>
//                   <p onClick={logout} className='cursor-pointer hover:text-[#f27c1e]'>Logout</p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Cart */}
//           <Link to='/cart' className='relative'>
//             <img
//               src={assets.cart_icon}
//               alt="cart"
//               className='w-[22px] h-[22px] sm:w-6 sm:h-6 object-contain'
//               style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//             />
//             <p className='absolute right-[-6px] bottom-[-6px] w-4 h-4 text-center text-[10px] bg-[#f27c1e] text-white rounded-full leading-4'>
//               {getCartCount()}
//             </p>
//           </Link>

//           {/* Mobile Menu Icon */}
//           <img
//             onClick={() => setVisible(true)}
//             src={assets.menu_icon}
//             alt="menu"
//             className='w-[22px] h-[22px] sm:w-6 sm:h-6 cursor-pointer object-contain md:hidden'
//             style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//           />
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 right-0 w-full  h-full bg-black text-white z-[9999] transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}
//       >
//         <div className='flex flex-col'>
//           <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer'>
//             <img className='h-4 rotate-180 invert' src={assets.dropdown_icon} alt="back" />
//             <p>Back</p>
//           </div>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/'>HOME</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/collection'>COLLECTION</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/about'>ABOUT</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/contact'>CONTACT</NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  useEffect(() => {
    setVisible(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';
  }, [visible]);

  return (
    <div className="fixed top-0 left-0 z-50 w-full text-white bg-black shadow-md">
      <div className="flex items-center justify-between max-w-screen-xl px-4 pt-3 pb-2 mx-auto sm:px-6 md:px-10">

        {/* Logo with Image */}
        <Link
          to='/'
          className='pl-2 font-extrabold whitespace-nowrap'
          style={{
            fontSize: 'clamp(16px, 3.5vw, 28px)',
            lineHeight: '1',
          }}
        >
          {/* Image with same style as the text */}
          <img
            src={assets.support_img} // added support_img.png
            alt="Logo"
            className="w-auto h-auto max-w-[160px] rounded-md" // Same styles as the text, adjust width as needed
          />
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden gap-6 text-sm md:flex xl:text-base'>
          <NavLink to='/' className='hover:text-[#f27c1e] transition'>HOME</NavLink>
          <NavLink to='/collection' className='hover:text-[#f27c1e] transition'>COLLECTION</NavLink>
          <NavLink to='/about' className='hover:text-[#f27c1e] transition'>ABOUT</NavLink>
          <NavLink to='/contact' className='hover:text-[#f27c1e] transition'>CONTACT</NavLink>
        </ul>

        {/* Icons */}
        <div className='flex items-center gap-5'> 

          {/* Search */}
          <img
            onClick={() => {
              setShowSearch(true);
              navigate('/collection');
            }}
            src={assets.search_icon}
            alt="search"
            className='w-[22px] h-[22px] sm:w-6 sm:h-6 cursor-pointer object-contain'
            style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
          />

          {/* Profile */}
          <div className='relative group'>
            <img
              onClick={() => (token ? null : navigate('/login'))}
              src={assets.profile_icon}
              alt="profile"
              className='w-[22px] h-[22px] sm:w-6 sm:h-6 cursor-pointer object-contain'
              style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
            />
            {token && (
              <div className='absolute right-0 hidden pt-4 group-hover:block'>
                <div className='flex flex-col gap-2 px-5 py-3 text-white bg-gray-800 rounded w-36'>
                  <p className='cursor-pointer hover:text-[#f27c1e]'>My Profile</p>
                  <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-[#f27c1e]'>Orders</p>
                  <p onClick={logout} className='cursor-pointer hover:text-[#f27c1e]'>Logout</p>
                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to='/cart' className='relative'>
            <img
              src={assets.cart_icon}
              alt="cart"
              className='w-[22px] h-[22px] sm:w-6 sm:h-6 object-contain'
              style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
            />
            <p className='absolute right-[-6px] bottom-[-6px] w-4 h-4 text-center text-[10px] bg-[#f27c1e] text-white rounded-full leading-4'>
              {getCartCount()}
            </p>
          </Link>

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            alt="menu"
            className='w-[22px] h-[22px] sm:w-6 sm:h-6 cursor-pointer object-contain md:hidden'
            style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
          />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full  h-full bg-black text-white z-[9999] transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex flex-col'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-4 cursor-pointer'>
            <img className='h-4 rotate-180 invert' src={assets.dropdown_icon} alt="back" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



// import React, { useContext, useEffect, useState } from 'react';
// import { assets } from '../assets/assets';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const location = useLocation();
//   const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

//   const logout = () => {
//     navigate('/login');
//     localStorage.removeItem('token');
//     setToken('');
//     setCartItems({});
//   };

//   useEffect(() => {
//     setVisible(false);
//   }, [location]);

//   useEffect(() => {
//     document.body.style.overflow = visible ? 'hidden' : '';
//   }, [visible]);

//   return (
//     <div className="fixed top-0 left-0 z-50 w-full text-white bg-black">
//       <div className='flex items-center justify-between px-3 py-4 font-medium md:px-8'>

//         {/* Logo */}
//         <Link to='/' className='flex items-center gap-2 text-[22px] sm:text-[28px] font-bold whitespace-nowrap'>
//           <img src={assets.logo} alt="logo" className="h-6 sm:h-8" />
//           <span className="text-[#f27c1e]">gadgets</span><span className="-ml-1 text-sm text-gray-300">AppleGadgets</span>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className='items-center hidden gap-8 text-sm sm:flex'>
//           <NavLink to='/' className='hover:text-[#f27c1e]'>HOME</NavLink>
//           <NavLink to='/collection' className='hover:text-[#f27c1e]'>COLLECTION</NavLink>
//           <NavLink to='/about' className='hover:text-[#f27c1e]'>ABOUT</NavLink>
//           <NavLink to='/contact' className='hover:text-[#f27c1e]'>CONTACT</NavLink>
//         </ul>

//         {/* Icons */}
//         <div className='flex items-center gap-5'>

//           {/* Search */}
//           <img
//             onClick={() => {
//               setShowSearch(true);
//               navigate('/collection');
//             }}
//             src={assets.search_icon}
//             className='w-[22px] h-[22px] cursor-pointer invert-[64%] sepia-[79%] saturate-[4068%] hue-rotate-[358deg] brightness-[98%] contrast-[102%]'
//             alt="search"
//           />

//           {/* Account/Profile */}
//           <div className='relative group'>
//             <img
//               onClick={() => (token ? null : navigate('/login'))}
//               className='w-[22px] h-[22px] cursor-pointer invert-[64%] sepia-[79%] saturate-[4068%] hue-rotate-[358deg] brightness-[98%] contrast-[102%]'
//               src={assets.profile_icon}
//               alt="profile"
//             />
//             {token && (
//               <div className='absolute right-0 hidden pt-4 group-hover:block'>
//                 <div className='flex flex-col gap-2 px-5 py-3 text-gray-300 bg-gray-800 rounded w-36'>
//                   <p className='cursor-pointer hover:text-white'>My Profile</p>
//                   <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-white'>Orders</p>
//                   <p onClick={logout} className='cursor-pointer hover:text-white'>Logout</p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Cart */}
//           <Link to='/cart' className='relative'>
//             <img
//               src={assets.cart_icon}
//               className='w-[22px] h-[22px] object-contain invert-[64%] sepia-[79%] saturate-[4068%] hue-rotate-[358deg] brightness-[98%] contrast-[102%]'
//               alt="cart"
//             />
//             <p className='absolute right-[-6px] bottom-[-6px] w-4 h-4 text-center bg-[#f27c1e] text-white rounded-full text-[10px]'>
//               {getCartCount()}
//             </p>
//           </Link>

//           {/* Menu (Mobile) */}
//           <img
//             onClick={() => setVisible(true)}
//             src={assets.menu_icon}
//             className='w-[22px] h-[22px] cursor-pointer sm:hidden invert-[64%] sepia-[79%] saturate-[4068%] hue-rotate-[358deg] brightness-[98%] contrast-[102%]'
//             alt="menu"
//           />
//         </div>
//       </div>

//       {/* Sidebar for Mobile */}
//       <div
//         className={`fixed top-0 right-0 w-full h-full bg-black text-white z-[9999] transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}
//       >
//         <div className='flex flex-col'>
//           <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
//             <img className='h-4 rotate-180 invert' src={assets.dropdown_icon} alt="back" />
//             <p>Back</p>
//           </div>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/'>HOME</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/collection'>COLLECTION</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/about'>ABOUT</NavLink>
//           <NavLink onClick={() => setVisible(false)} className='py-3 pl-6 border-b border-gray-700' to='/contact'>CONTACT</NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
