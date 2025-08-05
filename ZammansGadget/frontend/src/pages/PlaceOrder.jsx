// // import React, { useContext, useState } from 'react';
// // import Title from '../components/Title';
// // import CartTotal from '../components/CartTotal';
// // import { assets } from '../assets/assets';
// // import { ShopContext } from '../context/ShopContext';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const PlaceOrder = () => {
// //   const [method, setMethod] = useState('cod');
// //   const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     street: '',
// //     city: '',
// //     state: '',
// //     zipcode: '',
// //     country: '',
// //     phone: ''
// //   });

// //   const onChangeHandler = (event) => {
// //     const name = event.target.name;
// //     const value = event.target.value;
// //     setFormData(data => ({ ...data, [name]: value }));
// //   };

// //   const onSubmitHandler = async (event) => {
// //     event.preventDefault();
// //     try {
// //       let orderItems = [];

// //       for (const items in cartItems) {
// //         for (const item in cartItems[items]) {
// //           if (cartItems[items][item] > 0) {
// //             const itemInfo = structuredClone(products.find(product => product._id === items));
// //             if (itemInfo) {
// //               itemInfo.size = item;
// //               itemInfo.quantity = cartItems[items][item];
// //               orderItems.push(itemInfo);
// //             }
// //           }
// //         }
// //       }

// //       let orderData = {
// //         address: formData,
// //         items: orderItems,
// //         amount: getCartAmount() + delivery_fee
// //       };

// //       // Only COD payment method now
// //       const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });
// //       if (response.data.success) {
// //         setCartItems({});
// //         navigate('/orders');
// //       } else {
// //         toast.error(response.data.message);
// //       }

// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error.message);
// //     }
// //   };

// //   return (
// //     <form onSubmit={onSubmitHandler} className='flex flex-col mt-20 sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
// //       {/* ------------- Left Side ---------------- */}
// //       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

// //         <div className='my-3 text-xl sm:text-2xl'>
// //           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
// //         </div>
// //         <div className='flex gap-3'>
// //           <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name' />
// //           <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name' />
// //         </div>
// //         <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email address' />
// //         <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' />
// //         <div className='flex gap-3'>
// //           <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
// //           <input onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' />
// //         </div>
// //         <div className='flex gap-3'>
// //           <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode' />
// //           <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
// //         </div>
// //         <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone' />
// //       </div>

// //       {/* ------------- Right Side ------------------ */}
// //       <div className='mt-8'>

// //         <div className='mt-8 min-w-80'>
// //           <CartTotal />
// //         </div>

// //         <div className='mt-12'>
// //           <Title text1={'PAYMENT'} text2={'METHOD'} />
// //           {/* Just show COD without option to change */}
// //           <div className='flex items-center gap-3 p-2 px-3 border'>
// //             <p className='min-w-3.5 h-3.5 bg-green-400 rounded-full'></p>
// //             <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
// //           </div>

// //           <div className='w-full mt-8 text-end'>
// //             <button type='submit' className='px-16 py-3 text-sm text-white bg-black'>PLACE ORDER</button>
// //           </div>
// //         </div>
// //       </div>
// //     </form>
// //   );
// // };

// // export default PlaceOrder;


// // import React, { useContext, useState } from 'react';
// // import Title from '../components/Title';
// // import CartTotal from '../components/CartTotal';
// // import { ShopContext } from '../context/ShopContext';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const PlaceOrder = () => {
// //   const [method, setMethod] = useState('cod');
// //   const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     street: '',
// //     city: '',
// //     state: '',
// //     zipcode: '',
// //     country: '',
// //     phone: ''
// //   });

// //   const onChangeHandler = (event) => {
// //     const name = event.target.name;
// //     const value = event.target.value;
// //     setFormData(data => ({ ...data, [name]: value }));
// //   };

// //   const onSubmitHandler = async (event) => {
// //     event.preventDefault();
// //     try {
// //       let orderItems = [];

// //       for (const items in cartItems) {
// //         for (const item in cartItems[items]) {
// //           if (cartItems[items][item] > 0) {
// //             const itemInfo = structuredClone(products.find(product => product._id === items));
// //             if (itemInfo) {
// //               itemInfo.size = item;
// //               itemInfo.quantity = cartItems[items][item];
// //               orderItems.push(itemInfo);
// //             }
// //           }
// //         }
// //       }

// //       let orderData = {
// //         address: formData,
// //         items: orderItems,
// //         amount: getCartAmount() + delivery_fee
// //       };

// //       const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });
// //       if (response.data.success) {
// //         setCartItems({});
// //         navigate('/orders');
// //       } else {
// //         toast.error(response.data.message);
// //       }

// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error.message);
// //     }
// //   };

// //   return (
// //     <form onSubmit={onSubmitHandler} className='flex flex-col mt-20 sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
// //       {/* ----------- LEFT SIDE ------------ */}
// //       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
// //         <div className='my-3 text-xl sm:text-2xl'>
// //           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
// //         </div>

// //         {/* Full Name */}
// //         <div className='flex gap-3'>
// //           <input
// //             required
// //             onChange={onChangeHandler}
// //             name='firstName'
// //             value={formData.firstName}
// //             className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
// //             type="text"
// //             placeholder='First Name'
// //           />
// //           <input
// //             required
// //             onChange={onChangeHandler}
// //             name='lastName'
// //             value={formData.lastName}
// //             className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
// //             type="text"
// //             placeholder='Last Name'
// //           />
// //         </div>

// //         {/* Phone */}
// //         <input
// //           required
// //           onChange={onChangeHandler}
// //           name='phone'
// //           value={formData.phone}
// //           className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
// //           type="number"
// //           placeholder='Phone Number'
// //         />

// //         {/* Full Address */}
// //         <textarea
// //           required
// //           onChange={(e) => {
// //             const parts = e.target.value.split(',');
// //             setFormData(data => ({
// //               ...data,
// //               street: parts[0]?.trim() || '',
// //               city: parts[1]?.trim() || '',
// //               state: parts[2]?.trim() || '',
// //               zipcode: parts[3]?.trim() || '',
// //               country: parts[4]?.trim() || ''
// //             }));
// //           }}
// //           className='border border-gray-300 rounded py-1.5 px-3.5 w-full min-h-[80px]'
// //           placeholder='Full Address (Street, City, State, Zipcode, Country)'
// //           value={`${formData.street}${formData.city ? ', ' + formData.city : ''}${formData.state ? ', ' + formData.state : ''}${formData.zipcode ? ', ' + formData.zipcode : ''}${formData.country ? ', ' + formData.country : ''}`}
// //         />
// //       </div>

// //       {/* ----------- RIGHT SIDE ------------ */}
// //       <div className='mt-8'>
// //         <div className='mt-8 min-w-80'>
// //           <CartTotal />
// //         </div>

// //         <div className='mt-12'>
// //           <Title text1={'PAYMENT'} text2={'METHOD'} />
// //           <div className='flex items-center gap-3 p-2 px-3 border'>
// //             <p className='min-w-3.5 h-3.5 bg-green-400 rounded-full'></p>
// //             <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
// //           </div>

// //           <div className='w-full mt-8 text-end'>
// //             <button type='submit' className='px-16 py-3 text-sm text-white bg-black'>PLACE ORDER</button>
// //           </div>
// //         </div>
// //       </div>
// //     </form>
// //   );
// // };

// // export default PlaceOrder;

// // import React, { useContext, useState } from 'react';
// // import Title from '../components/Title';
// // import CartTotal from '../components/CartTotal';
// // import { ShopContext } from '../context/ShopContext';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const PlaceOrder = () => {
// //   const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     phone: '',
// //     address: ''
// //   });

// //   const onChangeHandler = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(data => ({ ...data, [name]: value }));
// //   };

// //   const onSubmitHandler = async (e) => {
// //     e.preventDefault();

// //     if (!formData.fullName || !formData.phone || !formData.address) {
// //       toast.error('Please fill in all the fields.');
// //       return;
// //     }

// //     try {
// //       let orderItems = [];

// //       for (const items in cartItems) {
// //         for (const item in cartItems[items]) {
// //           if (cartItems[items][item] > 0) {
// //             const itemInfo = structuredClone(products.find(product => product._id === items));
// //             if (itemInfo) {
// //               itemInfo.size = item;
// //               itemInfo.quantity = cartItems[items][item];
// //               orderItems.push(itemInfo);
// //             }
// //           }
// //         }
// //       }

// //       let orderData = {
// //         address: formData, // now it has fullName, phone, address
// //         items: orderItems,
// //         amount: getCartAmount() + delivery_fee
// //       };

// //       const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });

// //       if (response.data.success) {
// //         setCartItems({});
// //         navigate('/orders');
// //       } else {
// //         toast.error(response.data.message);
// //       }

// //     } catch (err) {
// //       toast.error(err.message);
// //       console.log(err);
// //     }
// //   };

// //   return (
// //     <form onSubmit={onSubmitHandler} className='flex flex-col mt-20 sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
// //       {/* Left Side */}
// //       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
// //         <div className='my-3 text-xl sm:text-2xl'>
// //           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
// //         </div>

// //         {/* Full Name */}
// //         <input
// //           required
// //           name="fullName"
// //           value={formData.fullName}
// //           onChange={onChangeHandler}
// //           className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
// //           type="text"
// //           placeholder='Full Name'
// //         />

// //         {/* Phone Number */}
// //         <input
// //           required
// //           name="phone"
// //           value={formData.phone}
// //           onChange={onChangeHandler}
// //           className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
// //           type="number"
// //           placeholder='Phone Number'
// //         />

// //         {/* Full Address */}
// //         <textarea
// //           required
// //           name="address"
// //           value={formData.address}
// //           onChange={onChangeHandler}
// //           className='border border-gray-300 rounded py-1.5 px-3.5 w-full min-h-[80px]'
// //           placeholder='Full Address'
// //         />
// //       </div>

// //       {/* Right Side */}
// //       <div className='mt-8'>
// //         <div className='mt-8 min-w-80'>
// //           <CartTotal />
// //         </div>

// //         <div className='mt-12'>
// //           <Title text1={'PAYMENT'} text2={'METHOD'} />
// //           <div className='flex items-center gap-3 p-2 px-3 border'>
// //             <p className='min-w-3.5 h-3.5 bg-green-400 rounded-full'></p>
// //             <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
// //           </div>

// //           <div className='w-full mt-8 text-end'>
// //             <button type='submit' className='px-16 py-3 text-sm text-white bg-black'>PLACE ORDER</button>
// //           </div>
// //         </div>
// //       </div>
// //     </form>
// //   );
// // };

// // export default PlaceOrder;


// // import React, { useContext, useState } from 'react';
// // import Title from '../components/Title';
// // import CartTotal from '../components/CartTotal';
// // import { ShopContext } from '../context/ShopContext';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const PlaceOrder = () => {
// //   const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

// //   const [formData, setFormData] = useState({
// //     fullName: '',
// //     phone: '',
// //     address: ''
// //   });

// //   const onChangeHandler = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(data => ({ ...data, [name]: value }));
// //   };

// //   const onSubmitHandler = async (e) => {
// //     e.preventDefault();

// //     if (!formData.fullName || !formData.phone || !formData.address) {
// //       toast.error('Please fill in all the fields.');
// //       return;
// //     }

// //     try {
// //       let orderItems = [];

// //       // Loop through cart items and include selected variants and their prices
// //       for (const items in cartItems) {
// //         for (const item in cartItems[items]) {
// //           if (cartItems[items][item] > 0) {
// //             const itemInfo = structuredClone(products.find(product => product._id === items));
// //             if (itemInfo) {
// //               const selectedVariant = itemInfo.variants.find(variant => variant.variant === item);
// //               const variantPrice = selectedVariant?.offerPrice || selectedVariant?.regularPrice;
// //               itemInfo.size = item;
// //               itemInfo.quantity = cartItems[items][item];
// //               itemInfo.price = variantPrice; // Set variant price
// //               orderItems.push(itemInfo);
// //             }
// //           }
// //         }
// //       }

// //       let orderData = {
// //         address: formData, // Delivery address with name, phone, and address
// //         items: orderItems,
// //         amount: getCartAmount() + delivery_fee // Total amount with delivery fee
// //       };

// //       const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });

// //       if (response.data.success) {
// //         setCartItems({});  // Clear cart items after successful order
// //         navigate('/orders'); // Navigate to the orders page
// //       } else {
// //         toast.error(response.data.message); // Display error message
// //       }

// //     } catch (err) {
// //       toast.error(err.message); // Display any errors during the API call
// //       console.log(err);
// //     }
// //   };

// //   return (
// //     <form onSubmit={onSubmitHandler} className='flex flex-col mt-20 sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
// //       {/* Left Side: Delivery Information */}
// //       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
// //         <div className='my-3 text-xl sm:text-2xl'>
// //           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
// //         </div>

// //         {/* Full Name */}
// //         <input
// //           required
// //           name="fullName"
// //           value={formData.fullName}
// //           onChange={onChangeHandler}
// //           className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
// //           type="text"
// //           placeholder='Full Name'
// //         />

// //         {/* Phone Number */}
// //         <input
// //           required
// //           name="phone"
// //           value={formData.phone}
// //           onChange={onChangeHandler}
// //           className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
// //           type="number"
// //           placeholder='Phone Number'
// //         />

// //         {/* Full Address */}
// //         <textarea
// //           required
// //           name="address"
// //           value={formData.address}
// //           onChange={onChangeHandler}
// //           className='border border-gray-300 rounded py-1.5 px-3.5 w-full min-h-[80px]'
// //           placeholder='Full Address'
// //         />
// //       </div>

// //       {/* Right Side: Cart Total and Payment */}
// //       <div className='mt-8'>
// //         <div className='mt-8 min-w-80'>
// //           <CartTotal />
// //         </div>

// //         <div className='mt-12'>
// //           <Title text1={'PAYMENT'} text2={'METHOD'} />
// //           <div className='flex items-center gap-3 p-2 px-3 border'>
// //             <p className='min-w-3.5 h-3.5 bg-green-400 rounded-full'></p>
// //             <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
// //           </div>

// //           <div className='w-full mt-8 text-end'>
// //             <button type='submit' className='px-16 py-3 text-sm text-white bg-black'>PLACE ORDER</button>
// //           </div>
// //         </div>
// //       </div>
// //     </form>
// //   );
// // };

// // export default PlaceOrder;



// import React, { useContext, useState } from 'react';
// import Title from '../components/Title';
// import CartTotal from '../components/CartTotal';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const PlaceOrder = () => {
//   const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     address: ''
//   });

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData(data => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     if (!formData.fullName || !formData.phone || !formData.address) {
//       toast.error('Please fill in all the fields.');
//       return;
//     }

//     try {
//       let orderItems = [];

//       for (const items in cartItems) {
//         for (const item in cartItems[items]) {
//           if (cartItems[items][item] > 0) {
//             const itemInfo = structuredClone(products.find(product => product._id === items));
//             if (itemInfo) {
//               itemInfo.size = item;
//               itemInfo.quantity = cartItems[items][item];
//               orderItems.push(itemInfo);
//             }
//           }
//         }
//       }

//       let orderData = {
//         address: formData, // now it has fullName, phone, address
//         items: orderItems,
//         amount: getCartAmount() + delivery_fee
//       };

//       const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });

//       if (response.data.success) {
//         setCartItems({});
//         navigate('/orders');
//       } else {
//         toast.error(response.data.message);
//       }

//     } catch (err) {
//       toast.error(err.message);
//       console.log(err);
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col mt-20 sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//       {/* Left Side */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
//         <div className='my-3 text-xl sm:text-2xl'>
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>

//         {/* Full Name */}
//         <input
//           required
//           name="fullName"
//           value={formData.fullName}
//           onChange={onChangeHandler}
//           className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
//           type="text"
//           placeholder='Full Name'
//         />

//         {/* Phone Number */}
//         <input
//           required
//           name="phone"
//           value={formData.phone}
//           onChange={onChangeHandler}
//           className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
//           type="number"
//           placeholder='Phone Number'
//         />

//         {/* Full Address */}
//         <textarea
//           required
//           name="address"
//           value={formData.address}
//           onChange={onChangeHandler}
//           className='border border-gray-300 rounded py-1.5 px-3.5 w-full min-h-[80px]'
//           placeholder='Full Address'
//         />
//       </div>

//       {/* Right Side */}
//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotal />
//         </div>

//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHOD'} />
//           <div className='flex items-center gap-3 p-2 px-3 border'>
//             <p className='min-w-3.5 h-3.5 bg-green-400 rounded-full'></p>
//             <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
//           </div>

//           <div className='w-full mt-8 text-end'>
//             <button type='submit' className='px-16 py-3 text-sm text-white bg-black'>PLACE ORDER</button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;


// import React, { useContext, useState } from 'react';
// import Title from '../components/Title';
// import CartTotal from '../components/CartTotal';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const PlaceOrder = () => {
//   const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     address: ''
//   });

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData(data => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     if (!formData.fullName || !formData.phone || !formData.address) {
//       toast.error('Please fill in all the fields.');
//       return;
//     }

//     try {
//       let orderItems = [];

//       for (const productId in cartItems) {
//         for (const variantKey in cartItems[productId]) {
//           const cartData = cartItems[productId][variantKey]; // { quantity, color, price }
//           if (cartData.quantity > 0) {
//             const product = products.find(p => p._id === productId);
//             if (product) {
//               orderItems.push({
//                 productId,
//                 title: product.name,
//                 image: product.image && product.image.length > 0 ? product.image[0] : '',
//                 variant: variantKey,
//                 color: cartData.color || '',
//                 price: cartData.price,
//                 quantity: cartData.quantity,
//               });
//             }
//           }
//         }
//       }

//       const orderData = {
//         address: formData,
//         items: orderItems,
//         amount: getCartAmount() + delivery_fee
//       };

//       const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });

//       if (response.data.success) {
//         setCartItems({});
//         navigate('/orders');
//       } else {
//         toast.error(response.data.message);
//       }

//     } catch (err) {
//       toast.error(err.message);
//       console.log(err);
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col mt-20 sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//       {/* Left Side */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
//         <div className='my-3 text-xl sm:text-2xl'>
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>

//         {/* Full Name */}
//         <input
//           required
//           name="fullName"
//           value={formData.fullName}
//           onChange={onChangeHandler}
//           className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
//           type="text"
//           placeholder='Full Name'
//         />

//         {/* Phone Number */}
//         <input
//           required
//           name="phone"
//           value={formData.phone}
//           onChange={onChangeHandler}
//           className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
//           type="number"
//           placeholder='Phone Number'
//         />

//         {/* Full Address */}
//         <textarea
//           required
//           name="address"
//           value={formData.address}
//           onChange={onChangeHandler}
//           className='border border-gray-300 rounded py-1.5 px-3.5 w-full min-h-[80px]'
//           placeholder='Full Address'
//         />
//       </div>

//       {/* Right Side */}
//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotal />
//         </div>

//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHOD'} />
//           <div className='flex items-center gap-3 p-2 px-3 border'>
//             <p className='min-w-3.5 h-3.5 bg-green-400 rounded-full'></p>
//             <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
//           </div>

//           <div className='w-full mt-8 text-end'>
//             <button type='submit' className='px-16 py-3 text-sm text-white bg-black'>PLACE ORDER</button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;


// import React, { useContext, useState } from 'react';
// import Title from '../components/Title';
// import CartTotal from '../components/CartTotal';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const PlaceOrder = () => {
//   const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     address: ''
//   });

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData(data => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     if (!formData.fullName || !formData.phone || !formData.address) {
//       toast.error('Please fill in all the fields.');
//       return;
//     }

//     try {
//       let orderItems = [];

//       for (const productId in cartItems) {
//         for (const variantKey in cartItems[productId]) {
//           const cartData = cartItems[productId][variantKey]; // { quantity, color, price }
//           if (cartData.quantity > 0) {
//             const product = products.find(p => p._id === productId);
//             if (product) {
//               orderItems.push({
//                 productId,
//                 name: product.name,
//                 image: product.images && product.images.length > 0 ? product.images[0] : '',
//                 variant: {
//                   variantName: variantKey,
//                   color: {
//                     name: cartData.color?.name || '',
//                     code: cartData.color?.code || ''
//                   },
//                   price: cartData.price
//                 },
//                 quantity: cartData.quantity,
//               });
//             }
//           }
//         }
//       }

//       const orderData = {
//         address: formData,
//         items: orderItems,
//         amount: getCartAmount() + delivery_fee
//       };

//       const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });

//       if (response.data.success) {
//         setCartItems({});
//         navigate('/orders');
//       } else {
//         toast.error(response.data.message);
//       }

//     } catch (err) {
//       toast.error(err.message);
//       console.log(err);
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col mt-20 sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//       {/* Left Side */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
//         <div className='my-3 text-xl sm:text-2xl'>
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>

//         {/* Full Name */}
//         <input
//           required
//           name="fullName"
//           value={formData.fullName}
//           onChange={onChangeHandler}
//           className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
//           type="text"
//           placeholder='Full Name'
//         />

//         {/* Phone Number */}
//         <input
//           required
//           name="phone"
//           value={formData.phone}
//           onChange={onChangeHandler}
//           className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
//           type="number"
//           placeholder='Phone Number'
//         />

//         {/* Full Address */}
//         <textarea
//           required
//           name="address"
//           value={formData.address}
//           onChange={onChangeHandler}
//           className='border border-gray-300 rounded py-1.5 px-3.5 w-full min-h-[80px]'
//           placeholder='Full Address'
//         />
//       </div>

//       {/* Right Side */}
//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotal />
//         </div>

//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHOD'} />
//           <div className='flex items-center gap-3 p-2 px-3 border'>
//             <p className='min-w-3.5 h-3.5 bg-green-400 rounded-full'></p>
//             <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
//           </div>

//           <div className='w-full mt-8 text-end'>
//             <button type='submit' className='px-16 py-3 text-sm text-white bg-black'>PLACE ORDER</button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;


// import React, { useContext, useState } from 'react';
// import Title from '../components/Title';
// import CartTotal from '../components/CartTotal';
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const PlaceOrder = () => {
//   const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

//   const [formData, setFormData] = useState({
//     fullName: '',
//     phone: '',
//     address: ''
//   });

//   const onChangeHandler = (e) => {
//     const { name, value } = e.target;
//     setFormData(data => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     if (!formData.fullName || !formData.phone || !formData.address) {
//       toast.error('Please fill in all the fields.');
//       return;
//     }

//     try {
//       let orderItems = [];

//       for (const productId in cartItems) {
//         for (const variantKey in cartItems[productId]) {
//           const cartData = cartItems[productId][variantKey]; // { quantity, color, price }
//           if (cartData.quantity > 0) {
//             const product = products.find(p => p._id === productId);
//             if (product) {
//               orderItems.push({
//                 productId,
//                 title: product.name,
//                 image: product.images[0],
//                 variant: variantKey,
//                 color: cartData.color || '',
//                 price: cartData.price,
//                 quantity: cartData.quantity,
//               });
//             }
//           }
//         }
//       }

//       const orderData = {
//         address: formData,
//         items: orderItems,
//         amount: getCartAmount() + delivery_fee
//       };

//       const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });

//       if (response.data.success) {
//         setCartItems({});
//         navigate('/orders');
//       } else {
//         toast.error(response.data.message);
//       }

//     } catch (err) {
//       toast.error(err.message);
//       console.log(err);
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className='flex flex-col mt-20 sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
//       {/* Left Side */}
//       <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
//         <div className='my-3 text-xl sm:text-2xl'>
//           <Title text1={'DELIVERY'} text2={'INFORMATION'} />
//         </div>

//         {/* Full Name */}
//         <input
//           required
//           name="fullName"
//           value={formData.fullName}
//           onChange={onChangeHandler}
//           className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
//           type="text"
//           placeholder='Full Name'
//         />

//         {/* Phone Number */}
//         <input
//           required
//           name="phone"
//           value={formData.phone}
//           onChange={onChangeHandler}
//           className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
//           type="number"
//           placeholder='Phone Number'
//         />

//         {/* Full Address */}
//         <textarea
//           required
//           name="address"
//           value={formData.address}
//           onChange={onChangeHandler}
//           className='border border-gray-300 rounded py-1.5 px-3.5 w-full min-h-[80px]'
//           placeholder='Full Address'
//         />
//       </div>

//       {/* Right Side */}
//       <div className='mt-8'>
//         <div className='mt-8 min-w-80'>
//           <CartTotal />
//         </div>

//         <div className='mt-12'>
//           <Title text1={'PAYMENT'} text2={'METHOD'} />
//           <div className='flex items-center gap-3 p-2 px-3 border'>
//             <p className='min-w-3.5 h-3.5 bg-green-400 rounded-full'></p>
//             <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
//           </div>

//           <div className='w-full mt-8 text-end'>
//             <button type='submit' className='px-16 py-3 text-sm text-white bg-black'>PLACE ORDER</button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;


import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: ''
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.address) {
      toast.error('Please fill in all the fields.');
      return;
    }

    try {
      let orderItems = [];

      for (const productId in cartItems) {
        for (const variantKey in cartItems[productId]) {
          const cartData = cartItems[productId][variantKey]; // { quantity, color, price }
          if (cartData.quantity > 0) {
            const product = products.find(p => p._id === productId);
            if (product) {
              orderItems.push({
                productId,
                title: product.name,
                image: product.image && product.image.length > 0 ? product.image[0] : '',
                variant: variantKey,
                color: cartData.color || '',
                price: cartData.price,
                quantity: cartData.quantity,
              });
            }
          }
        }
      }

      const orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      };

      const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } });

      if (response.data.success) {
        setCartItems({});
        navigate('/orders');
      } else {
        toast.error(response.data.message);
      }

    } catch (err) {
      toast.error(err.message);
      console.log(err);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col mt-20 sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='my-3 text-xl sm:text-2xl'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        {/* Full Name */}
        <input
          required
          name="fullName"
          value={formData.fullName}
          onChange={onChangeHandler}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type="text"
          placeholder='Full Name'
        />

        {/* Phone Number */}
        <input
          required
          name="phone"
          value={formData.phone}
          onChange={onChangeHandler}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
          type="number"
          placeholder='Phone Number'
        />

        {/* Full Address */}
        <textarea
          required
          name="address"
          value={formData.address}
          onChange={onChangeHandler}
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full min-h-[80px]'
          placeholder='Full Address'
        />
      </div>

      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex items-center gap-3 p-2 px-3 border'>
            <p className='min-w-3.5 h-3.5 bg-green-400 rounded-full'></p>
            <p className='mx-4 text-sm font-medium text-gray-500'>CASH ON DELIVERY</p>
          </div>

          <div className='w-full mt-8 text-end'>
            <button type='submit' className='px-16 py-3 text-sm text-white bg-black'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
