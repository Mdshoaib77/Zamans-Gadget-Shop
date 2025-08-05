// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   const fetchProductData = () => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image[0]);
//     }
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }
//     addToCart(productData._id, 'Default');
//     navigate('/place-order');
//   };

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }
//     addToCart(productData._id, 'Default');
//     notifySuccess('Added to cart!');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         <div className="flex flex-col flex-1 gap-4 sm:flex-row">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//             {productData.image.map((imgUrl, idx) => (
//               <img
//                 key={idx}
//                 src={imgUrl}
//                 alt={`Thumbnail ${idx + 1}`}
//                 onClick={() => setImage(imgUrl)}
//                 className={`cursor-pointer rounded-md border ${image === imgUrl ? 'border-orange-500' : 'border-transparent'} flex-shrink-0 w-20 sm:w-full object-cover`}
//                 style={{ aspectRatio: '1 / 1' }}
//               />
//             ))}
//           </div>

//           <div className="relative flex-1 min-w-0">
//             <img
//               src={image}
//               alt="Main product"
//               className="w-full h-auto rounded-md object-contain max-h-[500px]"
//             />
//             {productData.soldOut && (
//               <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//                 SOLD OUT
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           <div className="flex items-center gap-1 mt-2">
//             {[...Array(4)].map((_, i) => (
//               <img key={i} src={assets.star_icon} alt="Star" className="w-5 h-5" />
//             ))}
//             <img src={assets.star_dull_icon} alt="Star dull" className="w-5 h-5" />
//             <p className="pl-2 text-sm text-gray-600">(122)</p>
//           </div>

//           <p className="mt-5 text-3xl font-bold">
//             {currency}{productData.price}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//           <p className="px-5 py-3 text-sm cursor-pointer">Reviews (122)</p>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors).
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   // New states for variant & color
//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedColor, setSelectedColor] = useState('');

//   const fetchProductData = () => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image[0]);

//       // Optionally initialize variant and color if you want
//       setSelectedVariant(null);
//       setSelectedColor('');
//     }
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }
//     if (!selectedVariant || !selectedColor) {
//       notifyError('Please select a variant and color');
//       return;
//     }
//     // Prepare variant info to send with cart
//     const variantInfo = {
//       variant: selectedVariant.variant,
//       color: selectedColor,
//       price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//     };
//     addToCart(productData._id, variantInfo);
//     notifySuccess('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }
//     if (!selectedVariant || !selectedColor) {
//       notifyError('Please select a variant and color');
//       return;
//     }
//     const variantInfo = {
//       variant: selectedVariant.variant,
//       color: selectedColor,
//       price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//     };
//     addToCart(productData._id, variantInfo);
//     navigate('/place-order');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         <div className="flex flex-col flex-1 gap-4 sm:flex-row">
//           <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//             {productData.image.map((imgUrl, idx) => (
//               <img
//                 key={idx}
//                 src={imgUrl}
//                 alt={`Thumbnail ${idx + 1}`}
//                 onClick={() => setImage(imgUrl)}
//                 className={`cursor-pointer rounded-md border ${
//                   image === imgUrl ? 'border-orange-500' : 'border-transparent'
//                 } flex-shrink-0 w-20 sm:w-full object-cover`}
//                 style={{ aspectRatio: '1 / 1' }}
//               />
//             ))}
//           </div>

//           <div className="relative flex-1 min-w-0">
//             <img
//               src={image}
//               alt="Main product"
//               className="w-full h-auto rounded-md object-contain max-h-[500px]"
//             />
//             {productData.soldOut && (
//               <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//                 SOLD OUT
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           <div className="flex items-center gap-1 mt-2">
//             {[...Array(4)].map((_, i) => (
//               <img key={i} src={assets.star_icon} alt="Star" className="w-5 h-5" />
//             ))}
//             <img src={assets.star_dull_icon} alt="Star dull" className="w-5 h-5" />
//             <p className="pl-2 text-sm text-gray-600">(122)</p>
//           </div>

//           {/* Variant Selection */}
//           {productData.variants && productData.variants.length > 0 && (
//             <div className="mt-6">
//               <label className="font-medium">Variant:</label>
//               <div className="flex flex-wrap gap-3 mt-2">
//                 {productData.variants.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setSelectedVariant(item);
//                       setSelectedColor(''); // reset color when variant changes
//                     }}
//                     className={`px-4 py-2 rounded border ${
//                       selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'
//                     }`}
//                   >
//                     {item.variant}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Color Selection */}
//           {selectedVariant && (
//             <div className="mt-4">
//               <label className="font-medium">Color:</label>
//               <div className="flex gap-3 mt-2">
//                 {/* Support if color is a string or an array */}
//                 {[].concat(selectedVariant.color).map((clr, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setSelectedColor(clr)}
//                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
//                       selectedColor === clr ? 'border-black' : 'border-gray-300'
//                     }`}
//                     style={{ backgroundColor: clr }}
//                     title={clr}
//                   ></button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Price display */}
//           <p className="mt-5 text-3xl font-bold">
//             {selectedVariant ? (
//               selectedVariant.offerPrice ? (
//                 <>
//                   <span className="mr-2 text-gray-400 line-through">
//                     {currency}{selectedVariant.regularPrice}
//                   </span>
//                   <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
//                 </>
//               ) : (
//                 <span>{currency}{selectedVariant.regularPrice}</span>
//               )
//             ) : (
//               <span>{currency}{productData.price}</span>
//             )}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//           <p className="px-5 py-3 text-sm cursor-pointer">Reviews (122)</p>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors).
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';  // Your cart & products context
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedColor, setSelectedColor] = useState('');

//   useEffect(() => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image?.[0] || '');

//       setSelectedVariant(null);
//       setSelectedColor('');
//     }
//   }, [productId, products]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }
//     if (!selectedVariant || !selectedColor) {
//       notifyError('Please select a variant and color');
//       return;
//     }
//     const variantInfo = {
//       variant: selectedVariant.variant,
//       color: selectedColor,
//       price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//     };
//     addToCart(productData._id, variantInfo);
//     notifySuccess('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }
//     if (!selectedVariant || !selectedColor) {
//       notifyError('Please select a variant and color');
//       return;
//     }
//     const variantInfo = {
//       variant: selectedVariant.variant,
//       color: selectedColor,
//       price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//     };
//     addToCart(productData._id, variantInfo);
//     navigate('/place-order');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         {/* Images thumbnails */}
//         <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {productData.image.map((imgUrl, idx) => (
//             <img
//               key={idx}
//               src={imgUrl}
//               alt={`Thumbnail ${idx + 1}`}
//               onClick={() => setImage(imgUrl)}
//               className={`cursor-pointer rounded-md border ${
//                 image === imgUrl ? 'border-orange-500' : 'border-transparent'
//               } flex-shrink-0 w-20 sm:w-full object-cover`}
//               style={{ aspectRatio: '1 / 1' }}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 min-w-0">
//           <img
//             src={image}
//             alt="Main product"
//             className="w-full h-auto rounded-md object-contain max-h-[500px]"
//           />
//           {productData.soldOut && (
//             <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//               SOLD OUT
//             </div>
//           )}
//         </div>

//         {/* Product Info & Variant selectors */}
//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           <div className="flex items-center gap-1 mt-2">
//             {[...Array(4)].map((_, i) => (
//               <img key={i} src={assets.star_icon} alt="Star" className="w-5 h-5" />
//             ))}
//             <img src={assets.star_dull_icon} alt="Star dull" className="w-5 h-5" />
//             <p className="pl-2 text-sm text-gray-600">(122)</p>
//           </div>

//           {/* Variant Selection */}
//           {productData.variants && productData.variants.length > 0 && (
//             <div className="mt-6">
//               <label className="font-medium">Variant:</label>
//               <div className="flex flex-wrap gap-3 mt-2">
//                 {productData.variants.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setSelectedVariant(item);
//                       setSelectedColor(''); // reset color on variant change
//                     }}
//                     className={`px-4 py-2 rounded border ${
//                       selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'
//                     }`}
//                   >
//                     {item.variant}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Color Selection */}
//           {selectedVariant && (
//             <div className="mt-4">
//               <label className="font-medium">Color:</label>
//               <div className="flex gap-3 mt-2">
//                 {[].concat(selectedVariant.color).map((clr, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setSelectedColor(clr)}
//                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
//                       selectedColor === clr ? 'border-black' : 'border-gray-300'
//                     }`}
//                     style={{ backgroundColor: clr }}
//                     title={clr}
//                   ></button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Price Display */}
//           <p className="mt-5 text-3xl font-bold">
//             {selectedVariant ? (
//               selectedVariant.offerPrice ? (
//                 <>
//                   <span className="mr-2 text-gray-400 line-through">
//                     {currency}{selectedVariant.regularPrice}
//                   </span>
//                   <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
//                 </>
//               ) : (
//                 <span>{currency}{selectedVariant.regularPrice}</span>
//               )
//             ) : (
//               <span>{currency}{productData.price}</span>
//             )}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//           <p className="px-5 py-3 text-sm cursor-pointer">Reviews (122)</p>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors).
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';  // Your cart & products context
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedColor, setSelectedColor] = useState('');

//   useEffect(() => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image?.[0] || 'fallback-image-url'); // Added fallback image if no product image
//       setSelectedVariant(null);
//       setSelectedColor('');
//     }

//     // Cleanup state on component unmount or product change
//     return () => {
//       setSelectedVariant(null);
//       setSelectedColor('');
//     };
//   }, [productId, products]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }
//     if (!selectedVariant || !selectedColor) {
//       notifyError('Please select a variant and color');
//       return;
//     }
//     const variantInfo = {
//       variant: selectedVariant.variant,
//       color: selectedColor,
//       price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//     };
//     addToCart(productData._id, variantInfo);
//     notifySuccess('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }
//     if (!selectedVariant || !selectedColor) {
//       notifyError('Please select a variant and color');
//       return;
//     }
//     const variantInfo = {
//       variant: selectedVariant.variant,
//       color: selectedColor,
//       price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//     };
//     addToCart(productData._id, variantInfo);
//     navigate('/place-order');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         {/* Images thumbnails */}
//         <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {productData.image.map((imgUrl, idx) => (
//             <img
//               key={idx}
//               src={imgUrl}
//               alt={`Thumbnail ${idx + 1}`}
//               onClick={() => setImage(imgUrl)}
//               className={`cursor-pointer rounded-md border ${
//                 image === imgUrl ? 'border-orange-500' : 'border-transparent'
//               } flex-shrink-0 w-20 sm:w-full object-cover`}
//               style={{ aspectRatio: '1 / 1' }}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 min-w-0">
//           <img
//             src={image}
//             alt="Main product"
//             className="w-full h-auto rounded-md object-contain max-h-[500px]"
//           />
//           {productData.soldOut && (
//             <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//               SOLD OUT
//             </div>
//           )}
//         </div>

//         {/* Product Info & Variant selectors */}
//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           <div className="flex items-center gap-1 mt-2">
//             {[...Array(4)].map((_, i) => (
//               <img key={i} src={assets.star_icon} alt="Star" className="w-5 h-5" />
//             ))}
//             <img src={assets.star_dull_icon} alt="Star dull" className="w-5 h-5" />
//             <p className="pl-2 text-sm text-gray-600">(122)</p>
//           </div>

//           {/* Variant Selection */}
//           {productData.variants && productData.variants.length > 0 && (
//             <div className="mt-6">
//               <label className="font-medium">Variant:</label>
//               <div className="flex flex-wrap gap-3 mt-2">
//                 {productData.variants.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setSelectedVariant(item);
//                       setSelectedColor(''); // reset color on variant change
//                     }}
//                     className={`px-4 py-2 rounded border ${
//                       selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'
//                     }`}
//                   >
//                     {item.variant}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Color Selection */}
//           {selectedVariant && (
//             <div className="mt-4">
//               <label className="font-medium">Color:</label>
//               <div className="flex gap-3 mt-2">
//                 {[].concat(selectedVariant.color).map((clr, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setSelectedColor(clr)}
//                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
//                       selectedColor === clr ? 'border-black' : 'border-gray-300'
//                     }`}
//                     style={{ backgroundColor: clr }}
//                     title={clr}
//                   ></button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Price Display */}
//           <p className="mt-5 text-3xl font-bold">
//             {selectedVariant ? (
//               selectedVariant.offerPrice ? (
//                 <>
//                   <span className="mr-2 text-gray-400 line-through">
//                     {currency}{selectedVariant.regularPrice}
//                   </span>
//                   <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
//                 </>
//               ) : (
//                 <span>{currency}{selectedVariant.regularPrice}</span>
//               )
//             ) : (
//               <span>{currency}{productData.price}</span>
//             )}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//           <p className="px-5 py-3 text-sm cursor-pointer">Reviews (122)</p>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors).
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext'; // Your cart & products context
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedColor, setSelectedColor] = useState('');

//   useEffect(() => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image?.[0] || 'fallback-image-url'); // Added fallback image if no product image
//       setSelectedVariant(null);
//       setSelectedColor('');
//     }

//     // Cleanup state on component unmount or product change
//     return () => {
//       setSelectedVariant(null);
//       setSelectedColor('');
//     };
//   }, [productId, products]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }
//     if (!selectedVariant || !selectedColor) {
//       notifyError('Please select a variant and color');
//       return;
//     }
//     const variantInfo = {
//       variant: selectedVariant.variant,
//       color: selectedColor,
//       price: selectedVariant.offerPrice || selectedVariant.regularPrice, // Ensure the correct price is passed
//     };
//     addToCart(productData._id, variantInfo); // Passing the variant info to add to cart
//     notifySuccess('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }
//     if (!selectedVariant || !selectedColor) {
//       notifyError('Please select a variant and color');
//       return;
//     }
//     const variantInfo = {
//       variant: selectedVariant.variant,
//       color: selectedColor,
//       price: selectedVariant.offerPrice || selectedVariant.regularPrice, // Ensure the correct price is passed
//     };
//     addToCart(productData._id, variantInfo); // Passing the variant info to add to cart
//     navigate('/place-order');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         {/* Images thumbnails */}
//         <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {productData.image.map((imgUrl, idx) => (
//             <img
//               key={idx}
//               src={imgUrl}
//               alt={`Thumbnail ${idx + 1}`}
//               onClick={() => setImage(imgUrl)}
//               className={`cursor-pointer rounded-md border ${
//                 image === imgUrl ? 'border-orange-500' : 'border-transparent'
//               } flex-shrink-0 w-20 sm:w-full object-cover`}
//               style={{ aspectRatio: '1 / 1' }}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 min-w-0">
//           <img
//             src={image}
//             alt="Main product"
//             className="w-full h-auto rounded-md object-contain max-h-[500px]"
//           />
//           {productData.soldOut && (
//             <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//               SOLD OUT
//             </div>
//           )}
//         </div>

//         {/* Product Info & Variant selectors */}
//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           <div className="flex items-center gap-1 mt-2">
//             {[...Array(4)].map((_, i) => (
//               <img key={i} src={assets.star_icon} alt="Star" className="w-5 h-5" />
//             ))}
//             <img src={assets.star_dull_icon} alt="Star dull" className="w-5 h-5" />
//             <p className="pl-2 text-sm text-gray-600">(122)</p>
//           </div>

//           {/* Variant Selection */}
//           {productData.variants && productData.variants.length > 0 && (
//             <div className="mt-6">
//               <label className="font-medium">Variant:</label>
//               <div className="flex flex-wrap gap-3 mt-2">
//                 {productData.variants.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setSelectedVariant(item);
//                       setSelectedColor(''); // reset color on variant change
//                     }}
//                     className={`px-4 py-2 rounded border ${
//                       selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'
//                     }`}
//                   >
//                     {item.variant}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Color Selection */}
//           {selectedVariant && (
//             <div className="mt-4">
//               <label className="font-medium">Color:</label>
//               <div className="flex gap-3 mt-2">
//                 {[].concat(selectedVariant.color).map((clr, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setSelectedColor(clr)}
//                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
//                       selectedColor === clr ? 'border-black' : 'border-gray-300'
//                     }`}
//                     style={{ backgroundColor: clr }}
//                     title={clr}
//                   ></button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Price Display */}
//           <p className="mt-5 text-3xl font-bold">
//             {selectedVariant ? (
//               selectedVariant.offerPrice ? (
//                 <>
//                   <span className="mr-2 text-gray-400 line-through">
//                     {currency}{selectedVariant.regularPrice}
//                   </span>
//                   <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
//                 </>
//               ) : (
//                 <span>{currency}{selectedVariant.regularPrice}</span>
//               )
//             ) : (
//               <span>{currency}{productData.price}</span>
//             )}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//           <p className="px-5 py-3 text-sm cursor-pointer">Reviews (122)</p>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors).
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext'; // Your cart & products context
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedColor, setSelectedColor] = useState('');

//   useEffect(() => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image?.[0] || 'fallback-image-url'); // Added fallback image if no product image
//       setSelectedVariant(null);
//       setSelectedColor('');
//     }

//     // Cleanup state on component unmount or product change
//     return () => {
//       setSelectedVariant(null);
//       setSelectedColor('');
//     };
//   }, [productId, products]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }
//     if (!selectedVariant || !selectedColor) {
//       notifyError('Please select a variant and color');
//       return;
//     }
//     const variantInfo = {
//       variant: selectedVariant.variant,
//       color: selectedColor,
//       price: selectedVariant.offerPrice || selectedVariant.regularPrice, // Ensure the correct price is passed
//     };
//     addToCart(productData._id, variantInfo); // Passing the variant info to add to cart
//     notifySuccess('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }
//     if (!selectedVariant || !selectedColor) {
//       notifyError('Please select a variant and color');
//       return;
//     }
//     const variantInfo = {
//       variant: selectedVariant.variant,
//       color: selectedColor,
//       price: selectedVariant.offerPrice || selectedVariant.regularPrice, // Ensure the correct price is passed
//     };
//     addToCart(productData._id, variantInfo); // Passing the variant info to add to cart
//     navigate('/place-order');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         {/* Images thumbnails */}
//         <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {productData.image.map((imgUrl, idx) => (
//             <img
//               key={idx}
//               src={imgUrl}
//               alt={`Thumbnail ${idx + 1}`}
//               onClick={() => setImage(imgUrl)}
//               className={`cursor-pointer rounded-md border ${image === imgUrl ? 'border-orange-500' : 'border-transparent'} flex-shrink-0 w-20 sm:w-full object-cover`}
//               style={{ aspectRatio: '1 / 1' }}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 min-w-0">
//           <img
//             src={image}
//             alt="Main product"
//             className="w-full h-auto rounded-md object-contain max-h-[500px]"
//           />
//           {productData.soldOut && (
//             <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//               SOLD OUT
//             </div>
//           )}
//         </div>

//         {/* Product Info & Variant selectors */}
//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           <div className="flex items-center gap-1 mt-2">
//             {[...Array(4)].map((_, i) => (
//               <img key={i} src={assets.star_icon} alt="Star" className="w-5 h-5" />
//             ))}
//             <img src={assets.star_dull_icon} alt="Star dull" className="w-5 h-5" />
//             <p className="pl-2 text-sm text-gray-600">(122)</p>
//           </div>

//           {/* Variant Selection */}
//           {productData.variants && productData.variants.length > 0 && (
//             <div className="mt-6">
//               <label className="font-medium">Variant:</label>
//               <div className="flex flex-wrap gap-3 mt-2">
//                 {productData.variants.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setSelectedVariant(item);
//                       setSelectedColor(''); // reset color on variant change
//                     }}
//                     className={`px-4 py-2 rounded border ${selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'}`}
//                   >
//                     {item.variant}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Color Selection */}
//           {selectedVariant && (
//             <div className="mt-4">
//               <label className="font-medium">Color:</label>
//               <div className="flex gap-3 mt-2">
//                 {[].concat(selectedVariant.color).map((clr, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setSelectedColor(clr)}
//                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === clr ? 'border-black' : 'border-gray-300'}`}
//                     style={{ backgroundColor: clr }}
//                     title={clr}
//                   ></button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Price Display */}
//           <p className="mt-5 text-3xl font-bold">
//             {selectedVariant ? (
//               selectedVariant.offerPrice ? (
//                 <>
//                   <span className="mr-2 text-gray-400 line-through">
//                     {currency}{selectedVariant.regularPrice}
//                   </span>
//                   <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
//                 </>
//               ) : (
//                 <span>{currency}{selectedVariant.regularPrice}</span>
//               )
//             ) : (
//               <span>{currency}{productData.price}</span>
//             )}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//           <p className="px-5 py-3 text-sm cursor-pointer">Reviews (122)</p>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors).
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;




// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';  // Your cart & products context
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedColor, setSelectedColor] = useState('');

//   useEffect(() => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image?.[0] || '');

//       setSelectedVariant(null);
//       setSelectedColor('');
//     }
//   }, [productId, products]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }
//     if (!selectedVariant || !selectedColor) {
//       notifyError('Please select a variant and color');
//       return;
//     }
//     const variantInfo = {
//       variant: selectedVariant.variant,
//       color: selectedColor,
//       price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//     };
//     addToCart(productData._id, variantInfo);
//     notifySuccess('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }
//     if (!selectedVariant || !selectedColor) {
//       notifyError('Please select a variant and color');
//       return;
//     }
//     const variantInfo = {
//       variant: selectedVariant.variant,
//       color: selectedColor,
//       price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//     };
//     addToCart(productData._id, variantInfo);
//     navigate('/place-order');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         {/* Images thumbnails */}
//         <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {productData.image.map((imgUrl, idx) => (
//             <img
//               key={idx}
//               src={imgUrl}
//               alt={`Thumbnail ${idx + 1}`}
//               onClick={() => setImage(imgUrl)}
//               className={`cursor-pointer rounded-md border ${
//                 image === imgUrl ? 'border-orange-500' : 'border-transparent'
//               } flex-shrink-0 w-20 sm:w-full object-cover`}
//               style={{ aspectRatio: '1 / 1' }}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 min-w-0">
//           <img
//             src={image}
//             alt="Main product"
//             className="w-full h-auto rounded-md object-contain max-h-[500px]"
//           />
//           {productData.soldOut && (
//             <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//               SOLD OUT
//             </div>
//           )}
//         </div>

//         {/* Product Info & Variant selectors */}
//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           <div className="flex items-center gap-1 mt-2">
//             {[...Array(4)].map((_, i) => (
//               <img key={i} src={assets.star_icon} alt="Star" className="w-5 h-5" />
//             ))}
//             <img src={assets.star_dull_icon} alt="Star dull" className="w-5 h-5" />
//             <p className="pl-2 text-sm text-gray-600">(122)</p>
//           </div>

//           {/* Variant Selection */}
//           {productData.variants && productData.variants.length > 0 && (
//             <div className="mt-6">
//               <label className="font-medium">Variant:</label>
//               <div className="flex flex-wrap gap-3 mt-2">
//                 {productData.variants.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setSelectedVariant(item);
//                       setSelectedColor(''); // reset color on variant change
//                     }}
//                     className={`px-4 py-2 rounded border ${
//                       selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'
//                     }`}
//                   >
//                     {item.variant}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Color Selection */}
//           {selectedVariant && (
//             <div className="mt-4">
//               <label className="font-medium">Color:</label>
//               <div className="flex gap-3 mt-2">
//                 {[].concat(selectedVariant.color).map((clr, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setSelectedColor(clr)}
//                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
//                       selectedColor === clr ? 'border-black' : 'border-gray-300'
//                     }`}
//                     style={{ backgroundColor: clr }}
//                     title={clr}
//                   ></button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Price Display */}
//           <p className="mt-5 text-3xl font-bold">
//             {selectedVariant ? (
//               selectedVariant.offerPrice ? (
//                 <>
//                   <span className="mr-2 text-gray-400 line-through">
//                     {currency}{selectedVariant.regularPrice}
//                   </span>
//                   <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
//                 </>
//               ) : (
//                 <span>{currency}{selectedVariant.regularPrice}</span>
//               )
//             ) : (
//               <span>{currency}{productData.price}</span>
//             )}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//           <p className="px-5 py-3 text-sm cursor-pointer">Reviews (122)</p>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors).
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;






// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext'; 
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedColor, setSelectedColor] = useState('');

//   useEffect(() => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image?.[0] || '');

//       setSelectedVariant(null);
//       setSelectedColor('');
//     }
//   }, [productId, products]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const hasVariants = productData?.variants && productData.variants.length > 0;

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor,
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : null;

//     addToCart(productData._id, variantInfo);
//     notifySuccess('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor,
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : null;

//     addToCart(productData._id, variantInfo);
//     navigate('/place-order');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         {/* Images thumbnails */}
//         <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {productData.image.map((imgUrl, idx) => (
//             <img
//               key={idx}
//               src={imgUrl}
//               alt={`Thumbnail ${idx + 1}`}
//               onClick={() => setImage(imgUrl)}
//               className={`cursor-pointer rounded-md border ${
//                 image === imgUrl ? 'border-orange-500' : 'border-transparent'
//               } flex-shrink-0 w-20 sm:w-full object-cover`}
//               style={{ aspectRatio: '1 / 1' }}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 min-w-0">
//           <img
//             src={image}
//             alt="Main product"
//             className="w-full h-auto rounded-md object-contain max-h-[500px]"
//           />
//           {productData.soldOut && (
//             <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//               SOLD OUT
//             </div>
//           )}
//         </div>

//         {/* Product Info & Variant selectors */}
//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           <div className="flex items-center gap-1 mt-2">
//             {[...Array(4)].map((_, i) => (
//               <img key={i} src={assets.star_icon} alt="Star" className="w-5 h-5" />
//             ))}
//             <img src={assets.star_dull_icon} alt="Star dull" className="w-5 h-5" />
//             <p className="pl-2 text-sm text-gray-600">(122)</p>
//           </div>

//           {/* Variant Selection */}
//           {hasVariants && (
//             <div className="mt-6">
//               <label className="font-medium">Variant:</label>
//               <div className="flex flex-wrap gap-3 mt-2">
//                 {productData.variants.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setSelectedVariant(item);
//                       setSelectedColor(''); // reset color on variant change
//                     }}
//                     className={`px-4 py-2 rounded border ${
//                       selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'
//                     }`}
//                   >
//                     {item.variant}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Color Selection */}
//           {hasVariants && selectedVariant && (
//             <div className="mt-4">
//               <label className="font-medium">Color:</label>
//               <div className="flex gap-3 mt-2">
//                 {[].concat(selectedVariant.color).map((clr, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setSelectedColor(clr)}
//                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
//                       selectedColor === clr ? 'border-black' : 'border-gray-300'
//                     }`}
//                     style={{ backgroundColor: clr }}
//                     title={clr}
//                   ></button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Price Display */}
//           <p className="mt-5 text-3xl font-bold">
//             {hasVariants && selectedVariant ? (
//               selectedVariant.offerPrice ? (
//                 <>
//                   <span className="mr-2 text-gray-400 line-through">
//                     {currency}{selectedVariant.regularPrice}
//                   </span>
//                   <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
//                 </>
//               ) : (
//                 <span>{currency}{selectedVariant.regularPrice}</span>
//               )
//             ) : (
//               <span>{currency}{productData.price}</span>
//             )}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//           <p className="px-5 py-3 text-sm cursor-pointer">Reviews (122)</p>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors).
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';  // Your cart & products context
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedColor, setSelectedColor] = useState('');

//   useEffect(() => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image?.[0] || '');

//       setSelectedVariant(null);
//       setSelectedColor('');
//     }
//   }, [productId, products]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const hasVariants = productData?.variants && productData.variants.length > 0;

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor,
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: '',
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     notifySuccess('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor,
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: '',
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     navigate('/place-order');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         {/* Images thumbnails */}
//         <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {productData.image.map((imgUrl, idx) => (
//             <img
//               key={idx}
//               src={imgUrl}
//               alt={`Thumbnail ${idx + 1}`}
//               onClick={() => setImage(imgUrl)}
//               className={`cursor-pointer rounded-md border ${
//                 image === imgUrl ? 'border-orange-500' : 'border-transparent'
//               } flex-shrink-0 w-20 sm:w-full object-cover`}
//               style={{ aspectRatio: '1 / 1' }}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 min-w-0">
//           <img
//             src={image}
//             alt="Main product"
//             className="w-full h-auto rounded-md object-contain max-h-[500px]"
//           />
//           {productData.soldOut && (
//             <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//               SOLD OUT
//             </div>
//           )}
//         </div>

//         {/* Product Info & Variant selectors */}
//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           {/* <div className="flex items-center gap-1 mt-2">
//             {[...Array(4)].map((_, i) => (
//               <img key={i} src={assets.star_icon} alt="Star" className="w-5 h-5" />
//             ))}
//             <img src={assets.star_dull_icon} alt="Star dull" className="w-5 h-5" />
//             <p className="pl-2 text-sm text-gray-600">(122)</p>
//           </div> */}

//           {/* Variant Selection */}
//           {hasVariants && (
//             <div className="mt-6">
//               <label className="font-medium">Variant:</label>
//               <div className="flex flex-wrap gap-3 mt-2">
//                 {productData.variants.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setSelectedVariant(item);
//                       setSelectedColor(''); // reset color on variant change
//                     }}
//                     className={`px-4 py-2 rounded border ${
//                       selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'
//                     }`}
//                   >
//                     {item.variant}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Color Selection */}
//           {hasVariants && selectedVariant && (
//             <div className="mt-4">
//               <label className="font-medium">Color:</label>
//               <div className="flex gap-3 mt-2">
//                 {[].concat(selectedVariant.color).map((clr, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setSelectedColor(clr)}
//                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
//                       selectedColor === clr ? 'border-black' : 'border-gray-300'
//                     }`}
//                     style={{ backgroundColor: clr }}
//                     title={clr}
//                   ></button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Price Display */}
//           <p className="mt-5 text-3xl font-bold">
//             {hasVariants && selectedVariant ? (
//               selectedVariant.offerPrice ? (
//                 <>
//                   <span className="mr-2 text-gray-400 line-through">
//                     {currency}{selectedVariant.regularPrice}
//                   </span>
//                   <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
//                 </>
//               ) : (
//                 <span>{currency}{selectedVariant.regularPrice}</span>
//               )
//             ) : (
//               <span>{currency}{productData.price}</span>
//             )}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors).
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';  // Your cart & products context
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedColor, setSelectedColor] = useState('');

//   useEffect(() => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image?.[0] || '');

//       setSelectedVariant(null);
//       setSelectedColor('');
//     }
//   }, [productId, products]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const hasVariants = productData?.variants && productData.variants.length > 0;

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor,
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: '',
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     notifySuccess('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor,
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: '',
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     navigate('/place-order');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         {/* Images thumbnails */}
//         <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {productData.image.map((imgUrl, idx) => (
//             <img
//               key={idx}
//               src={imgUrl}
//               alt={`Thumbnail ${idx + 1}`}
//               onClick={() => setImage(imgUrl)}
//               className={`cursor-pointer rounded-md border ${image === imgUrl ? 'border-orange-500' : 'border-transparent'} flex-shrink-0 w-20 sm:w-full object-cover`}
//               style={{ aspectRatio: '1 / 1' }}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 min-w-0">
//           <img
//             src={image}
//             alt="Main product"
//             className="w-full h-auto rounded-md object-contain max-h-[500px]"
//           />
//           {productData.soldOut && (
//             <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//               SOLD OUT
//             </div>
//           )}
//         </div>

//         {/* Product Info & Variant selectors */}
//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           {/* Variant Selection */}
//           {hasVariants && (
//             <div className="mt-6">
//               <label className="font-medium">Variant:</label>
//               <div className="flex flex-wrap gap-3 mt-2">
//                 {productData.variants.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setSelectedVariant(item);
//                       setSelectedColor(''); // reset color on variant change
//                     }}
//                     className={`px-4 py-2 rounded border ${selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'}`}
//                   >
//                     {item.variant}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Color Selection */}
//           {hasVariants && selectedVariant && (
//             <div className="mt-4">
//               <label className="font-medium">Color:</label>
//               <div className="flex gap-3 mt-2">
//                 {selectedVariant.colors.map((clr, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setSelectedColor(clr.code)}  // Using clr.code to store color code (hex or rgb)
//                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === clr.code ? 'border-black' : 'border-gray-300'}`}
//                     style={{ backgroundColor: clr.code }} // Dynamically apply background color
//                     title={clr.name}
//                   ></button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Price Display */}
//           <p className="mt-5 text-3xl font-bold">
//             {hasVariants && selectedVariant ? (
//               selectedVariant.offerPrice ? (
//                 <>
//                   <span className="mr-2 text-gray-400 line-through">{currency}{selectedVariant.regularPrice}</span>
//                   <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
//                 </>
//               ) : (
//                 <span>{currency}{selectedVariant.regularPrice}</span>
//               )
//             ) : (
//               <span>{currency}{productData.price}</span>
//             )}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';  // Your cart & products context
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedColor, setSelectedColor] = useState('');

//   useEffect(() => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image?.[0] || '');

//       setSelectedVariant(null);
//       setSelectedColor('');
//     }
//   }, [productId, products]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const hasVariants = productData?.variants && productData.variants.length > 0;

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor,
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: '',
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     notifySuccess('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor,
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: '',
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     navigate('/place-order');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         {/* Images thumbnails */}
//         <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {productData.image.map((imgUrl, idx) => (
//             <img
//               key={idx}
//               src={imgUrl}
//               alt={`Thumbnail ${idx + 1}`}
//               onClick={() => setImage(imgUrl)}
//               className={`cursor-pointer rounded-md border ${image === imgUrl ? 'border-orange-500' : 'border-transparent'} flex-shrink-0 w-20 sm:w-full object-cover`}
//               style={{ aspectRatio: '1 / 1' }}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 min-w-0">
//           <img
//             src={image}
//             alt="Main product"
//             className="w-full h-auto rounded-md object-contain max-h-[500px]"
//           />
//           {productData.soldOut && (
//             <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//               SOLD OUT
//             </div>
//           )}
//         </div>

//         {/* Product Info & Variant selectors */}
//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           {/* Variant Selection */}
//           {hasVariants && (
//             <div className="mt-6">
//               <label className="font-medium">Variant:</label>
//               <div className="flex flex-wrap gap-3 mt-2">
//                 {productData.variants.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setSelectedVariant(item);
//                       setSelectedColor(''); // reset color on variant change
//                     }}
//                     className={`px-4 py-2 rounded border ${selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'}`}
//                   >
//                     {item.variant}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Color Selection */}
//           {hasVariants && selectedVariant && (
//             <div className="mt-4">
//               <label className="font-medium">Color:</label>
//               <div className="flex gap-3 mt-2">
//                 {/* Loop through the colors array of the selected variant */}
//                 {selectedVariant.colors.map((clr, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setSelectedColor(clr)}
//                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === clr ? 'border-black' : 'border-gray-300'}`}
//                     style={{ backgroundColor: clr }} // This will apply the actual color as the background
//                     title={clr} // Optionally show color code as a tooltip
//                   ></button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Price Display */}
//           <p className="mt-5 text-3xl font-bold">
//             {hasVariants && selectedVariant ? (
//               selectedVariant.offerPrice ? (
//                 <>
//                   <span className="mr-2 text-gray-400 line-through">
//                     {currency}{selectedVariant.regularPrice}
//                   </span>
//                   <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
//                 </>
//               ) : (
//                 <span>{currency}{selectedVariant.regularPrice}</span>
//               )
//             ) : (
//               <span>{currency}{productData.price}</span>
//             )}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors).
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';  // Your cart & products context
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedColor, setSelectedColor] = useState('');

//   useEffect(() => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image?.[0] || '');

//       setSelectedVariant(null);
//       setSelectedColor('');
//     }
//   }, [productId, products]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const hasVariants = productData?.variants && productData.variants.length > 0;

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor,
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: '',
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     notifySuccess('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor,
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: '',
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     navigate('/place-order');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         {/* Images thumbnails */}
//         <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {productData.image.map((imgUrl, idx) => (
//             <img
//               key={idx}
//               src={imgUrl}
//               alt={`Thumbnail ${idx + 1}`}
//               onClick={() => setImage(imgUrl)}
//               className={`cursor-pointer rounded-md border ${image === imgUrl ? 'border-orange-500' : 'border-transparent'} flex-shrink-0 w-20 sm:w-full object-cover`}
//               style={{ aspectRatio: '1 / 1' }}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 min-w-0">
//           <img
//             src={image}
//             alt="Main product"
//             className="w-full h-auto rounded-md object-contain max-h-[500px]"
//           />
//           {productData.soldOut && (
//             <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//               SOLD OUT
//             </div>
//           )}
//         </div>

//         {/* Product Info & Variant selectors */}
//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           {/* Variant Selection */}
//           {hasVariants && (
//             <div className="mt-6">
//               <label className="font-medium">Variant:</label>
//               <div className="flex flex-wrap gap-3 mt-2">
//                 {productData.variants.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setSelectedVariant(item);
//                       setSelectedColor(''); // reset color on variant change
//                     }}
//                     className={`px-4 py-2 rounded border ${selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'}`}
//                   >
//                     {item.variant}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Color Selection */}
//           {hasVariants && selectedVariant && (
//             <div className="mt-4">
//               <label className="font-medium">Color:</label>
//               <div className="flex gap-3 mt-2">
//                 {/* Loop through the colors array of the selected variant */}
//                 {selectedVariant.colors.map((clr, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setSelectedColor(clr.name)}  // Set color name
//                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor === clr.name ? 'border-black' : 'border-gray-300'}`}
//                     style={{ backgroundColor: clr.code }}  // Apply actual color code
//                     title={clr.name}  // Optionally show color name as a tooltip
//                   ></button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Price Display */}
//           <p className="mt-5 text-3xl font-bold">
//             {hasVariants && selectedVariant ? (
//               selectedVariant.offerPrice ? (
//                 <>
//                   <span className="mr-2 text-gray-400 line-through">
//                     {currency}{selectedVariant.regularPrice}
//                   </span>
//                   <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
//                 </>
//               ) : (
//                 <span>{currency}{selectedVariant.regularPrice}</span>
//               )
//             ) : (
//               <span>{currency}{productData.price}</span>
//             )}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors).
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;

// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';  // Your cart & products context
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);

//   useEffect(() => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image?.[0] || '');

//       setSelectedVariant(null);
//       setSelectedColor(null);
//     }
//   }, [productId, products]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const hasVariants = productData?.variants && productData.variants.length > 0;

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor,  // full color object with name + code
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: null,
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     notifySuccess('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor,  // full color object with name + code
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: null,
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     navigate('/place-order');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         {/* Images thumbnails */}
//         <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {productData.image.map((imgUrl, idx) => (
//             <img
//               key={idx}
//               src={imgUrl}
//               alt={`Thumbnail ${idx + 1}`}
//               onClick={() => setImage(imgUrl)}
//               className={`cursor-pointer rounded-md border ${image === imgUrl ? 'border-orange-500' : 'border-transparent'} flex-shrink-0 w-20 sm:w-full object-cover`}
//               style={{ aspectRatio: '1 / 1' }}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 min-w-0">
//           <img
//             src={image}
//             alt="Main product"
//             className="w-full h-auto rounded-md object-contain max-h-[500px]"
//           />
//           {productData.soldOut && (
//             <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//               SOLD OUT
//             </div>
//           )}
//         </div>

//         {/* Product Info & Variant selectors */}
//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           {/* Variant Selection */}
//           {hasVariants && (
//             <div className="mt-6">
//               <label className="font-medium">Variant:</label>
//               <div className="flex flex-wrap gap-3 mt-2">
//                 {productData.variants.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setSelectedVariant(item);
//                       setSelectedColor(null); // reset color on variant change
//                     }}
//                     className={`px-4 py-2 rounded border ${selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'}`}
//                   >
//                     {item.variant}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Color Selection */}
//           {hasVariants && selectedVariant && (
//             <div className="mt-4">
//               <label className="font-medium">Color:</label>
//               <div className="flex gap-3 mt-2">
//                 {selectedVariant.colors.map((clr, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setSelectedColor(clr)}
//                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
//                       selectedColor?.name === clr.name ? 'border-black' : 'border-gray-300'
//                     }`}
//                     style={{ backgroundColor: clr.code }}
//                     title={clr.name}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Price Display */}
//           <p className="mt-5 text-3xl font-bold">
//             {hasVariants && selectedVariant ? (
//               selectedVariant.offerPrice ? (
//                 <>
//                   <span className="mr-2 text-gray-400 line-through">
//                     {currency}{selectedVariant.regularPrice}
//                   </span>
//                   <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
//                 </>
//               ) : (
//                 <span>{currency}{selectedVariant.regularPrice}</span>
//               )
//             ) : (
//               <span>{currency}{productData.price}</span>
//             )}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors).
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;

// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';  // Your cart & products context
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null); // store full color object now

//   useEffect(() => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image?.[0] || '');
//       setSelectedVariant(null);
//       setSelectedColor(null);
//     }
//   }, [productId, products]);

//   // Debug: check colors format in console
//   useEffect(() => {
//     if (selectedVariant) {
//       console.log("Selected variant colors:", selectedVariant.colors);
//     }
//   }, [selectedVariant]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const hasVariants = productData?.variants && productData.variants.length > 0;

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor.name,
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: '',
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     notifySuccess('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor.name,
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: '',
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     navigate('/place-order');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         {/* Images thumbnails */}
//         <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {productData.image.map((imgUrl, idx) => (
//             <img
//               key={idx}
//               src={imgUrl}
//               alt={`Thumbnail ${idx + 1}`}
//               onClick={() => setImage(imgUrl)}
//               className={`cursor-pointer rounded-md border ${image === imgUrl ? 'border-orange-500' : 'border-transparent'} flex-shrink-0 w-20 sm:w-full object-cover`}
//               style={{ aspectRatio: '1 / 1' }}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 min-w-0">
//           <img
//             src={image}
//             alt="Main product"
//             className="w-full h-auto rounded-md object-contain max-h-[500px]"
//           />
//           {productData.soldOut && (
//             <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//               SOLD OUT
//             </div>
//           )}
//         </div>

//         {/* Product Info & Variant selectors */}
//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           {/* Variant Selection */}
//           {hasVariants && (
//             <div className="mt-6">
//               <label className="font-medium">Variant:</label>
//               <div className="flex flex-wrap gap-3 mt-2">
//                 {productData.variants.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setSelectedVariant(item);
//                       setSelectedColor(null); // reset color on variant change
//                     }}
//                     className={`px-4 py-2 rounded border ${selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'}`}
//                   >
//                     {item.variant}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Color Selection */}
//           {hasVariants && selectedVariant && (
//             <div className="mt-4">
//               <label className="font-medium">Color:</label>
//               <div className="flex gap-3 mt-2">
//                 {/* Loop through the colors array of the selected variant */}
//                 {selectedVariant.colors.map((clr, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setSelectedColor(clr)}  // Set full color object
//                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${selectedColor?.name === clr.name ? 'border-black' : 'border-gray-300'}`}
//                     style={{ backgroundColor: clr.code.startsWith('#') ? clr.code : `#${clr.code}` }}
//                     title={clr.name}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Price Display */}
//           <p className="mt-5 text-3xl font-bold">
//             {hasVariants && selectedVariant ? (
//               selectedVariant.offerPrice ? (
//                 <>
//                   <span className="mr-2 text-gray-400 line-through">
//                     {currency}{selectedVariant.regularPrice}
//                   </span>
//                   <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
//                 </>
//               ) : (
//                 <span>{currency}{selectedVariant.regularPrice}</span>
//               )
//             ) : (
//               <span>{currency}{productData.price}</span>
//             )}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors).
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;


// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';  // Your cart & products context
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(''); // store color as string now

//   useEffect(() => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image?.[0] || '');
//       setSelectedVariant(null);
//       setSelectedColor('');
//     }
//   }, [productId, products]);

//   // Debug: check colors format in console
//   useEffect(() => {
//     if (selectedVariant) {
//       console.log("Selected variant colors:", selectedVariant.colors);
//     }
//   }, [selectedVariant]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const hasVariants = productData?.variants && productData.variants.length > 0;

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor,
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: '',
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     notifySuccess('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor,
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: '',
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     navigate('/place-order');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         {/* Images thumbnails */}
//         <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {productData.image.map((imgUrl, idx) => (
//             <img
//               key={idx}
//               src={imgUrl}
//               alt={`Thumbnail ${idx + 1}`}
//               onClick={() => setImage(imgUrl)}
//               className={`cursor-pointer rounded-md border ${image === imgUrl ? 'border-orange-500' : 'border-transparent'} flex-shrink-0 w-20 sm:w-full object-cover`}
//               style={{ aspectRatio: '1 / 1' }}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 min-w-0">
//           <img
//             src={image}
//             alt="Main product"
//             className="w-full h-auto rounded-md object-contain max-h-[500px]"
//           />
//           {productData.soldOut && (
//             <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//               SOLD OUT
//             </div>
//           )}
//         </div>

//         {/* Product Info & Variant selectors */}
//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           {/* Variant Selection */}
//           {hasVariants && (
//             <div className="mt-6">
//               <label className="font-medium">Variant:</label>
//               <div className="flex flex-wrap gap-3 mt-2">
//                 {productData.variants.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setSelectedVariant(item);
//                       setSelectedColor(''); // reset color on variant change
//                     }}
//                     className={`px-4 py-2 rounded border ${selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'}`}
//                   >
//                     {item.variant}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Color Selection */}
//           {hasVariants && selectedVariant && (
//             <div className="mt-4">
//               <label className="font-medium">Color:</label>
//               <div className="flex gap-3 mt-2">
//                 {/* Loop through the colors array of the selected variant (strings) */}
//                 {selectedVariant.colors.map((colorName, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setSelectedColor(colorName)}  // set string directly
//                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
//                       selectedColor === colorName ? 'border-black' : 'border-gray-300'
//                     }`}
//                     style={{ backgroundColor: colorName.startsWith('#') ? colorName : colorName }}
//                     title={colorName}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Price Display */}
//           <p className="mt-5 text-3xl font-bold">
//             {hasVariants && selectedVariant ? (
//               selectedVariant.offerPrice ? (
//                 <>
//                   <span className="mr-2 text-gray-400 line-through">
//                     {currency}{selectedVariant.regularPrice}
//                   </span>
//                   <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
//                 </>
//               ) : (
//                 <span>{currency}{selectedVariant.regularPrice}</span>
//               )
//             ) : (
//               <span>{currency}{productData.price}</span>
//             )}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors).
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;

// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';  // Your cart & products context
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addToCart } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');

//   const [selectedVariant, setSelectedVariant] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null); // object now

//   useEffect(() => {
//     const found = products.find((item) => item._id === productId);
//     if (found) {
//       setProductData(found);
//       setImage(found.image?.[0] || '');
//       setSelectedVariant(null);
//       setSelectedColor(null);
//     }
//   }, [productId, products]);

//   const notifyError = (msg) => {
//     toast.error(msg, {
//       position: "top-right",
//       autoClose: 2500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const notifySuccess = (msg) => {
//     toast.success(msg, {
//       position: "top-right",
//       autoClose: 1500,
//       hideProgressBar: false,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//     });
//   };

//   const hasVariants = productData?.variants && productData.variants.length > 0;

//   const handleAddToCart = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor, // whole object {name, code}
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: null,
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     notifySuccess('Added to cart!');
//   };

//   const handleBuyNow = () => {
//     if (productData.soldOut) {
//       notifyError('Sorry, this product is SOLD OUT');
//       return;
//     }

//     if (hasVariants) {
//       if (!selectedVariant) {
//         notifyError('Select Product Variant');
//         return;
//       }
//       if (!selectedColor) {
//         notifyError('Select Product Color');
//         return;
//       }
//     }

//     const variantInfo = hasVariants
//       ? {
//           variant: selectedVariant.variant,
//           color: selectedColor,
//           price: selectedVariant.offerPrice || selectedVariant.regularPrice,
//         }
//       : {
//           variant: 'default',
//           color: null,
//           price: productData.price,
//         };

//     addToCart(productData._id, variantInfo);
//     navigate('/place-order');
//   };

//   if (!productData) return <div className='opacity-0'></div>;

//   return (
//     <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
//       <ToastContainer />

//       <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
//         {/* Images thumbnails */}
//         <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
//           {productData.image.map((imgUrl, idx) => (
//             <img
//               key={idx}
//               src={imgUrl}
//               alt={`Thumbnail ${idx + 1}`}
//               onClick={() => setImage(imgUrl)}
//               className={`cursor-pointer rounded-md border ${image === imgUrl ? 'border-orange-500' : 'border-transparent'} flex-shrink-0 w-20 sm:w-full object-cover`}
//               style={{ aspectRatio: '1 / 1' }}
//             />
//           ))}
//         </div>

//         {/* Main Image */}
//         <div className="relative flex-1 min-w-0">
//           <img
//             src={image}
//             alt="Main product"
//             className="w-full h-auto rounded-md object-contain max-h-[500px]"
//           />
//           {productData.soldOut && (
//             <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
//               SOLD OUT
//             </div>
//           )}
//         </div>

//         {/* Product Info & Variant selectors */}
//         <div className="flex flex-col flex-1 min-w-0">
//           <h1 className="text-2xl font-semibold">{productData.name}</h1>

//           {/* Variant Selection */}
//           {hasVariants && (
//             <div className="mt-6">
//               <label className="font-medium">Variant:</label>
//               <div className="flex flex-wrap gap-3 mt-2">
//                 {productData.variants.map((item, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       setSelectedVariant(item);
//                       setSelectedColor(null); // reset color on variant change
//                     }}
//                     className={`px-4 py-2 rounded border ${selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'}`}
//                   >
//                     {item.variant}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Color Selection */}
//           {hasVariants && selectedVariant && (
//             <div className="mt-4">
//               <label className="font-medium">Color:</label>
//               <div className="flex gap-3 mt-2">
//                 {/* Loop through the colors array of the selected variant (array of objects) */}
//                 {selectedVariant.colors.map((clr, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setSelectedColor(clr)}  // set the whole object {name, code}
//                     className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
//                       selectedColor?.name === clr.name ? 'border-black' : 'border-gray-300'
//                     }`}
//                     style={{ backgroundColor: clr.code }}
//                     title={clr.name}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Price Display */}
//           <p className="mt-5 text-3xl font-bold">
//             {hasVariants && selectedVariant ? (
//               selectedVariant.offerPrice ? (
//                 <>
//                   <span className="mr-2 text-gray-400 line-through">
//                     {currency}{selectedVariant.regularPrice}
//                   </span>
//                   <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
//                 </>
//               ) : (
//                 <span>{currency}{selectedVariant.regularPrice}</span>
//               )
//             ) : (
//               <span>{currency}{productData.price}</span>
//             )}
//           </p>

//           <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

//           <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
//             <button
//               onClick={handleAddToCart}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
//             >
//               ADD TO CART
//             </button>
//             <button
//               onClick={handleBuyNow}
//               disabled={productData.soldOut}
//               className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               BUY NOW
//             </button>
//           </div>

//           <hr className="w-full mt-10 mb-6 border-gray-300" />
//           <div className="max-w-md space-y-1 text-sm text-gray-600">
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       <div className="mt-20 max-w-[900px] mx-auto">
//         <div className="flex border-b border-gray-300">
//           <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
//         </div>
//         <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
//           <p>
//             An e-commerce website is an online platform that facilitates the buying and selling of
//             products or services over the internet. It serves as a virtual marketplace where
//             businesses and individuals can showcase their products, interact with customers, and
//             conduct transactions without the need for a physical presence.
//           </p>
//           <p>
//             E-commerce websites typically display products or services along with detailed
//             descriptions, images, prices, and any available variations (e.g., sizes, colors).
//           </p>
//         </div>
//       </div>

//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
//     </div>
//   );
// };

// export default Product;


import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';  // Your cart & products context
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedColor, setSelectedColor] = useState(''); // store color as string now

  useEffect(() => {
    const found = products.find((item) => item._id === productId);
    if (found) {
      setProductData(found);
      setImage(found.image?.[0] || '');
      setSelectedVariant(null);
      setSelectedColor('');
    }
  }, [productId, products]);

  // Debug: check colors format in console
  useEffect(() => {
    if (selectedVariant) {
      console.log("Selected variant colors:", selectedVariant.colors);
    }
  }, [selectedVariant]);

  const notifyError = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const notifySuccess = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const hasVariants = productData?.variants && productData.variants.length > 0;

  const handleAddToCart = () => {
    if (productData.soldOut) {
      notifyError('Sorry, this product is SOLD OUT');
      return;
    }

    if (hasVariants) {
      if (!selectedVariant) {
        notifyError('Select Product Variant');
        return;
      }
      if (!selectedColor) {
        notifyError('Select Product Color');
        return;
      }
    }

    const variantInfo = hasVariants
      ? {
          variant: selectedVariant.variant,
          color: selectedColor,
          price: selectedVariant.offerPrice || selectedVariant.regularPrice,
        }
      : {
          variant: 'default',
          color: '',
          price: productData.price,
        };

    addToCart(productData._id, variantInfo);
    notifySuccess('Added to cart!');
  };

  const handleBuyNow = () => {
    if (productData.soldOut) {
      notifyError('Sorry, this product is SOLD OUT');
      return;
    }

    if (hasVariants) {
      if (!selectedVariant) {
        notifyError('Select Product Variant');
        return;
      }
      if (!selectedColor) {
        notifyError('Select Product Color');
        return;
      }
    }

    const variantInfo = hasVariants
      ? {
          variant: selectedVariant.variant,
          color: selectedColor,
          price: selectedVariant.offerPrice || selectedVariant.regularPrice,
        }
      : {
          variant: 'default',
          color: '',
          price: productData.price,
        };

    addToCart(productData._id, variantInfo);
    navigate('/place-order');
  };

  if (!productData) return <div className='opacity-0'></div>;

  return (
    <div className="pt-10 mt-16 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
      <ToastContainer />

      <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
        {/* Images thumbnails */}
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          {productData.image.map((imgUrl, idx) => (
            <img
              key={idx}
              src={imgUrl}
              alt={`Thumbnail ${idx + 1}`}
              onClick={() => setImage(imgUrl)}
              className={`cursor-pointer rounded-md border ${image === imgUrl ? 'border-orange-500' : 'border-transparent'} flex-shrink-0 w-20 sm:w-full object-cover`}
              style={{ aspectRatio: '1 / 1' }}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="relative flex-1 min-w-0">
          <img
            src={image}
            alt="Main product"
            className="w-full h-auto rounded-md object-contain max-h-[500px]"
          />
          {productData.soldOut && (
            <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
              SOLD OUT
            </div>
          )}
        </div>

        {/* Product Info & Variant selectors */}
        <div className="flex flex-col flex-1 min-w-0">
          <h1 className="text-2xl font-semibold">{productData.name}</h1>

          {/* Variant Selection */}
          {hasVariants && (
            <div className="mt-6">
              <label className="font-medium">Variant:</label>
              <div className="flex flex-wrap gap-3 mt-2">
                {productData.variants.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedVariant(item);
                      setSelectedColor(''); // reset color on variant change
                    }}
                    className={`px-4 py-2 rounded border ${selectedVariant?.variant === item.variant ? 'bg-orange-600 text-white' : 'bg-white text-black'}`}
                  >
                    {item.variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {hasVariants && selectedVariant && (
            <div className="mt-4">
              <label className="font-medium">Color:</label>
              <div className="flex gap-3 mt-2">
                {/* Loop through the colors array of the selected variant (strings) */}
                {selectedVariant.colors.map((colorName, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(colorName)}  // set string directly
                    className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                      selectedColor === colorName ? 'border-black' : 'border-gray-300'
                    }`}
                    style={{ backgroundColor: colorName.startsWith('#') ? colorName : colorName }}
                    title={colorName}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Price Display */}
          <p className="mt-5 text-3xl font-bold">
            {hasVariants && selectedVariant ? (
              selectedVariant.offerPrice ? (
                <>
                  <span className="mr-2 text-gray-400 line-through">
                    {currency}{selectedVariant.regularPrice}
                  </span>
                  <span className="text-red-600">{currency}{selectedVariant.offerPrice}</span>
                </>
              ) : (
                <span>{currency}{selectedVariant.regularPrice}</span>
              )
            ) : (
              <span>{currency}{productData.price}</span>
            )}
          </p>

          <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

          <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
            <button
              onClick={handleAddToCart}
              disabled={productData.soldOut}
              className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
            >
              ADD TO CART
            </button>
            <button
              onClick={handleBuyNow}
              disabled={productData.soldOut}
              className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              BUY NOW
            </button>
          </div>

          <hr className="w-full mt-10 mb-6 border-gray-300" />
          <div className="max-w-md space-y-1 text-sm text-gray-600">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-[900px] mx-auto">
        <div className="flex border-b border-gray-300">
          <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
        </div>
        <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
          <p>
            An e-commerce website is an online platform that facilitates the buying and selling of
            products or services over the internet. It serves as a virtual marketplace where
            businesses and individuals can showcase their products, interact with customers, and
            conduct transactions without the need for a physical presence.
          </p>
          <p>
            E-commerce websites typically display products or services along with detailed
            descriptions, images, prices, and any available variations (e.g., variants, colors).
          </p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;
