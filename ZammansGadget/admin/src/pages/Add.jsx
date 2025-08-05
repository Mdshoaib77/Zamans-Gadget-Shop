// import React, { useState } from 'react';
// import { assets } from '../assets/assets';
// import axios from 'axios';
// import { backendUrl } from '../App';
// import { toast } from 'react-toastify';

// const Add = ({ token }) => {
//   const [image1, setImage1] = useState(null);
//   const [image2, setImage2] = useState(null);
//   const [image3, setImage3] = useState(null);
//   const [image4, setImage4] = useState(null);

//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [subCategory, setSubCategory] = useState('');
//   const [bestseller, setBestseller] = useState(false);
//   const [soldOut, setSoldOut] = useState(false);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('description', description);
//       formData.append('price', price);
//       formData.append('category', category);
//       formData.append('subCategory', subCategory);
//       formData.append('bestseller', bestseller);
//       formData.append('soldOut', soldOut);

//       image1 && formData.append('image1', image1);
//       image2 && formData.append('image2', image2);
//       image3 && formData.append('image3', image3);
//       image4 && formData.append('image4', image4);

//       const response = await axios.post(backendUrl + '/api/product/add', formData, {
//         headers: { token },
//       });

//       if (response.data.success) {
//         toast.success(response.data.message);
//         setName('');
//         setDescription('');
//         setImage1(null);
//         setImage2(null);
//         setImage3(null);
//         setImage4(null);
//         setPrice('');
//         setSoldOut(false);
//         setBestseller(false);
//         setCategory('');
//         setSubCategory('');
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className="flex flex-col items-start w-full gap-3">
      
//       {/* Images */}
//       <div>
//         <p className="mb-2">Upload Image</p>
//         <div className="flex gap-2">
//           {[image1, image2, image3, image4].map((img, idx) => (
//             <label key={idx} htmlFor={`image${idx + 1}`}>
//               <img
//                 className="w-20"
//                 src={!img ? assets.upload_area : URL.createObjectURL(img)}
//                 alt=""
//               />
//               <input
//                 onChange={(e) => [setImage1, setImage2, setImage3, setImage4][idx](e.target.files[0])}
//                 type="file"
//                 id={`image${idx + 1}`}
//                 hidden
//               />
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Name */}
//       <div className="w-full">
//         <p className="mb-2">Product name</p>
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           className="w-full max-w-[500px] px-3 py-2"
//           type="text"
//           placeholder="Type here"
//           required
//         />
//       </div>

//       {/* Description */}
//       <div className="w-full">
//         <p className="mb-2">Product description</p>
//         <textarea
//           onChange={(e) => setDescription(e.target.value)}
//           value={description}
//           className="w-full max-w-[500px] px-3 py-2"
//           placeholder="Write content here"
//           required
//         />
//       </div>

//       {/* Category, Subcategory, Price */}
//       <div className="flex flex-col w-full gap-2 sm:flex-row sm:gap-8">
        
//         <div>
//           <p className="mb-2">Product category</p>
//           <select
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full px-3 py-2"
//             value={category}
//           >
//             <option value="">None</option>
//             <option value="Mobile Phone">Mobile Phone</option>
//             <option value="Accessories">Accessories</option>
//             <option value="Gadgets">Gadgets</option>
//           </select>
//         </div>

//         <div>
//           <p className="mb-2">Sub category</p>
//           <select
//             onChange={(e) => setSubCategory(e.target.value)}
//             className="w-full px-3 py-2"
//             value={subCategory}
//           >
//             <option value="">None</option>
//             <option value="Used Phones">Used Phones</option>
//             <option value="Stickers">Stickers</option>
//             <option value="Electronics">Electronics</option>
//           </select>
//         </div>

//         <div>
//           <p className="mb-2">Product Price</p>
//           <input
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//             className="w-full px-3 py-2 sm:w-[120px]"
//             type="number"
//             placeholder="25"
//           />
//         </div>
//       </div>

//       {/* Bestseller */}
//       <div className="flex gap-2 mt-2">
//         <input
//           onChange={() => setBestseller((prev) => !prev)}
//           checked={bestseller}
//           type="checkbox"
//           id="bestseller"
//         />
//         <label className="cursor-pointer" htmlFor="bestseller">
//           Add to bestseller
//         </label>
//       </div>

//       {/* Sold Out */}
//       <div className="flex gap-2">
//         <input onChange={() => setSoldOut((prev) => !prev)} checked={soldOut} type="checkbox" id="soldout" />
//         <label className="text-red-500 cursor-pointer" htmlFor="soldout">
//           Mark as SOLD OUT
//         </label>
//       </div>

//       <button type="submit" className="py-3 mt-4 text-white bg-black w-28">
//         ADD
//       </button>
//     </form>
//   );
// };

// export default Add;


// import React, { useState } from 'react';
// import { assets } from '../assets/assets';
// import axios from 'axios';
// import { backendUrl } from '../App';
// import { toast } from 'react-toastify';

// const Add = ({ token }) => {
//   const [image1, setImage1] = useState(null);
//   const [image2, setImage2] = useState(null);
//   const [image3, setImage3] = useState(null);
//   const [image4, setImage4] = useState(null);

//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [bestseller, setBestseller] = useState(false);
//   const [soldOut, setSoldOut] = useState(false);

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('description', description);
//       formData.append('price', price);
//       formData.append('category', category);
//       formData.append('bestseller', bestseller);
//       formData.append('soldOut', soldOut);

//       image1 && formData.append('image1', image1);
//       image2 && formData.append('image2', image2);
//       image3 && formData.append('image3', image3);
//       image4 && formData.append('image4', image4);

//       const response = await axios.post(backendUrl + '/api/product/add', formData, {
//         headers: { token },
//       });

//       if (response.data.success) {
//         toast.success(response.data.message);
//         setName('');
//         setDescription('');
//         setImage1(null);
//         setImage2(null);
//         setImage3(null);
//         setImage4(null);
//         setPrice('');
//         setSoldOut(false);
//         setBestseller(false);
//         setCategory('');
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className="flex flex-col items-start w-full gap-3">

//       {/* Images */}
//       <div>
//         <p className="mb-2">Upload Image</p>
//         <div className="flex gap-2">
//           {[image1, image2, image3, image4].map((img, idx) => (
//             <label key={idx} htmlFor={`image${idx + 1}`}>
//               <img
//                 className="w-20"
//                 src={!img ? assets.upload_area : URL.createObjectURL(img)}
//                 alt=""
//               />
//               <input
//                 onChange={(e) => [setImage1, setImage2, setImage3, setImage4][idx](e.target.files[0])}
//                 type="file"
//                 id={`image${idx + 1}`}
//                 hidden
//               />
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Name */}
//       <div className="w-full">
//         <p className="mb-2">Product name</p>
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           className="w-full max-w-[500px] px-3 py-2"
//           type="text"
//           placeholder="Type here"
//           required
//         />
//       </div>

//       {/* Description */}
//       <div className="w-full">
//         <p className="mb-2">Product description</p>
//         <textarea
//           onChange={(e) => setDescription(e.target.value)}
//           value={description}
//           className="w-full max-w-[500px] px-3 py-2"
//           placeholder="Write content here"
//           required
//         />
//       </div>

//       {/* Category and Price */}
//       <div className="flex flex-col w-full gap-2 sm:flex-row sm:gap-8">

//         <div>
//           <p className="mb-2">Product category</p>
//           <select
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full px-3 py-2"
//             value={category}
//             required
//           >
//             <option value="">Select Category</option>
//             <option value="Official Phones">Official Phones</option>
//             <option value="Unofficial Phones">Unofficial Phones</option>
//             <option value="Used Phones">Used Phones</option>
//             <option value="Adapter and Power cable">Adapter and Power cable</option>
//             <option value="PowerBank">PowerBank</option>
//             <option value="Airpods">Airpods</option>
//             <option value="Earphones">Earphones</option>
//             <option value="Neckband">Neckband</option>
//             <option value="Gamming Accesorices">Gamming Accesorices</option>
//             <option value="Speakers">Speakers</option>
//             <option value="Cover and glass">Cover and glass</option>
//           </select>
//         </div>

//         <div>
//           <p className="mb-2">Product Price</p>
//           <input
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//             className="w-full px-3 py-2 sm:w-[120px]"
//             type="number"
//             placeholder="25"
//             required
//           />
//         </div>
//       </div>

//       {/* Bestseller */}
//       <div className="flex gap-2 mt-2">
//         <input
//           onChange={() => setBestseller((prev) => !prev)}
//           checked={bestseller}
//           type="checkbox"
//           id="bestseller"
//         />
//         <label className="cursor-pointer" htmlFor="bestseller">
//           Add to bestseller
//         </label>
//       </div>

//       {/* Sold Out */}
//       <div className="flex gap-2">
//         <input
//           onChange={() => setSoldOut((prev) => !prev)}
//           checked={soldOut}
//           type="checkbox"
//           id="soldout"
//         />
//         <label className="text-red-500 cursor-pointer" htmlFor="soldout">
//           Mark as SOLD OUT
//         </label>
//       </div>

//       <button type="submit" className="py-3 mt-4 text-white bg-black w-28">
//         ADD
//       </button>
//     </form>
//   );
// };

// export default Add;

// import React, { useState } from 'react';
// import { assets } from '../assets/assets';
// import axios from 'axios';
// import { backendUrl } from '../App';
// import { toast } from 'react-toastify';

// const Add = ({ token }) => {
//   const [image1, setImage1] = useState(null);
//   const [image2, setImage2] = useState(null);
//   const [image3, setImage3] = useState(null);
//   const [image4, setImage4] = useState(null);

//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [subCategory, setSubCategory] = useState('');
//   const [bestseller, setBestseller] = useState(false);
//   const [soldOut, setSoldOut] = useState(false);

//   // Fixed categories and their respective subcategories
//   const categories = [
//     "Official Phones",
//     "Unofficial Phones",
//     "Used Phones",
//     "Adapter and Cables",
//     "PowerBank",
//     "Airbuds", // Corrected Airpods to Airbuds
//     "Earphones",
//     "Neckband",
//     "Gaming Accessories",
//     "Speakers",
//     "Cover and Glass",
//     "Smart Watch"
//   ];

//   // Subcategories for Official Phones
//   const officialPhoneSubCategories = [
//     "Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"
//   ];

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('description', description);
//       formData.append('price', price);
//       formData.append('category', category);
//       formData.append('subCategory', subCategory);
//       formData.append('bestseller', bestseller);
//       formData.append('soldOut', soldOut);

//       image1 && formData.append('image1', image1);
//       image2 && formData.append('image2', image2);
//       image3 && formData.append('image3', image3);
//       image4 && formData.append('image4', image4);

//       const response = await axios.post(backendUrl + '/api/product/add', formData, {
//         headers: { token },
//       });

//       if (response.data.success) {
//         toast.success(response.data.message);
//         setName('');
//         setDescription('');
//         setImage1(null);
//         setImage2(null);
//         setImage3(null);
//         setImage4(null);
//         setPrice('');
//         setSoldOut(false);
//         setBestseller(false);
//         setCategory('');
//         setSubCategory('');
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//     setSubCategory('');  // Reset subcategory when category changes
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className="flex flex-col items-start w-full gap-3">
      
//       {/* Images */}
//       <div>
//         <p className="mb-2">Upload Image</p>
//         <div className="flex gap-2">
//           {[image1, image2, image3, image4].map((img, idx) => (
//             <label key={idx} htmlFor={`image${idx + 1}`}>
//               <img
//                 className="w-20"
//                 src={!img ? assets.upload_area : URL.createObjectURL(img)}
//                 alt=""
//               />
//               <input
//                 onChange={(e) => [setImage1, setImage2, setImage3, setImage4][idx](e.target.files[0])}
//                 type="file"
//                 id={`image${idx + 1}`}
//                 hidden
//               />
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Name */}
//       <div className="w-full">
//         <p className="mb-2">Product name</p>
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           className="w-full max-w-[500px] px-3 py-2"
//           type="text"
//           placeholder="Type here"
//           required
//         />
//       </div>

//       {/* Description */}
//       <div className="w-full">
//         <p className="mb-2">Product description</p>
//         <textarea
//           onChange={(e) => setDescription(e.target.value)}
//           value={description}
//           className="w-full max-w-[500px] px-3 py-2"
//           placeholder="Write content here"
//           required
//         />
//       </div>

//       {/* Category and Subcategory and Price */}
//       <div className="flex flex-col w-full gap-2 sm:flex-row sm:gap-8">
//         <div>
//           <p className="mb-2">Product category</p>
//           <select
//             onChange={handleCategoryChange}
//             className="w-full px-3 py-2"
//             value={category}
//             required
//           >
//             <option value="">Select Category</option>
//             {categories.map((cat, idx) => (
//               <option key={idx} value={cat}>{cat}</option>
//             ))}
//           </select>
//         </div>

//         {/* Subcategory dropdown only for Official Phones */}
//         {category === "Official Phones" && (
//           <div>
//             <p className="mb-2">Product Sub-Category</p>
//             <select
//               onChange={(e) => setSubCategory(e.target.value)}
//               className="w-full px-3 py-2"
//               value={subCategory}
//               required
//             >
//               <option value="">Select Sub-Category</option>
//               {officialPhoneSubCategories.map((sub, idx) => (
//                 <option key={idx} value={sub}>{sub}</option>
//               ))}
//             </select>
//           </div>
//         )}

//         <div>
//           <p className="mb-2">Product Price</p>
//           <input
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//             className="w-full px-3 py-2 sm:w-[120px]"
//             type="number"
//             placeholder="25"
//             required
//           />
//         </div>
//       </div>

//       {/* Bestseller */}
//       <div className="flex gap-2 mt-2">
//         <input
//           onChange={() => setBestseller((prev) => !prev)}
//           checked={bestseller}
//           type="checkbox"
//           id="bestseller"
//         />
//         <label className="cursor-pointer" htmlFor="bestseller">
//           Add to bestseller
//         </label>
//       </div>

//       {/* Sold Out */}
//       <div className="flex gap-2">
//         <input
//           onChange={() => setSoldOut((prev) => !prev)}
//           checked={soldOut}
//           type="checkbox"
//           id="soldout"
//         />
//         <label className="text-red-500 cursor-pointer" htmlFor="soldout">
//           Mark as SOLD OUT
//         </label>
//       </div>

//       <button type="submit" className="py-3 mt-4 text-white bg-black w-28">
//         ADD
//       </button>
//     </form>
//   );
// };

// export default Add;


// import React, { useState, useEffect } from 'react';
// import { assets } from '../assets/assets';
// import axios from 'axios';
// import { backendUrl } from '../App';
// import { toast } from 'react-toastify';

// const Add = ({ token }) => {
//   const [image1, setImage1] = useState(null);
//   const [image2, setImage2] = useState(null);
//   const [image3, setImage3] = useState(null);
//   const [image4, setImage4] = useState(null);

//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [subCategory, setSubCategory] = useState('');
//   const [bestseller, setBestseller] = useState(false);
//   const [soldOut, setSoldOut] = useState(false);

//   // Category options and subcategories based on your backend
//   const categories = [
//     "Official Phones",
//     "Unofficial Phones",
//     "Used Phones",
//     "Adapter & Cables", 
//     "PowerBank",
//     "Airbuds",
//     "Earphones",
//     "Neckband",
//     "Gaming Accessories",
//     "Speakers",
//     "Cover & Glass", 
//     "Smart Watch"
//   ];

//   // Subcategories for "Official Phones"
//   const officialPhoneSubCategories = [
//     "Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"
//   ];

//   // On Form Submit
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('description', description);
//       formData.append('price', price);
//       formData.append('category', category);
//       formData.append('subCategory', subCategory);
//       formData.append('bestseller', bestseller);
//       formData.append('soldOut', soldOut);

//       image1 && formData.append('image1', image1);
//       image2 && formData.append('image2', image2);
//       image3 && formData.append('image3', image3);
//       image4 && formData.append('image4', image4);

//       const response = await axios.post(backendUrl + '/api/product/add', formData, {
//         headers: { token },
//       });

//       if (response.data.success) {
//         toast.success(response.data.message);
//         setName('');
//         setDescription('');
//         setImage1(null);
//         setImage2(null);
//         setImage3(null);
//         setImage4(null);
//         setPrice('');
//         setSoldOut(false);
//         setBestseller(false);
//         setCategory('');
//         setSubCategory('');
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

//   // Handle category change to update subCategory options
//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//     setSubCategory('');  // Reset subCategory on category change
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className="flex flex-col items-start w-full gap-3">

//       {/* Images */}
//       <div>
//         <p className="mb-2">Upload Image</p>
//         <div className="flex gap-2">
//           {[image1, image2, image3, image4].map((img, idx) => (
//             <label key={idx} htmlFor={`image${idx + 1}`}>
//               <img
//                 className="w-20"
//                 src={!img ? assets.upload_area : URL.createObjectURL(img)}
//                 alt=""
//               />
//               <input
//                 onChange={(e) => [setImage1, setImage2, setImage3, setImage4][idx](e.target.files[0])}
//                 type="file"
//                 id={`image${idx + 1}`}
//                 hidden
//               />
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Product Name */}
//       <div className="w-full">
//         <p className="mb-2">Product name</p>
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           className="w-full max-w-[500px] px-3 py-2"
//           type="text"
//           placeholder="Type here"
//           required
//         />
//       </div>

//       {/* Product Description */}
//       <div className="w-full">
//         <p className="mb-2">Product description</p>
//         <textarea
//           onChange={(e) => setDescription(e.target.value)}
//           value={description}
//           className="w-full max-w-[500px] px-3 py-2"
//           placeholder="Write content here"
//           required
//         />
//       </div>

//       {/* Category and Sub-Category */}
//       <div className="flex flex-col w-full gap-2 sm:flex-row sm:gap-8">

//         <div>
//           <p className="mb-2">Product category</p>
//           <select
//             onChange={handleCategoryChange}
//             className="w-full px-3 py-2"
//             value={category}
//             required
//           >
//             <option value="">Select Category</option>
//             {categories.map((category, idx) => (
//               <option key={idx} value={category}>{category}</option>
//             ))}
//           </select>
//         </div>

//         {/* Only show sub-category if category is "Official Phones" */}
//         {category === "Official Phones" && (
//           <div>
//             <p className="mb-2">Product Sub-Category</p>
//             <select
//               onChange={(e) => setSubCategory(e.target.value)}
//               className="w-full px-3 py-2"
//               value={subCategory}
//               required
//             >
//               <option value="">Select Sub-Category</option>
//               {officialPhoneSubCategories.map((sub, idx) => (
//                 <option key={idx} value={sub}>{sub}</option>
//               ))}
//             </select>
//           </div>
//         )}

//         {/* Product Price */}
//         <div>
//           <p className="mb-2">Product Price</p>
//           <input
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//             className="w-full px-3 py-2 sm:w-[120px]"
//             type="number"
//             placeholder="25"
//             required
//           />
//         </div>
//       </div>

//       {/* Bestseller */}
//       <div className="flex gap-2 mt-2">
//         <input
//           onChange={() => setBestseller((prev) => !prev)}
//           checked={bestseller}
//           type="checkbox"
//           id="bestseller"
//         />
//         <label className="cursor-pointer" htmlFor="bestseller">
//           Add to bestseller
//         </label>
//       </div>

//       {/* Sold Out */}
//       <div className="flex gap-2">
//         <input
//           onChange={() => setSoldOut((prev) => !prev)}
//           checked={soldOut}
//           type="checkbox"
//           id="soldout"
//         />
//         <label className="text-red-500 cursor-pointer" htmlFor="soldout">
//           Mark as SOLD OUT
//         </label>
//       </div>

//       <button type="submit" className="py-3 mt-4 text-white bg-black w-28">
//         ADD
//       </button>
//     </form>
//   );
// };

// export default Add;


// import React, { useState } from 'react';
// import { assets } from '../assets/assets';
// import axios from 'axios';
// import { backendUrl } from '../App';
// import { toast } from 'react-toastify';

// const Add = ({ token }) => {
//   const [image1, setImage1] = useState(null);
//   const [image2, setImage2] = useState(null);
//   const [image3, setImage3] = useState(null);
//   const [image4, setImage4] = useState(null);

//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [subCategory, setSubCategory] = useState('');
//   const [bestseller, setBestseller] = useState(false);
//   const [soldOut, setSoldOut] = useState(false);

//   // Variants state and inputs
//   const [variants, setVariants] = useState([]);
//   const [variantInput, setVariantInput] = useState('');
//   const [colorInput, setColorInput] = useState('');
//   const [variantRegularPriceInput, setVariantRegularPriceInput] = useState('');
//   const [variantOfferPriceInput, setVariantOfferPriceInput] = useState('');

//   // Categories and subcategories
//   const categories = [
//     "Official Phones",
//     "Unofficial Phones",
//     "Used Phones",
//     "Adapter & Cables", 
//     "PowerBank",
//     "Airbuds",
//     "Earphones",
//     "Neckband",
//     "Gaming Accessories",
//     "Speakers",
//     "Cover & Glass", 
//     "Smart Watch"
//   ];

//   const officialPhoneSubCategories = [
//     "Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"
//   ];

//   // Add a variant to variants list
//   const addVariant = () => {
//     if (!variantInput.trim() || !colorInput.trim() || !variantRegularPriceInput.trim()) {
//       toast.error("Please fill variant, color, and regular price");
//       return;
//     }

//     setVariants(prev => [...prev, {
//       variant: variantInput.trim(),
//       color: colorInput.trim(),
//       regularPrice: Number(variantRegularPriceInput),
//       offerPrice: variantOfferPriceInput ? Number(variantOfferPriceInput) : null,
//     }]);

//     setVariantInput('');
//     setColorInput('');
//     setVariantRegularPriceInput('');
//     setVariantOfferPriceInput('');
//   };

//   // Remove a variant by index
//   const removeVariant = (index) => {
//     setVariants(prev => prev.filter((_, i) => i !== index));
//   };

//   // Category change handler
//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//     setSubCategory(''); // Reset subcategory on category change
//   };

//   // Submit form handler
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('description', description);
//       formData.append('price', price || '0'); // Price optional if variants exist
//       formData.append('category', category);
//       formData.append('subCategory', subCategory);
//       formData.append('bestseller', bestseller);
//       formData.append('soldOut', soldOut);

//       // Append variants as JSON string (empty array if no variants)
//       formData.append('variants', JSON.stringify(variants));

//       if (image1) formData.append('image1', image1);
//       if (image2) formData.append('image2', image2);
//       if (image3) formData.append('image3', image3);
//       if (image4) formData.append('image4', image4);

//       const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
//         headers: { token },
//       });

//       if (response.data.message) {
//         toast.success(response.data.message);
//         // Reset all fields
//         setName('');
//         setDescription('');
//         setPrice('');
//         setCategory('');
//         setSubCategory('');
//         setBestseller(false);
//         setSoldOut(false);
//         setImage1(null);
//         setImage2(null);
//         setImage3(null);
//         setImage4(null);
//         setVariants([]);
//         setVariantInput('');
//         setColorInput('');
//         setVariantRegularPriceInput('');
//         setVariantOfferPriceInput('');
//       } else {
//         toast.error("Something went wrong");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Server Error: Unable to add product");
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className="flex flex-col items-start w-full gap-3">

//       {/* Images */}
//       <div>
//         <p className="mb-2">Upload Images</p>
//         <div className="flex gap-2">
//           {[image1, image2, image3, image4].map((img, idx) => (
//             <label key={idx} htmlFor={`image${idx + 1}`} className="cursor-pointer">
//               <img
//                 className="object-cover w-20 h-20 border rounded"
//                 src={!img ? assets.upload_area : URL.createObjectURL(img)}
//                 alt={`Upload ${idx + 1}`}
//               />
//               <input
//                 onChange={(e) => [setImage1, setImage2, setImage3, setImage4][idx](e.target.files[0])}
//                 type="file"
//                 id={`image${idx + 1}`}
//                 hidden
//               />
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Product Name */}
//       <div className="w-full">
//         <p className="mb-2">Product name</p>
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           className="w-full max-w-[500px] px-3 py-2 border rounded"
//           type="text"
//           placeholder="Type here"
//           required
//         />
//       </div>

//       {/* Product Description */}
//       <div className="w-full">
//         <p className="mb-2">Product description</p>
//         <textarea
//           onChange={(e) => setDescription(e.target.value)}
//           value={description}
//           className="w-full max-w-[500px] px-3 py-2 border rounded"
//           placeholder="Write content here"
//           required
//         />
//       </div>

//       {/* Category & Subcategory */}
//       <div className="flex flex-col w-full gap-2 sm:flex-row sm:gap-8">
//         <div>
//           <p className="mb-2">Product category</p>
//           <select
//             onChange={handleCategoryChange}
//             className="w-full px-3 py-2 border rounded"
//             value={category}
//             required
//           >
//             <option value="">Select Category</option>
//             {categories.map((cat, idx) => (
//               <option key={idx} value={cat}>{cat}</option>
//             ))}
//           </select>
//         </div>

//         {category === "Official Phones" && (
//           <div>
//             <p className="mb-2">Product Sub-Category</p>
//             <select
//               onChange={(e) => setSubCategory(e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               value={subCategory}
//               required
//             >
//               <option value="">Select Sub-Category</option>
//               {officialPhoneSubCategories.map((sub, idx) => (
//                 <option key={idx} value={sub}>{sub}</option>
//               ))}
//             </select>
//           </div>
//         )}

//         {/* Base Price */}
//         <div>
//           <p className="mb-2">Product Price (Main)</p>
//           <input
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//             className="w-full px-3 py-2 border rounded sm:w-[120px]"
//             type="number"
//             placeholder="25"
//           />
//           <small className="text-gray-500">
//             * Optional if product has variants
//           </small>
//         </div>
//       </div>

//       {/* Variant inputs */}
//       <div className="w-full mt-4">
//         <p className="mb-2 font-semibold">Add Variant</p>
//         <div className="flex flex-wrap items-center gap-3">
//           <input
//             value={variantInput}
//             onChange={(e) => setVariantInput(e.target.value)}
//             className="px-3 py-2 border rounded"
//             placeholder="Variant (e.g., 4/64)"
//           />
//           <input
//             value={colorInput}
//             onChange={(e) => setColorInput(e.target.value)}
//             className="px-3 py-2 border rounded"
//             placeholder="Color (e.g., Black)"
//           />
//           <input
//             value={variantRegularPriceInput}
//             onChange={(e) => setVariantRegularPriceInput(e.target.value)}
//             className="px-3 py-2 border rounded"
//             type="number"
//             placeholder="Regular Price"
//           />
//           <input
//             value={variantOfferPriceInput}
//             onChange={(e) => setVariantOfferPriceInput(e.target.value)}
//             className="px-3 py-2 border rounded"
//             type="number"
//             placeholder="Offer Price (optional)"
//           />
//           <button
//             type="button"
//             onClick={addVariant}
//             className="px-4 py-2 text-white bg-black rounded"
//           >
//             Add
//           </button>
//         </div>

//         {/* Display added variants */}
//         <ul className="mt-3">
//           {variants.map((v, idx) => (
//             <li key={idx} className="flex items-center gap-4 mt-1">
//               <span>
//                 {v.variant} - {v.color} - Regular: ৳{v.regularPrice}
//                 {v.offerPrice !== null && v.offerPrice !== undefined
//                   ? ` | Offer: ৳${v.offerPrice}`
//                   : null}
//               </span>
//               <button
//                 onClick={() => removeVariant(idx)}
//                 className="text-red-500 hover:underline"
//                 type="button"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Bestseller & Sold Out checkboxes */}
//       <div className="flex gap-4 mt-3">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={bestseller}
//             onChange={() => setBestseller(prev => !prev)}
//           />
//           Add to Bestseller
//         </label>
//         <label className="flex items-center gap-2 text-red-500 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={soldOut}
//             onChange={() => setSoldOut(prev => !prev)}
//           />
//           Mark as SOLD OUT
//         </label>
//       </div>

//       <button
//         type="submit"
//         className="py-3 mt-4 text-white bg-black rounded w-28"
//       >
//         ADD
//       </button>
//     </form>
//   );
// };

// export default Add;


// import React, { useState } from 'react';
// import { assets } from '../assets/assets';
// import axios from 'axios';
// import { backendUrl } from '../App';
// import { toast } from 'react-toastify';

// const Add = ({ token }) => {
//   const [image1, setImage1] = useState(null);
//   const [image2, setImage2] = useState(null);
//   const [image3, setImage3] = useState(null);
//   const [image4, setImage4] = useState(null);

//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [subCategory, setSubCategory] = useState('');
//   const [bestseller, setBestseller] = useState(false);
//   const [soldOut, setSoldOut] = useState(false);

//   // Variants state and inputs
//   const [variants, setVariants] = useState([]);
//   const [variantInput, setVariantInput] = useState('');
//   const [colorInput, setColorInput] = useState('');
//   const [variantRegularPriceInput, setVariantRegularPriceInput] = useState('');
//   const [variantOfferPriceInput, setVariantOfferPriceInput] = useState('');

//   // Categories and subcategories
//   const categories = [
//     "Official Phones",
//     "Unofficial Phones",
//     "Used Phones",
//     "Adapter & Cables", 
//     "PowerBank",
//     "Airbuds",
//     "Earphones",
//     "Neckband",
//     "Gaming Accessories",
//     "Speakers",
//     "Cover & Glass", 
//     "Smart Watch"
//   ];

//   const officialPhoneSubCategories = [
//     "Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"
//   ];

//   // Add a variant to variants list
//   const addVariant = () => {
//     if (!variantInput.trim() || !colorInput.trim() || !variantRegularPriceInput.trim()) {
//       toast.error("Please fill variant, color, and regular price");
//       return;
//     }

//     // Split the color input into individual colors (if there are multiple)
//     const colors = colorInput
//       .split(',')
//       .map(c => c.trim())  // Split by commas and remove extra spaces
//       .map(c => ({
//         name: c,  // Save the name as the color input (e.g., "red")
//         code: isValidColor(c) ? c : '#FFFFFF'  // Validate the color, fallback to white if invalid
//       }));

//     setVariants(prev => [
//       ...prev,
//       {
//         variant: variantInput.trim(),
//         colors: colors,  // Store colors as an array of objects
//         regularPrice: Number(variantRegularPriceInput),
//         offerPrice: variantOfferPriceInput ? Number(variantOfferPriceInput) : null,
//       }
//     ]);

//     // Reset the input fields
//     setVariantInput('');
//     setColorInput('');
//     setVariantRegularPriceInput('');
//     setVariantOfferPriceInput('');
//   };

//   // Helper function to validate color (hex or RGB format)
//   const isValidColor = (color) => {
//     const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
//     const rgbRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
//     return hexRegex.test(color) || rgbRegex.test(color);
//   };

//   // Remove a variant by index
//   const removeVariant = (index) => {
//     setVariants(prev => prev.filter((_, i) => i !== index));
//   };

//   // Category change handler
//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//     setSubCategory(''); // Reset subcategory on category change
//   };

//   // Submit form handler
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('description', description);
//       formData.append('price', price || '0'); // Price optional if variants exist
//       formData.append('category', category);
//       formData.append('subCategory', subCategory);
//       formData.append('bestseller', bestseller);
//       formData.append('soldOut', soldOut);

//       // Append variants as JSON string (empty array if no variants)
//       formData.append('variants', JSON.stringify(variants));

//       if (image1) formData.append('image1', image1);
//       if (image2) formData.append('image2', image2);
//       if (image3) formData.append('image3', image3);
//       if (image4) formData.append('image4', image4);

//       const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
//         headers: { token },
//       });

//       if (response.data.message) {
//         toast.success(response.data.message);
//         // Reset all fields
//         setName('');
//         setDescription('');
//         setPrice('');
//         setCategory('');
//         setSubCategory('');
//         setBestseller(false);
//         setSoldOut(false);
//         setImage1(null);
//         setImage2(null);
//         setImage3(null);
//         setImage4(null);
//         setVariants([]);
//         setVariantInput('');
//         setColorInput('');
//         setVariantRegularPriceInput('');
//         setVariantOfferPriceInput('');
//       } else {
//         toast.error("Something went wrong");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Server Error: Unable to add product");
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className="flex flex-col items-start w-full gap-3">

//       {/* Images */}
//       <div>
//         <p className="mb-2">Upload Images</p>
//         <div className="flex gap-2">
//           {[image1, image2, image3, image4].map((img, idx) => (
//             <label key={idx} htmlFor={`image${idx + 1}`} className="cursor-pointer">
//               <img
//                 className="object-cover w-20 h-20 border rounded"
//                 src={!img ? assets.upload_area : URL.createObjectURL(img)}
//                 alt={`Upload ${idx + 1}`}
//               />
//               <input
//                 onChange={(e) => [setImage1, setImage2, setImage3, setImage4][idx](e.target.files[0])}
//                 type="file"
//                 id={`image${idx + 1}`}
//                 hidden
//               />
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Product Name */}
//       <div className="w-full">
//         <p className="mb-2">Product name</p>
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           className="w-full max-w-[500px] px-3 py-2 border rounded"
//           type="text"
//           placeholder="Type here"
//           required
//         />
//       </div>

//       {/* Product Description */}
//       <div className="w-full">
//         <p className="mb-2">Product description</p>
//         <textarea
//           onChange={(e) => setDescription(e.target.value)}
//           value={description}
//           className="w-full max-w-[500px] px-3 py-2 border rounded"
//           placeholder="Write content here"
//           required
//         />
//       </div>

//       {/* Category & Subcategory */}
//       <div className="flex flex-col w-full gap-2 sm:flex-row sm:gap-8">
//         <div>
//           <p className="mb-2">Product category</p>
//           <select
//             onChange={handleCategoryChange}
//             className="w-full px-3 py-2 border rounded"
//             value={category}
//             required
//           >
//             <option value="">Select Category</option>
//             {categories.map((cat, idx) => (
//               <option key={idx} value={cat}>{cat}</option>
//             ))}
//           </select>
//         </div>

//         {category === "Official Phones" && (
//           <div>
//             <p className="mb-2">Product Sub-Category</p>
//             <select
//               onChange={(e) => setSubCategory(e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               value={subCategory}
//               required
//             >
//               <option value="">Select Sub-Category</option>
//               {officialPhoneSubCategories.map((sub, idx) => (
//                 <option key={idx} value={sub}>{sub}</option>
//               ))}
//             </select>
//           </div>
//         )}

//         {/* Base Price */}
//         <div>
//           <p className="mb-2">Product Price (Main)</p>
//           <input
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//             className="w-full px-3 py-2 border rounded sm:w-[120px]"
//             type="number"
//             placeholder="25"
//           />
//           <small className="text-gray-500">
//             * Optional if product has variants
//           </small>
//         </div>
//       </div>

//       {/* Variant inputs */}
//       <div className="w-full mt-4">
//         <p className="mb-2 font-semibold">Add Variant</p>
//         <div className="flex flex-wrap items-center gap-3">
//           <input
//             value={variantInput}
//             onChange={(e) => setVariantInput(e.target.value)}
//             className="px-3 py-2 border rounded"
//             placeholder="Variant (e.g., 4/64)"
//           />
//           <input
//             value={colorInput}
//             onChange={(e) => setColorInput(e.target.value)}
//             className="px-3 py-2 border rounded"
//             placeholder="Colors (comma separated, e.g., red, blue, green)"
//           />
//           <input
//             value={variantRegularPriceInput}
//             onChange={(e) => setVariantRegularPriceInput(e.target.value)}
//             className="px-3 py-2 border rounded"
//             type="number"
//             placeholder="Regular Price"
//           />
//           <input
//             value={variantOfferPriceInput}
//             onChange={(e) => setVariantOfferPriceInput(e.target.value)}
//             className="px-3 py-2 border rounded"
//             type="number"
//             placeholder="Offer Price (optional)"
//           />
//           <button
//             type="button"
//             onClick={addVariant}
//             className="px-4 py-2 text-white bg-black rounded"
//           >
//             Add Variant
//           </button>
//         </div>

//         {/* Display added variants */}
//         <ul className="mt-3">
//           {variants.map((v, idx) => (
//             <li key={idx} className="flex items-center gap-4 mt-1">
//               <span>
//                 {v.variant} - Colors: {v.colors.map((c) => c.name).join(', ')} - Regular: ৳{v.regularPrice}
//                 {v.offerPrice !== null && v.offerPrice !== undefined
//                   ? ` | Offer: ৳${v.offerPrice}` : null}
//               </span>
//               <button
//                 onClick={() => removeVariant(idx)}
//                 className="text-red-500 hover:underline"
//                 type="button"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Bestseller & Sold Out checkboxes */}
//       <div className="flex gap-4 mt-3">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={bestseller}
//             onChange={() => setBestseller(prev => !prev)}
//           />
//           Add to Bestseller
//         </label>
//         <label className="flex items-center gap-2 text-red-500 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={soldOut}
//             onChange={() => setSoldOut(prev => !prev)}
//           />
//           Mark as SOLD OUT
//         </label>
//       </div>

//       <button
//         type="submit"
//         className="py-3 mt-4 text-white bg-black rounded w-28"
//       >
//         ADD PRODUCT
//       </button>
//     </form>
//   );
// };

// export default Add;


// import React, { useState } from 'react';
// import { assets } from '../assets/assets';
// import axios from 'axios';
// import { backendUrl } from '../App';
// import { toast } from 'react-toastify';

// const Add = ({ token }) => {
//   const [image1, setImage1] = useState(null);
//   const [image2, setImage2] = useState(null);
//   const [image3, setImage3] = useState(null);
//   const [image4, setImage4] = useState(null);

//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [subCategory, setSubCategory] = useState('');
//   const [bestseller, setBestseller] = useState(false);
//   const [soldOut, setSoldOut] = useState(false);

//   // Variants state and inputs
//   const [variants, setVariants] = useState([]);
//   const [variantInput, setVariantInput] = useState('');
//   const [colorInput, setColorInput] = useState('');
//   const [variantRegularPriceInput, setVariantRegularPriceInput] = useState('');
//   const [variantOfferPriceInput, setVariantOfferPriceInput] = useState('');

//   // Categories and subcategories
//   const categories = [
//     "Official Phones",
//     "Unofficial Phones",
//     "Used Phones",
//     "Adapter & Cables", 
//     "PowerBank",
//     "Airbuds",
//     "Earphones",
//     "Neckband",
//     "Gaming Accessories",
//     "Speakers",
//     "Cover & Glass", 
//     "Smart Watch"
//   ];

//   const officialPhoneSubCategories = [
//     "Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"
//   ];

//   // Add a variant to variants list
//   const addVariant = () => {
//     if (!variantInput.trim() || !colorInput.trim() || !variantRegularPriceInput.trim()) {
//       toast.error("Please fill variant, color, and regular price");
//       return;
//     }

//     // Split the color input into individual colors (if there are multiple)
//     const colors = colorInput
//       .split(',')
//       .map(c => c.trim())  // Split by commas and remove extra spaces
//       .map(c => ({
//         name: c,  // Save the name as the color input (e.g., "red")
//         code: isValidColor(c) ? c : '#FFFFFF'  // Validate the color, fallback to white if invalid
//       }));

//     setVariants(prev => [
//       ...prev,
//       {
//         variant: variantInput.trim(),
//         colors: colors,  // Store colors as an array of objects
//         regularPrice: Number(variantRegularPriceInput),
//         offerPrice: variantOfferPriceInput ? Number(variantOfferPriceInput) : null,
//       }
//     ]);

//     // Reset the input fields
//     setVariantInput('');
//     setColorInput('');
//     setVariantRegularPriceInput('');
//     setVariantOfferPriceInput('');
//   };

//   // Helper function to validate color (hex or RGB format)
//   const isValidColor = (color) => {
//     const hexRegex = /^#([0-9A-Fa-f]{3}){1,2}$/;
//     const rgbRegex = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/;
//     return hexRegex.test(color) || rgbRegex.test(color);
//   };

//   // Remove a variant by index
//   const removeVariant = (index) => {
//     setVariants(prev => prev.filter((_, i) => i !== index));
//   };

//   // Category change handler
//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//     setSubCategory(''); // Reset subcategory on category change
//   };

//   // Submit form handler
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('description', description);
//       formData.append('price', price || '0'); // Price optional if variants exist
//       formData.append('category', category);
//       formData.append('subCategory', subCategory);
//       formData.append('bestseller', bestseller);
//       formData.append('soldOut', soldOut);

//       // Append variants as JSON string (empty array if no variants)
//       formData.append('variants', JSON.stringify(variants));

//       if (image1) formData.append('image1', image1);
//       if (image2) formData.append('image2', image2);
//       if (image3) formData.append('image3', image3);
//       if (image4) formData.append('image4', image4);

//       const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
//         headers: { token },
//       });

//       if (response.data.message) {
//         toast.success(response.data.message);
//         // Reset all fields
//         setName('');
//         setDescription('');
//         setPrice('');
//         setCategory('');
//         setSubCategory('');
//         setBestseller(false);
//         setSoldOut(false);
//         setImage1(null);
//         setImage2(null);
//         setImage3(null);
//         setImage4(null);
//         setVariants([]);
//         setVariantInput('');
//         setColorInput('');
//         setVariantRegularPriceInput('');
//         setVariantOfferPriceInput('');
//       } else {
//         toast.error("Something went wrong");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Server Error: Unable to add product");
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className="flex flex-col items-start w-full gap-3">

//       {/* Images */}
//       <div>
//         <p className="mb-2">Upload Images</p>
//         <div className="flex gap-2">
//           {[image1, image2, image3, image4].map((img, idx) => (
//             <label key={idx} htmlFor={`image${idx + 1}`} className="cursor-pointer">
//               <img
//                 className="object-cover w-20 h-20 border rounded"
//                 src={!img ? assets.upload_area : URL.createObjectURL(img)}
//                 alt={`Upload ${idx + 1}`}
//               />
//               <input
//                 onChange={(e) => [setImage1, setImage2, setImage3, setImage4][idx](e.target.files[0])}
//                 type="file"
//                 id={`image${idx + 1}`}
//                 hidden
//               />
//             </label>
//           ))}
//         </div>
//       </div>

//       {/* Product Name */}
//       <div className="w-full">
//         <p className="mb-2">Product name</p>
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           className="w-full max-w-[500px] px-3 py-2 border rounded"
//           type="text"
//           placeholder="Type here"
//           required
//         />
//       </div>

//       {/* Product Description */}
//       <div className="w-full">
//         <p className="mb-2">Product description</p>
//         <textarea
//           onChange={(e) => setDescription(e.target.value)}
//           value={description}
//           className="w-full max-w-[500px] px-3 py-2 border rounded"
//           placeholder="Write content here"
//           required
//         />
//       </div>

//       {/* Category & Subcategory */}
//       <div className="flex flex-col w-full gap-2 sm:flex-row sm:gap-8">
//         <div>
//           <p className="mb-2">Product category</p>
//           <select
//             onChange={handleCategoryChange}
//             className="w-full px-3 py-2 border rounded"
//             value={category}
//             required
//           >
//             <option value="">Select Category</option>
//             {categories.map((cat, idx) => (
//               <option key={idx} value={cat}>{cat}</option>
//             ))}
//           </select>
//         </div>

//         {category === "Official Phones" && (
//           <div>
//             <p className="mb-2">Product Sub-Category</p>
//             <select
//               onChange={(e) => setSubCategory(e.target.value)}
//               className="w-full px-3 py-2 border rounded"
//               value={subCategory}
//               required
//             >
//               <option value="">Select Sub-Category</option>
//               {officialPhoneSubCategories.map((sub, idx) => (
//                 <option key={idx} value={sub}>{sub}</option>
//               ))}
//             </select>
//           </div>
//         )}

//         {/* Base Price */}
//         <div>
//           <p className="mb-2">Product Price (Main)</p>
//           <input
//             onChange={(e) => setPrice(e.target.value)}
//             value={price}
//             className="w-full px-3 py-2 border rounded sm:w-[120px]"
//             type="number"
//             placeholder="25"
//           />
//           <small className="text-gray-500">
//             * Optional if product has variants
//           </small>
//         </div>
//       </div>

//       {/* Variant inputs */}
//       <div className="w-full mt-4">
//         <p className="mb-2 font-semibold">Add Variant</p>
//         <div className="flex flex-wrap items-center gap-3">
//           <input
//             value={variantInput}
//             onChange={(e) => setVariantInput(e.target.value)}
//             className="px-3 py-2 border rounded"
//             placeholder="Variant (e.g., 4/64)"
//           />
//           <input
//             value={colorInput}
//             onChange={(e) => setColorInput(e.target.value)}
//             className="px-3 py-2 border rounded"
//             placeholder="Colors (comma separated, e.g., red, blue, green)"
//           />
//           <input
//             value={variantRegularPriceInput}
//             onChange={(e) => setVariantRegularPriceInput(e.target.value)}
//             className="px-3 py-2 border rounded"
//             type="number"
//             placeholder="Regular Price"
//           />
//           <input
//             value={variantOfferPriceInput}
//             onChange={(e) => setVariantOfferPriceInput(e.target.value)}
//             className="px-3 py-2 border rounded"
//             type="number"
//             placeholder="Offer Price (optional)"
//           />
//           <button
//             type="button"
//             onClick={addVariant}
//             className="px-4 py-2 text-white bg-black rounded"
//           >
//             Add Variant
//           </button>
//         </div>

//         {/* Display added variants */}
//         <ul className="mt-3">
//           {variants.map((v, idx) => (
//             <li key={idx} className="flex items-center gap-4 mt-1">
//               <span>
//                 {v.variant} - Colors: {v.colors.map((c) => c.name).join(', ')} - Regular: ৳{v.regularPrice}
//                 {v.offerPrice !== null && v.offerPrice !== undefined
//                   ? ` | Offer: ৳${v.offerPrice}` : null}
//               </span>
//               <button
//                 onClick={() => removeVariant(idx)}
//                 className="text-red-500 hover:underline"
//                 type="button"
//               >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Bestseller & Sold Out checkboxes */}
//       <div className="flex gap-4 mt-3">
//         <label className="flex items-center gap-2 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={bestseller}
//             onChange={() => setBestseller(prev => !prev)}
//           />
//           Add to Bestseller
//         </label>
//         <label className="flex items-center gap-2 text-red-500 cursor-pointer">
//           <input
//             type="checkbox"
//             checked={soldOut}
//             onChange={() => setSoldOut(prev => !prev)}
//           />
//           Mark as SOLD OUT
//         </label>
//       </div>

//       <button
//         type="submit"
//         className="py-3 mt-4 text-white bg-black rounded w-28"
//       >
//         ADD PRODUCT
//       </button>
//     </form>
//   );
// };

// export default Add;


import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [bestseller, setBestseller] = useState(false);
  const [soldOut, setSoldOut] = useState(false);

  // Variants state and inputs
  const [variants, setVariants] = useState([]);
  const [variantInput, setVariantInput] = useState('');
  const [colorInput, setColorInput] = useState('');
  const [variantRegularPriceInput, setVariantRegularPriceInput] = useState('');
  const [variantOfferPriceInput, setVariantOfferPriceInput] = useState('');

  // Categories and subcategories
  const categories = [
    "Official Phones",
    "Unofficial Phones",
    "Used Phones",
    "Adapter & Cables", 
    "PowerBank",
    "Airbuds",
    "Earphones",
    "Neckband",
    "Gaming Accessories",
    "Speakers",
    "Cover & Glass", 
    "Smart Watch"
  ];

  const officialPhoneSubCategories = [
    "Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"
  ];

  // Add a variant to variants list
  const addVariant = () => {
    if (!variantInput.trim() || !colorInput.trim() || !variantRegularPriceInput.trim()) {
      toast.error("Please fill variant, color, and regular price");
      return;
    }

    // Split the color input into individual colors (if multiple), keep as strings only
    const colors = colorInput
      .split(',')
      .map(c => c.trim())
      .filter(c => c.length > 0);

    if (colors.length === 0) {
      toast.error("Please enter valid colors");
      return;
    }

    setVariants(prev => [
      ...prev,
      {
        variant: variantInput.trim(),
        colors: colors,  // Array of strings like ["red", "blue"]
        regularPrice: Number(variantRegularPriceInput),
        offerPrice: variantOfferPriceInput ? Number(variantOfferPriceInput) : null,
      }
    ]);

    // Reset input fields
    setVariantInput('');
    setColorInput('');
    setVariantRegularPriceInput('');
    setVariantOfferPriceInput('');
  };

  // Remove a variant by index
  const removeVariant = (index) => {
    setVariants(prev => prev.filter((_, i) => i !== index));
  };

  // Category change handler
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setSubCategory(''); // Reset subcategory on category change
  };

  // Submit form handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price || '0'); // Price optional if variants exist
      formData.append('category', category);
      formData.append('subCategory', subCategory);
      formData.append('bestseller', bestseller);
      formData.append('soldOut', soldOut);

      // Append variants as JSON string (empty array if no variants)
      formData.append('variants', JSON.stringify(variants));

      if (image1) formData.append('image1', image1);
      if (image2) formData.append('image2', image2);
      if (image3) formData.append('image3', image3);
      if (image4) formData.append('image4', image4);

      const response = await axios.post(`${backendUrl}/api/product/add`, formData, {
        headers: { token },
      });

      if (response.data.message) {
        toast.success(response.data.message);
        // Reset all fields
        setName('');
        setDescription('');
        setPrice('');
        setCategory('');
        setSubCategory('');
        setBestseller(false);
        setSoldOut(false);
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
        setVariants([]);
        setVariantInput('');
        setColorInput('');
        setVariantRegularPriceInput('');
        setVariantOfferPriceInput('');
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server Error: Unable to add product");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-start w-full gap-3">

      {/* Images */}
      <div>
        <p className="mb-2">Upload Images</p>
        <div className="flex gap-2">
          {[image1, image2, image3, image4].map((img, idx) => (
            <label key={idx} htmlFor={`image${idx + 1}`} className="cursor-pointer">
              <img
                className="object-cover w-20 h-20 border rounded"
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                alt={`Upload ${idx + 1}`}
              />
              <input
                onChange={(e) => [setImage1, setImage2, setImage3, setImage4][idx](e.target.files[0])}
                type="file"
                id={`image${idx + 1}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Name */}
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2 border rounded"
          type="text"
          placeholder="Type here"
          required
        />
      </div>

      {/* Product Description */}
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2 border rounded"
          placeholder="Write content here"
          required
        />
      </div>

      {/* Category & Subcategory */}
      <div className="flex flex-col w-full gap-2 sm:flex-row sm:gap-8">
        <div>
          <p className="mb-2">Product category</p>
          <select
            onChange={handleCategoryChange}
            className="w-full px-3 py-2 border rounded"
            value={category}
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {category === "Official Phones" && (
          <div>
            <p className="mb-2">Product Sub-Category</p>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              value={subCategory}
              required
            >
              <option value="">Select Sub-Category</option>
              {officialPhoneSubCategories.map((sub, idx) => (
                <option key={idx} value={sub}>{sub}</option>
              ))}
            </select>
          </div>
        )}

        {/* Base Price */}
        <div>
          <p className="mb-2">Product Price (Main)</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 border rounded sm:w-[120px]"
            type="number"
            placeholder="25"
          />
          <small className="text-gray-500">
            * Optional if product has variants
          </small>
        </div>
      </div>

      {/* Variant inputs */}
      <div className="w-full mt-4">
        <p className="mb-2 font-semibold">Add Variant</p>
        <div className="flex flex-wrap items-center gap-3">
          <input
            value={variantInput}
            onChange={(e) => setVariantInput(e.target.value)}
            className="px-3 py-2 border rounded"
            placeholder="Variant (e.g., 4/64)"
          />
          <input
            value={colorInput}
            onChange={(e) => setColorInput(e.target.value)}
            className="px-3 py-2 border rounded"
            placeholder="Colors (comma separated, e.g., red, blue, green)"
          />
          <input
            value={variantRegularPriceInput}
            onChange={(e) => setVariantRegularPriceInput(e.target.value)}
            className="px-3 py-2 border rounded"
            type="number"
            placeholder="Regular Price"
          />
          <input
            value={variantOfferPriceInput}
            onChange={(e) => setVariantOfferPriceInput(e.target.value)}
            className="px-3 py-2 border rounded"
            type="number"
            placeholder="Offer Price (optional)"
          />
          <button
            type="button"
            onClick={addVariant}
            className="px-4 py-2 text-white bg-black rounded"
          >
            Add Variant
          </button>
        </div>

        {/* Display added variants */}
        <ul className="mt-3">
          {variants.map((v, idx) => (
            <li key={idx} className="flex items-center gap-4 mt-1">
              <span>
                {v.variant} - Colors: {v.colors.join(', ')} - Regular: ৳{v.regularPrice}
                {v.offerPrice !== null && v.offerPrice !== undefined
                  ? ` | Offer: ৳${v.offerPrice}` : null}
              </span>
              <button
                onClick={() => removeVariant(idx)}
                className="text-red-500 hover:underline"
                type="button"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Bestseller & Sold Out checkboxes */}
      <div className="flex gap-4 mt-3">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={bestseller}
            onChange={() => setBestseller(prev => !prev)}
          />
          Add to Bestseller
        </label>
        <label className="flex items-center gap-2 text-red-500 cursor-pointer">
          <input
            type="checkbox"
            checked={soldOut}
            onChange={() => setSoldOut(prev => !prev)}
          />
          Mark as SOLD OUT
        </label>
      </div>

      <button
        type="submit"
        className="py-3 mt-4 text-white bg-black rounded w-28"
      >
        ADD PRODUCT
      </button>
    </form>
  );
};

export default Add;
