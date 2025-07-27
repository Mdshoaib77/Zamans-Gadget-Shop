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

//         {/* Logo with Image */}
//         <Link
//           to='/'
//           className='pl-2 font-extrabold whitespace-nowrap'
//           style={{
//             fontSize: 'clamp(16px, 3.5vw, 28px)',
//             lineHeight: '1',
//           }}
//         >
//           {/* Image with same style as the text */}
//           <img
//             src={assets.support_img} // added support_img.png
//             alt="Logo"
//             className="w-auto h-auto max-w-[160px] rounded-md" // Same styles as the text, adjust width as needed
//           />
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
//     <>
//       {/* TOP NAVBAR */}
//       <div className="fixed top-0 left-0 z-50 w-full text-white bg-black shadow-md">
//         {/* Mobile Top Bar */}
//         <div className="flex items-center justify-between px-4 py-3 md:hidden">
//           {/* Menu Icon (Left) */}
//           <img
//             onClick={() => setVisible(true)}
//             src={assets.menu_icon}
//             alt="menu"
//             className="object-contain w-6 h-6 cursor-pointer"
//             style={{ filter: 'invert(63%) sepia(90%) saturate(1900%) hue-rotate(5deg)' }} // #f27c1e
//           />

//           {/* Centered Logo */}
//           <Link to="/">
//             <img
//               src={assets.support_img}
//               alt="Logo"
//               className="object-contain h-9"
//             />
//           </Link>

//           {/* Search Icon (Right) */}
//           <img
//             onClick={() => {
//               setShowSearch(true);
//               navigate('/collection');
//             }}
//             src={assets.search_icon}
//             alt="search"
//             className="object-contain w-6 h-6 cursor-pointer"
//             style={{ filter: 'invert(63%) sepia(90%) saturate(1900%) hue-rotate(5deg)' }} // #f27c1e
//           />
//         </div>

//         {/* Desktop Nav (unchanged) */}
//         <div className="items-center justify-between hidden max-w-screen-xl px-10 py-4 mx-auto md:flex">
//           <ul className='flex gap-6 text-sm xl:text-base'>
//             <NavLink to='/' className='hover:text-[#f27c1e] transition'>HOME</NavLink>
//             <NavLink to='/collection' className='hover:text-[#f27c1e] transition'>COLLECTION</NavLink>
//             <NavLink to='/about' className='hover:text-[#f27c1e] transition'>ABOUT</NavLink>
//             <NavLink to='/contact' className='hover:text-[#f27c1e] transition'>CONTACT</NavLink>
//           </ul>

//           <Link to="/">
//             <img
//               src={assets.support_img}
//               alt="Logo"
//               className="object-contain h-8"
//             />
//           </Link>

//           <div className="flex items-center gap-5">
//             <img
//               onClick={() => {
//                 setShowSearch(true);
//                 navigate('/collection');
//               }}
//               src={assets.search_icon}
//               alt="search"
//               className="object-contain w-6 h-6 cursor-pointer"
//             />
//             <Link to="/cart" className="relative">
//               <img
//                 src={assets.cart_icon}
//                 alt="cart"
//                 className="object-contain w-6 h-6"
//               />
//               <span className="absolute -right-2 -bottom-2 w-4 h-4 text-[10px] bg-[#f27c1e] text-white text-center rounded-full leading-4">
//                 {getCartCount()}
//               </span>
//             </Link>
//             <div className="relative group">
//               <img
//                 onClick={() => (token ? null : navigate('/login'))}
//                 src={assets.profile_icon}
//                 alt="profile"
//                 className="object-contain w-6 h-6 cursor-pointer"
//               />
//               {token && (
//                 <div className='absolute right-0 hidden pt-4 group-hover:block'>
//                   <div className='flex flex-col gap-2 px-5 py-3 text-white bg-gray-800 rounded w-36'>
//                     <p className='cursor-pointer hover:text-[#f27c1e]'>My Profile</p>
//                     <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-[#f27c1e]'>Orders</p>
//                     <p onClick={logout} className='cursor-pointer hover:text-[#f27c1e]'>Logout</p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM BAR (MOBILE ONLY) */}
//       <div className="fixed bottom-0 left-0 z-40 flex justify-around w-full py-2 text-white bg-black border-t border-gray-800 md:hidden">
//         <Link to="/cart" className="relative flex flex-col items-center text-xs">
//           <img
//             src={assets.cart_icon}
//             alt="Cart"
//             className="w-5 h-5 mb-1"
//             style={{ filter: 'invert(63%) sepia(90%) saturate(1900%) hue-rotate(5deg)' }}
//           />
//           <span className="absolute top-0 right-3 text-[10px] bg-[#f27c1e] rounded-full px-1">
//             {getCartCount()}
//           </span>
//           <span style={{ color: '#f27c1e' }}>Cart</span>
//         </Link>

//         <div className="flex flex-col items-center text-xs">
//           <img
//             onClick={() => (token ? null : navigate('/login'))}
//             src={assets.profile_icon}
//             alt="Account"
//             className="w-5 h-5 mb-1"
//             style={{ filter: 'invert(63%) sepia(90%) saturate(1900%) hue-rotate(5deg)' }}
//           />
//           <span style={{ color: '#f27c1e' }}>Account</span>
//         </div>
//       </div>

//       {/* MOBILE SIDEBAR */}
//       <div className={`fixed top-0 right-0 w-full h-full bg-black text-white z-[9999] transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
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
//     </>
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

//         {/* Mobile: Menu */}
//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           alt="menu"
//           className='w-[22px] h-[22px] object-contain cursor-pointer md:hidden'
//           style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//         />

//         {/* Logo Center on Mobile */}
//         <Link
//           to='/'
//           className='mx-auto font-extrabold whitespace-nowrap md:mx-0'
//           style={{
//             fontSize: 'clamp(18px, 4vw, 28px)',
//             lineHeight: '1',
//           }}
//         >
//           <img
//             src={assets.support_img}
//             alt="Logo"
//             className="max-w-[160px] rounded-md mx-auto w-[120px] md:w-[160px]"
//           />
//         </Link>

//         {/* Search Right */}
//         <div className="md:hidden">
//           <img
//             onClick={() => {
//               setShowSearch(true);
//               navigate('/collection');
//             }}
//             src={assets.search_icon}
//             alt="search"
//             className='w-[22px] h-[22px] cursor-pointer object-contain'
//             style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//           />
//         </div>

//         {/* Desktop Menu */}
//         <ul className='hidden gap-6 text-sm md:flex xl:text-base'>
//           <NavLink to='/' className='hover:text-[#f27c1e] transition'>HOME</NavLink>
//           <NavLink to='/collection' className='hover:text-[#f27c1e] transition'>COLLECTION</NavLink>
//           <NavLink to='/about' className='hover:text-[#f27c1e] transition'>ABOUT</NavLink>
//           <NavLink to='/contact' className='hover:text-[#f27c1e] transition'>CONTACT</NavLink>
//         </ul>

//         {/* Desktop Icons */}
//         <div className='items-center hidden gap-5 md:flex'> 
//           <img
//             onClick={() => {
//               setShowSearch(true);
//               navigate('/collection');
//             }}
//             src={assets.search_icon}
//             alt="search"
//             className='object-contain w-6 h-6 cursor-pointer'
//             style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//           />
//           <div className='relative group'>
//             <img
//               onClick={() => (token ? null : navigate('/login'))}
//               src={assets.profile_icon}
//               alt="profile"
//               className='object-contain w-6 h-6 cursor-pointer'
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
//           <Link to='/cart' className='relative'>
//             <img
//               src={assets.cart_icon}
//               alt="cart"
//               className='object-contain w-6 h-6'
//               style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//             />
//             <p className='absolute right-[-6px] bottom-[-6px] w-4 h-4 text-center text-[10px] bg-[#f27c1e] text-white rounded-full leading-4'>
//               {getCartCount()}
//             </p>
//           </Link>
//         </div>
//       </div>

//       {/* Bottom Mobile Nav */}
//       <div className="fixed bottom-0 left-0 z-40 flex justify-around w-full px-4 py-2 bg-black border-t border-gray-800 md:hidden">
//         <Link to="/cart" className="flex flex-col items-center text-[#f27c1e]">
//           <img src={assets.cart_icon} className="object-contain w-6 h-6" />
//           <span className="text-[10px] mt-1">Cart</span>
//         </Link>
//         <div onClick={() => (token ? null : navigate('/login'))} className="flex flex-col items-center text-[#f27c1e]">
//           <img src={assets.profile_icon} className="object-contain w-6 h-6" />
//           <span className="text-[10px] mt-1">Profile</span>
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

// import React, { useContext, useEffect, useState, useRef } from 'react';
// import { assets } from '../assets/assets';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const [mobileProfileDropdown, setMobileProfileDropdown] = useState(false);
//   const location = useLocation();
//   const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
//   const mobileProfileRef = useRef();

//   const logout = () => {
//     navigate('/login');
//     localStorage.removeItem('token');
//     setToken('');
//     setCartItems({});
//     setMobileProfileDropdown(false);
//   };

//   useEffect(() => {
//     setVisible(false);
//     setMobileProfileDropdown(false);
//   }, [location]);

//   useEffect(() => {
//     document.body.style.overflow = visible ? 'hidden' : '';
//   }, [visible]);

//   // Close mobile profile dropdown on outside click
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (mobileProfileRef.current && !mobileProfileRef.current.contains(event.target)) {
//         setMobileProfileDropdown(false);
//       }
//     }
//     if (mobileProfileDropdown) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [mobileProfileDropdown]);

//   return (
//     <div className="fixed top-0 left-0 z-50 w-full text-white bg-black shadow-md">
//       <div className="flex items-center justify-between max-w-screen-xl px-4 pt-3 pb-2 mx-auto sm:px-6 md:px-10">

//         {/* Mobile: Menu */}
//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           alt="menu"
//           className='w-[22px] h-[22px] object-contain cursor-pointer md:hidden'
//           style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//         />

//         {/* Logo Center on Mobile */}
//         <Link
//           to='/'
//           className='mx-auto font-extrabold whitespace-nowrap md:mx-0'
//           style={{
//             fontSize: 'clamp(18px, 4vw, 28px)',
//             lineHeight: '1',
//           }}
//         >
//           <img
//             src={assets.support_img}
//             alt="Logo"
//             className="max-w-[160px] rounded-md mx-auto w-[120px] md:w-[160px]"
//           />
//         </Link>

//         {/* Search Right */}
//         <div className="md:hidden">
//           <img
//             onClick={() => {
//               setShowSearch(true);
//               navigate('/collection');
//             }}
//             src={assets.search_icon}
//             alt="search"
//             className='w-[22px] h-[22px] cursor-pointer object-contain'
//             style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//           />
//         </div>

//         {/* Desktop Menu */}
//         <ul className='hidden gap-6 text-sm md:flex xl:text-base'>
//           <NavLink to='/' className='hover:text-[#f27c1e] transition'>HOME</NavLink>
//           <NavLink to='/collection' className='hover:text-[#f27c1e] transition'>COLLECTION</NavLink>
//           <NavLink to='/about' className='hover:text-[#f27c1e] transition'>ABOUT</NavLink>
//           <NavLink to='/contact' className='hover:text-[#f27c1e] transition'>CONTACT</NavLink>
//         </ul>

//         {/* Desktop Icons */}
//         <div className='items-center hidden gap-5 md:flex'> 
//           <img
//             onClick={() => {
//               setShowSearch(true);
//               navigate('/collection');
//             }}
//             src={assets.search_icon}
//             alt="search"
//             className='object-contain w-6 h-6 cursor-pointer'
//             style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//           />
//           <div className='relative group'>
//             <img
//               onClick={() => (token ? null : navigate('/login'))}
//               src={assets.profile_icon}
//               alt="profile"
//               className='object-contain w-6 h-6 cursor-pointer'
//               style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//             />
//             {token && (
//               <div className='absolute right-0 hidden pt-4 group-hover:block'>
//                 <div className='flex flex-col gap-2 px-5 py-3 text-white bg-gray-800 rounded w-36'>
//                   <p className='cursor-pointer hover:text-[#f27c1e]' onClick={() => navigate('/profile')}>My Profile</p>
//                   <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-[#f27c1e]'>Orders</p>
//                   <p onClick={logout} className='cursor-pointer hover:text-[#f27c1e]'>Logout</p>
//                 </div>
//               </div>
//             )}
//           </div>
//           <Link to='/cart' className='relative'>
//             <img
//               src={assets.cart_icon}
//               alt="cart"
//               className='object-contain w-6 h-6'
//               style={{ filter: 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)' }}
//             />
//             <p className='absolute right-[-6px] bottom-[-6px] w-4 h-4 text-center text-[10px] bg-[#f27c1e] text-white rounded-full leading-4'>
//               {getCartCount()}
//             </p>
//           </Link>
//         </div>
//       </div>

//       {/* Bottom Mobile Nav */}
//       <div className="fixed bottom-0 left-0 z-40 flex justify-around w-full px-4 py-2 bg-black border-t border-gray-800 md:hidden">
//         <Link to="/cart" className="relative flex flex-col items-center text-[#f27c1e]">
//           <img src={assets.cart_icon} className="object-contain w-6 h-6" />
//           <span className="text-[10px] mt-1">Cart</span>
//           {getCartCount() > 0 && (
//             <p className='absolute right-8 bottom-5 w-4 h-4 text-center text-[10px] bg-[#f27c1e] text-white rounded-full leading-4'>
//               {getCartCount()}
//             </p>
//           )}
//         </Link>

//         {/* Profile icon toggles dropdown on mobile */}
//         <div ref={mobileProfileRef} className="relative flex flex-col items-center text-[#f27c1e]">
//           <div
//             onClick={() => (token ? setMobileProfileDropdown(!mobileProfileDropdown) : navigate('/login'))}
//             className="cursor-pointer"
//           >
//             <img src={assets.profile_icon} className="object-contain w-6 h-6" />
//             <span className="text-[10px] mt-1">Profile</span>
//           </div>

//           {/* Mobile profile dropdown */}
//           {token && mobileProfileDropdown && (
//             <div className="absolute flex flex-col gap-2 px-5 py-3 text-white bg-gray-800 rounded bottom-12 w-36">
//               <p className='cursor-pointer hover:text-[#f27c1e]' onClick={() => { navigate('/profile'); setMobileProfileDropdown(false); }}>My Profile</p>
//               <p className='cursor-pointer hover:text-[#f27c1e]' onClick={() => { navigate('/orders'); setMobileProfileDropdown(false); }}>Orders</p>
//               <p className='cursor-pointer hover:text-[#f27c1e]' onClick={logout}>Logout</p>
//             </div>
//           )}
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

// import React, { useContext, useEffect, useState, useRef } from 'react';
// import { assets } from '../assets/assets';
// import { Link, NavLink, useLocation } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const [mobileProfileDropdown, setMobileProfileDropdown] = useState(false);
//   const location = useLocation();
//   const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
//   const mobileProfileRef = useRef();

//   const logout = () => {
//     navigate('/login');
//     localStorage.removeItem('token');
//     setToken('');
//     setCartItems({});
//     setMobileProfileDropdown(false);
//   };

//   useEffect(() => {
//     setVisible(false);
//     setMobileProfileDropdown(false);
//   }, [location]);

//   useEffect(() => {
//     document.body.style.overflow = visible ? 'hidden' : '';
//   }, [visible]);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (mobileProfileRef.current && !mobileProfileRef.current.contains(event.target)) {
//         setMobileProfileDropdown(false);
//       }
//     }
//     if (mobileProfileDropdown) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [mobileProfileDropdown]);

//   const orangeFilter = 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)';

//   return (
//     <div className="fixed top-0 left-0 z-50 w-full text-white bg-black shadow-md">
//       <div className="flex items-center justify-between max-w-screen-xl px-4 pt-3 pb-2 mx-auto sm:px-6 md:px-10">

//         {/* Mobile: Menu */}
//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           alt="menu"
//           className='w-[22px] h-[22px] object-contain cursor-pointer md:hidden'
//           style={{ filter: orangeFilter }}
//         />

//         {/* Logo Center on Mobile */}
//         <Link to='/' className='mx-auto font-extrabold whitespace-nowrap md:mx-0' style={{ fontSize: 'clamp(18px, 4vw, 28px)', lineHeight: '1' }}>
//           <img
//             src={assets.support_img}
//             alt="Logo"
//             className="max-w-[160px] rounded-md mx-auto w-[120px] md:w-[160px]"
//           />
//         </Link>

//         {/* Search Right on Mobile */}
//         <div className="md:hidden">
//           <img
//             onClick={() => {
//               setShowSearch(true);
//               navigate('/collection');
//             }}
//             src={assets.search_icon}
//             alt="search"
//             className='w-[22px] h-[22px] cursor-pointer object-contain'
//             style={{ filter: orangeFilter }}
//           />
//         </div>

//         {/* Desktop Menu */}
//         <ul className='hidden gap-6 text-sm md:flex xl:text-base'>
//           <NavLink to='/' className='hover:text-[#f27c1e] transition'>HOME</NavLink>
//           <NavLink to='/collection' className='hover:text-[#f27c1e] transition'>COLLECTION</NavLink>
//           <NavLink to='/about' className='hover:text-[#f27c1e] transition'>ABOUT</NavLink>
//           <NavLink to='/contact' className='hover:text-[#f27c1e] transition'>CONTACT</NavLink>
//         </ul>

//         {/* Desktop Icons */}
//         <div className='items-center hidden gap-5 md:flex'>
//           <img
//             onClick={() => {
//               setShowSearch(true);
//               navigate('/collection');
//             }}
//             src={assets.search_icon}
//             alt="search"
//             className='object-contain w-6 h-6 cursor-pointer'
//             style={{ filter: orangeFilter }}
//           />
//           <div className='relative group'>
//             <img
//               onClick={() => (token ? null : navigate('/login'))}
//               src={assets.profile_icon}
//               alt="profile"
//               className='object-contain w-6 h-6 cursor-pointer'
//               style={{ filter: orangeFilter }}
//             />
//             {token && (
//               <div className='absolute right-0 hidden pt-4 group-hover:block'>
//                 <div className='flex flex-col gap-2 px-5 py-3 text-white bg-gray-800 rounded w-36'>
//                   {/* <p className='cursor-pointer hover:text-[#f27c1e]' onClick={() => navigate('/profile')}>My Profile</p> */}
//                   <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-[#f27c1e]'>Orders</p>
//                   <p onClick={logout} className='cursor-pointer hover:text-[#f27c1e]'>Logout</p>
//                 </div>
//               </div>
//             )}
//           </div>
//           <Link to='/cart' className='relative'>
//             <img
//               src={assets.cart_icon}
//               alt="cart"
//               className='object-contain w-6 h-6'
//               style={{ filter: orangeFilter }}
//             />
//             <p className='absolute right-[-6px] bottom-[-6px] w-4 h-4 text-center text-[10px] bg-[#f27c1e] text-white rounded-full leading-4'>
//               {getCartCount()}
//             </p>
//           </Link>
//         </div>
//       </div>

//       {/* Bottom Mobile Nav */}
//       <div className="fixed bottom-0 left-0 z-40 flex justify-around w-full px-4 py-2 bg-black border-t border-gray-800 md:hidden">
//         <Link to="/cart" className="relative flex flex-col items-center text-[#f27c1e]">
//           <img src={assets.cart_icon} className="object-contain w-6 h-6" style={{ filter: orangeFilter }} />
//           <span className="text-[10px] mt-1">Cart</span>
//           {getCartCount() > 0 && (
//             <p className='absolute right-8 bottom-5 w-4 h-4 text-center text-[10px] bg-[#f27c1e] text-white rounded-full leading-4'>
//               {getCartCount()}
//             </p>
//           )}
//         </Link>

//         {/* Profile Icon on Mobile */}
//         <div ref={mobileProfileRef} className="relative flex flex-col items-center text-[#f27c1e]">
//           <div
//             onClick={() => (token ? setMobileProfileDropdown(!mobileProfileDropdown) : navigate('/login'))}
//             className="cursor-pointer"
//           >
//             <img src={assets.profile_icon} className="object-contain w-6 h-6" style={{ filter: orangeFilter }} />
//             <span className="text-[10px] mt-1">Profile</span>
//           </div>
//           {token && mobileProfileDropdown && (
//             <div className="absolute flex flex-col gap-2 px-5 py-3 text-white bg-gray-800 rounded bottom-12 w-36">
//               {/* <p className='cursor-pointer hover:text-[#f27c1e]' onClick={() => { navigate('/profile'); setMobileProfileDropdown(false); }}>My Profile</p> */}
//               <p className='cursor-pointer hover:text-[#f27c1e]' onClick={() => { navigate('/orders'); setMobileProfileDropdown(false); }}>Orders</p>
//               <p className='cursor-pointer hover:text-[#f27c1e]' onClick={logout}>Logout</p>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <div className={`fixed top-0 right-0 w-full h-full bg-black text-white z-[9999] transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
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

import React, { useContext, useEffect, useState, useRef } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [mobileProfileDropdown, setMobileProfileDropdown] = useState(false);
  const location = useLocation();
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
  const mobileProfileRef = useRef();

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    setMobileProfileDropdown(false);
  };

  useEffect(() => {
    setVisible(false);
    setMobileProfileDropdown(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : '';
  }, [visible]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileProfileRef.current && !mobileProfileRef.current.contains(event.target)) {
        setMobileProfileDropdown(false);
      }
    }
    if (mobileProfileDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileProfileDropdown]);

  const orangeFilter = 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)';

  return (
    <div className="fixed top-0 left-0 z-50 w-full text-white bg-black shadow-md">
      <div className="flex items-center justify-between max-w-screen-xl px-4 pt-3 pb-2 mx-auto sm:px-6 md:px-10">

        {/* Mobile: Menu */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu"
          className='w-[22px] h-[22px] object-contain cursor-pointer md:hidden'
          style={{ filter: orangeFilter }}
        />

        {/* Logo Center on Mobile */}
        <Link to='/' className='mx-auto font-extrabold whitespace-nowrap md:mx-0' style={{ fontSize: 'clamp(18px, 4vw, 28px)', lineHeight: '1' }}>
          <img
            src={assets.support_img}
            alt="Logo"
            className="max-w-[160px] rounded-md mx-auto w-[120px] md:w-[160px]"
          />
        </Link>

        {/* Search Right on Mobile */}
        <div className="md:hidden">
          <img
            onClick={() => {
              setShowSearch(true);
              navigate('/collection');
            }}
            src={assets.search_icon}
            alt="search"
            className='w-[22px] h-[22px] cursor-pointer object-contain'
            style={{ filter: orangeFilter }}
          />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden gap-6 text-sm md:flex xl:text-base'>
          <NavLink to='/' className='hover:text-[#f27c1e] transition'>HOME</NavLink>
          <NavLink to='/collection' className='hover:text-[#f27c1e] transition'>COLLECTION</NavLink>
          <NavLink to='/about' className='hover:text-[#f27c1e] transition'>ABOUT</NavLink>
          <NavLink to='/contact' className='hover:text-[#f27c1e] transition'>CONTACT</NavLink>
        </ul>

        {/* Desktop Icons */}
        <div className='items-center hidden gap-5 md:flex'>
          <img
            onClick={() => {
              setShowSearch(true);
              navigate('/collection');
            }}
            src={assets.search_icon}
            alt="search"
            className='object-contain w-6 h-6 cursor-pointer'
            style={{ filter: orangeFilter }}
          />
          <div className='relative group'>
            <img
              onClick={() => (token ? null : navigate('/login'))}
              src={assets.profile_icon}
              alt="profile"
              className='object-contain w-6 h-6 cursor-pointer'
              style={{ filter: orangeFilter }}
            />
            {token && (
              <div className='absolute right-0 hidden pt-4 group-hover:block'>
                <div className='flex flex-col gap-2 px-5 py-3 text-white bg-gray-800 rounded w-36'>
                  <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-[#f27c1e]'>Orders</p>
                  <p onClick={logout} className='cursor-pointer hover:text-[#f27c1e]'>Logout</p>
                </div>
              </div>
            )}
          </div>
          <Link to='/cart' className='relative'>
            <img
              src={assets.cart_icon}
              alt="cart"
              className='object-contain w-6 h-6'
              style={{ filter: orangeFilter }}
            />
            {getCartCount() > 0 && (
              <p className='absolute right-[-6px] bottom-[-6px] w-4 h-4 text-center text-[10px] bg-[#f27c1e] text-white rounded-full leading-4'>
                {getCartCount()}
              </p>
            )}
          </Link>
        </div>
      </div>

      {/* Bottom Mobile Nav */}
      <div className="fixed bottom-0 left-0 z-40 flex justify-around w-full px-4 py-2 bg-black border-t border-gray-800 md:hidden">
        <Link to="/cart" className="relative flex flex-col items-center text-[#f27c1e]">
          <img src={assets.cart_icon} className="object-contain w-6 h-6" style={{ filter: orangeFilter }} />
          <span className="text-[10px] mt-1">Cart</span>
          {getCartCount() > 0 && (
            <p className='absolute right-[10px] bottom-[16px] w-4 h-4 text-center text-[10px] bg-[#f27c1e] text-white rounded-full leading-4'>
              {getCartCount()}
            </p>
          )}
        </Link>

        {/* Profile Icon on Mobile */}
        <div ref={mobileProfileRef} className="relative flex flex-col items-center text-[#f27c1e]">
          <div
            onClick={() => (token ? setMobileProfileDropdown(!mobileProfileDropdown) : navigate('/login'))}
            className="cursor-pointer"
          >
            <img src={assets.profile_icon} className="object-contain w-6 h-6" style={{ filter: orangeFilter }} />
            <span className="text-[10px] mt-1">Profile</span>
          </div>
          {token && mobileProfileDropdown && (
            <div className="absolute flex flex-col gap-2 px-5 py-3 text-white bg-gray-800 rounded bottom-12 w-36">
              <p className='cursor-pointer hover:text-[#f27c1e]' onClick={() => { navigate('/orders'); setMobileProfileDropdown(false); }}>Orders</p>
              <p className='cursor-pointer hover:text-[#f27c1e]' onClick={logout}>Logout</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 w-full h-full bg-black text-white z-[9999] transform transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
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

//   // The filter style used to recolor icons to #f27c1e
//   const iconFilter = 'invert(61%) sepia(93%) saturate(2511%) hue-rotate(6deg) brightness(96%) contrast(104%)';

//   return (
//     <div className="fixed top-0 left-0 z-50 w-full text-white bg-black shadow-md">
//       <div className="flex items-center justify-between max-w-screen-xl px-4 pt-3 pb-2 mx-auto sm:px-6 md:px-10">

//         {/* Mobile: Menu */}
//         <img
//           onClick={() => setVisible(true)}
//           src={assets.menu_icon}
//           alt="menu"
//           className='w-[22px] h-[22px] object-contain cursor-pointer md:hidden'
//           style={{ filter: iconFilter }}
//         />

//         {/* Logo Center on Mobile */}
//         <Link
//           to='/'
//           className='mx-auto font-extrabold whitespace-nowrap md:mx-0'
//           style={{
//             fontSize: 'clamp(18px, 4vw, 28px)',
//             lineHeight: '1',
//           }}
//         >
//           <img
//             src={assets.support_img}
//             alt="Logo"
//             className="max-w-[160px] rounded-md mx-auto w-[120px] md:w-[160px]"
//           />
//         </Link>

//         {/* Search Right */}
//         <div className="md:hidden">
//           <img
//             onClick={() => {
//               setShowSearch(true);
//               navigate('/collection');
//             }}
//             src={assets.search_icon}
//             alt="search"
//             className='w-[22px] h-[22px] cursor-pointer object-contain'
//             style={{ filter: iconFilter }}
//           />
//         </div>

//         {/* Desktop Menu */}
//         <ul className='hidden gap-6 text-sm md:flex xl:text-base'>
//           <NavLink to='/' className='hover:text-[#f27c1e] transition'>HOME</NavLink>
//           <NavLink to='/collection' className='hover:text-[#f27c1e] transition'>COLLECTION</NavLink>
//           <NavLink to='/about' className='hover:text-[#f27c1e] transition'>ABOUT</NavLink>
//           <NavLink to='/contact' className='hover:text-[#f27c1e] transition'>CONTACT</NavLink>
//         </ul>

//         {/* Desktop Icons */}
//         <div className='items-center hidden gap-5 md:flex'> 
//           <img
//             onClick={() => {
//               setShowSearch(true);
//               navigate('/collection');
//             }}
//             src={assets.search_icon}
//             alt="search"
//             className='object-contain w-6 h-6 cursor-pointer'
//             style={{ filter: iconFilter }}
//           />
//           <div className='relative group'>
//             <img
//               onClick={() => (token ? null : navigate('/login'))}
//               src={assets.profile_icon}
//               alt="profile"
//               className='object-contain w-6 h-6 cursor-pointer'
//               style={{ filter: iconFilter }}
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
//           <Link to='/cart' className='relative'>
//             <img
//               src={assets.cart_icon}
//               alt="cart"
//               className='object-contain w-6 h-6'
//               style={{ filter: iconFilter }}
//             />
//             <p className='absolute right-[-6px] bottom-[-6px] w-4 h-4 text-center text-[10px] bg-[#f27c1e] text-white rounded-full leading-4'>
//               {getCartCount()}
//             </p>
//           </Link>
//         </div>
//       </div>

//       {/* Bottom Mobile Nav */}
//       <div className="fixed bottom-0 left-0 z-40 flex justify-around w-full px-4 py-2 bg-black border-t border-gray-800 md:hidden">
//         <Link to="/cart" className="flex flex-col items-center text-[#f27c1e]">
//           <img
//             src={assets.cart_icon}
//             className="object-contain w-6 h-6"
//             style={{ filter: iconFilter }}
//             alt="cart"
//           />
//           <span className="text-[10px] mt-1">Cart</span>
//         </Link>
//         <div
//           onClick={() => (token ? null : navigate('/login'))}
//           className="flex flex-col items-center text-[#f27c1e]"
//         >
//           <img
//             src={assets.profile_icon}
//             className="object-contain w-6 h-6"
//             style={{ filter: iconFilter }}
//             alt="profile"
//           />
//           <span className="text-[10px] mt-1">Profile</span>
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
