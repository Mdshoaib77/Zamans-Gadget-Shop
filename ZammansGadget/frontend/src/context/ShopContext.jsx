// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {

//     const currency = '৳ BDT ';
//     const delivery_fee = 100;
//     const backendUrl = import.meta.env.VITE_BACKEND_URL
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
//     const [cartItems, setCartItems] = useState({});
//     const [products, setProducts] = useState([]);
//     const [token, setToken] = useState('')
//     const navigate = useNavigate();


//     const addToCart = async (itemId, size) => {

//         if (!size) {
//             toast.error('Select Product Size');
//             return;
//         }

//         let cartData = structuredClone(cartItems);

//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1;
//             }
//             else {
//                 cartData[itemId][size] = 1;
//             }
//         }
//         else {
//             cartData[itemId] = {};
//             cartData[itemId][size] = 1;
//         }
//         setCartItems(cartData);

//         if (token) {
//             try {

//                 await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } })

//             } catch (error) {
//                 console.log(error)
//                 toast.error(error.message)
//             }
//         }

//     }

//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const items in cartItems) {
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalCount += cartItems[items][item];
//                     }
//                 } catch (error) {

//                 }
//             }
//         }
//         return totalCount;
//     }

//     const updateQuantity = async (itemId, size, quantity) => {

//         let cartData = structuredClone(cartItems);

//         cartData[itemId][size] = quantity;

//         setCartItems(cartData)

//         if (token) {
//             try {

//                 await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } })

//             } catch (error) {
//                 console.log(error)
//                 toast.error(error.message)
//             }
//         }

//     }

//     const getCartAmount = () => {
//         let totalAmount = 0;
//         for (const items in cartItems) {
//             let itemInfo = products.find((product) => product._id === items);
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalAmount += itemInfo.price * cartItems[items][item];
//                     }
//                 } catch (error) {

//                 }
//             }
//         }
//         return totalAmount;
//     }

//     const getProductsData = async () => {
//         try {

//             const response = await axios.get(backendUrl + '/api/product/list')
//             if (response.data.success) {
//                 setProducts(response.data.products.reverse())
//             } else {
//                 toast.error(response.data.message)
//             }

//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }

//     const getUserCart = async ( token ) => {
//         try {
            
//             const response = await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}})
//             if (response.data.success) {
//                 setCartItems(response.data.cartData)
//             }
//         } catch (error) {
//             console.log(error)
//             toast.error(error.message)
//         }
//     }

//     useEffect(() => {
//         getProductsData()
//     }, [])

//     useEffect(() => {
//         if (!token && localStorage.getItem('token')) {
//             setToken(localStorage.getItem('token'))
//             getUserCart(localStorage.getItem('token'))
//         }
//         if (token) {
//             getUserCart(token)
//         }
//     }, [token])

//     const value = {
//         products, currency, delivery_fee,
//         search, setSearch, showSearch, setShowSearch,
//         cartItems, addToCart,setCartItems,
//         getCartCount, updateQuantity,
//         getCartAmount, navigate, backendUrl,
//         setToken, token
//     }

//     return (
//         <ShopContext.Provider value={value}>
//             {props.children}
//         </ShopContext.Provider>
//     )

// }

// export default ShopContextProvider;

// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {

//     const currency = '৳ BDT ';
//     const delivery_fee = 100;
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
//     const [cartItems, setCartItems] = useState({});
//     const [products, setProducts] = useState([]);
//     const [token, setToken] = useState('');
//     const navigate = useNavigate();

//     const addToCart = async (itemId, size) => {
//         if (!size) {
//             toast.error('Select Product Size');
//             return;
//         }
//         let cartData = structuredClone(cartItems);
//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1;
//             } else {
//                 cartData[itemId][size] = 1;
//             }
//         } else {
//             cartData[itemId] = {};
//             cartData[itemId][size] = 1;
//         }
//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } });
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const items in cartItems) {
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalCount += cartItems[items][item];
//                     }
//                 } catch (error) {}
//             }
//         }
//         return totalCount;
//     };

//     const updateQuantity = async (itemId, size, quantity) => {
//         let cartData = structuredClone(cartItems);
//         cartData[itemId][size] = quantity;
//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } });
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     const getCartAmount = () => {
//         let totalAmount = 0;
//         for (const items in cartItems) {
//             let itemInfo = products.find((product) => product._id === items);
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalAmount += itemInfo.price * cartItems[items][item];
//                     }
//                 } catch (error) {}
//             }
//         }
//         return totalAmount;
//     };

//     const getProductsData = async () => {
//         try {
//             const response = await axios.get(backendUrl + '/api/product/list');
//             if (response.data.success) {
//                 setProducts(response.data.products.reverse());
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     const getUserCart = async (token) => {
//         try {
//             const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
//             if (response.data.success) {
//                 setCartItems(response.data.cartData);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     useEffect(() => {
//         getProductsData();
//     }, []);

//     useEffect(() => {
//         if (!token && localStorage.getItem('token')) {
//             setToken(localStorage.getItem('token'));
//             getUserCart(localStorage.getItem('token'));
//         }
//         if (token) {
//             getUserCart(token);
//         }
//     }, [token]);

//     const value = {
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItems,
//         addToCart,
//         setCartItems,
//         getCartCount,
//         updateQuantity,
//         getCartAmount,
//         navigate,
//         backendUrl,
//         setToken,
//         token,
//     };

//     return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
// };

// export default ShopContextProvider;


// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {

//     const currency = '৳ BDT ';
//     const delivery_fee = 100;
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
//     const [cartItems, setCartItems] = useState({});
//     const [products, setProducts] = useState([]);
//     const [token, setToken] = useState('');
//     const navigate = useNavigate();

//     const addToCart = async (itemId, size) => {
//         if (!size) {
//             toast.error('Select Product Size');
//             return;
//         }
//         let cartData = structuredClone(cartItems);
//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1;
//             } else {
//                 cartData[itemId][size] = 1;
//             }
//         } else {
//             cartData[itemId] = {};
//             cartData[itemId][size] = 1;
//         }
//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } });
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const items in cartItems) {
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalCount += cartItems[items][item];
//                     }
//                 } catch (error) {}
//             }
//         }
//         return totalCount;
//     };

//     const updateQuantity = async (itemId, size, quantity) => {
//         let cartData = structuredClone(cartItems);
//         cartData[itemId][size] = quantity;
//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } });
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     // Updated getCartAmount to handle variants and their prices
//     const getCartAmount = () => {
//         let totalAmount = 0;
//         for (const items in cartItems) {
//             let itemInfo = products.find((product) => product._id === items);
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         // Find the variant price based on the selected size/variant
//                         const variant = itemInfo.variants.find((variant) => variant.variant === item);
//                         const price = variant ? (variant.offerPrice || variant.regularPrice) : itemInfo.price;
//                         totalAmount += price * cartItems[items][item];
//                     }
//                 } catch (error) {}
//             }
//         }
//         return totalAmount;
//     };

//     const getProductsData = async () => {
//         try {
//             const response = await axios.get(backendUrl + '/api/product/list');
//             if (response.data.success) {
//                 setProducts(response.data.products.reverse());
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     const getUserCart = async (token) => {
//         try {
//             const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
//             if (response.data.success) {
//                 setCartItems(response.data.cartData);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     useEffect(() => {
//         getProductsData();
//     }, []);

//     useEffect(() => {
//         if (!token && localStorage.getItem('token')) {
//             setToken(localStorage.getItem('token'));
//             getUserCart(localStorage.getItem('token'));
//         }
//         if (token) {
//             getUserCart(token);
//         }
//     }, [token]);

//     const value = {
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItems,
//         addToCart,
//         setCartItems,
//         getCartCount,
//         updateQuantity,
//         getCartAmount,
//         navigate,
//         backendUrl,
//         setToken,
//         token,
//     };

//     return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
// };

// export default ShopContextProvider;


// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {

//     const currency = '৳ BDT ';
//     const delivery_fee = 100;
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
//     const [cartItems, setCartItems] = useState({});
//     const [products, setProducts] = useState([]);
//     const [token, setToken] = useState('');
//     const navigate = useNavigate();

//     // Add to cart with variants and colors
//     const addToCart = async (itemId, variantInfo) => {
//         if (!variantInfo.variant || !variantInfo.color) {
//             toast.error('Select Product Variant and Color');
//             return;
//         }

//         let cartData = structuredClone(cartItems);

//         if (cartData[itemId]) {
//             if (cartData[itemId][variantInfo.variant]) {
//                 cartData[itemId][variantInfo.variant].quantity += 1;
//             } else {
//                 cartData[itemId][variantInfo.variant] = {
//                     color: variantInfo.color,
//                     price: variantInfo.price,
//                     quantity: 1,
//                 };
//             }
//         } else {
//             cartData[itemId] = {
//                 [variantInfo.variant]: {
//                     color: variantInfo.color,
//                     price: variantInfo.price,
//                     quantity: 1,
//                 },
//             };
//         }

//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(backendUrl + '/api/cart/add', { itemId, variantInfo }, { headers: { token } });
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     // Get total cart count
//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const items in cartItems) {
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalCount += cartItems[items][item];
//                     }
//                 } catch (error) {}
//             }
//         }
//         return totalCount;
//     };

//     // Update quantity for cart item
//     const updateQuantity = async (itemId, variant, quantity) => {
//         let cartData = structuredClone(cartItems);
//         cartData[itemId][variant].quantity = quantity;
//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(backendUrl + '/api/cart/update', { itemId, variant, quantity }, { headers: { token } });
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     // Get cart total amount
//     const getCartAmount = () => {
//         let totalAmount = 0;
//         for (const items in cartItems) {
//             let itemInfo = products.find((product) => product._id === items);
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         // Find the variant price based on the selected variant
//                         const variant = itemInfo.variants.find((variant) => variant.variant === item);
//                         const price = variant ? (variant.offerPrice || variant.regularPrice) : itemInfo.price;
//                         totalAmount += price * cartItems[items][item];
//                     }
//                 } catch (error) {}
//             }
//         }
//         return totalAmount;
//     };

//     // Fetch product data from API
//     const getProductsData = async () => {
//         try {
//             const response = await axios.get(backendUrl + '/api/product/list');
//             if (response.data.success) {
//                 setProducts(response.data.products.reverse());
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     // Fetch user cart data
//     const getUserCart = async (token) => {
//         try {
//             const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
//             if (response.data.success) {
//                 setCartItems(response.data.cartData);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     useEffect(() => {
//         getProductsData();
//     }, []);

//     useEffect(() => {
//         if (!token && localStorage.getItem('token')) {
//             setToken(localStorage.getItem('token'));
//             getUserCart(localStorage.getItem('token'));
//         }
//         if (token) {
//             getUserCart(token);
//         }
//     }, [token]);

//     const value = {
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItems,
//         addToCart,
//         setCartItems,
//         getCartCount,
//         updateQuantity,
//         getCartAmount,
//         navigate,
//         backendUrl,
//         setToken,
//         token,
//     };

//     return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
// };

// export default ShopContextProvider;


// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {

//     const currency = '৳ BDT ';
//     const delivery_fee = 100;
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
//     const [cartItems, setCartItems] = useState({});
//     const [products, setProducts] = useState([]);
//     const [token, setToken] = useState('');
//     const navigate = useNavigate();

//     // ✅ Add to cart with variant/color
//     const addToCart = async (itemId, variantInfo) => {
//         if (!variantInfo.variant || !variantInfo.color) {
//             toast.error('Select Product Variant and Color');
//             return;
//         }

//         const cartData = structuredClone(cartItems);

//         if (!cartData[itemId]) {
//             cartData[itemId] = {};
//         }

//         if (cartData[itemId][variantInfo.variant]) {
//             cartData[itemId][variantInfo.variant].quantity += 1;
//         } else {
//             cartData[itemId][variantInfo.variant] = {
//                 color: variantInfo.color,
//                 price: variantInfo.price,
//                 quantity: 1,
//             };
//         }

//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(backendUrl + '/api/cart/add', { itemId, variantInfo }, { headers: { token } });
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     // ✅ Update quantity
//     const updateQuantity = async (itemId, variant, quantity) => {
//         const cartData = structuredClone(cartItems);
//         if (cartData[itemId] && cartData[itemId][variant]) {
//             cartData[itemId][variant].quantity = quantity;
//             setCartItems(cartData);

//             if (token) {
//                 try {
//                     await axios.post(backendUrl + '/api/cart/update', { itemId, variant, quantity }, { headers: { token } });
//                 } catch (error) {
//                     console.log(error);
//                     toast.error(error.message);
//                 }
//             }
//         }
//     };

//     // ✅ Get cart item count
//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const itemId in cartItems) {
//             const variants = cartItems[itemId];
//             for (const variantKey in variants) {
//                 const item = variants[variantKey];
//                 totalCount += item.quantity;
//             }
//         }
//         return totalCount;
//     };

//     // ✅ Calculate total price
//     const getCartAmount = () => {
//         let totalAmount = 0;
//         for (const itemId in cartItems) {
//             const product = products.find((p) => p._id === itemId);
//             const variants = cartItems[itemId];

//             for (const variantKey in variants) {
//                 const cartEntry = variants[variantKey];
//                 const itemPrice = cartEntry.price || 0;
//                 const quantity = cartEntry.quantity || 0;
//                 totalAmount += itemPrice * quantity;
//             }
//         }
//         return totalAmount;
//     };

//     // ✅ Get all products
//     const getProductsData = async () => {
//         try {
//             const response = await axios.get(backendUrl + '/api/product/list');
//             if (response.data.success) {
//                 setProducts(response.data.products.reverse());
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     // ✅ Fetch user cart
//     const getUserCart = async (token) => {
//         try {
//             const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
//             if (response.data.success) {
//                 setCartItems(response.data.cartData);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     useEffect(() => {
//         getProductsData();
//     }, []);

//     useEffect(() => {
//         const savedToken = localStorage.getItem('token');
//         if (!token && savedToken) {
//             setToken(savedToken);
//             getUserCart(savedToken);
//         }
//         if (token) {
//             getUserCart(token);
//         }
//     }, [token]);

//     const value = {
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItems,
//         setCartItems,
//         addToCart,
//         getCartCount,
//         updateQuantity,
//         getCartAmount,
//         navigate,
//         backendUrl,
//         setToken,
//         token,
//     };

//     return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
// };

// export default ShopContextProvider;



// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {

//     const currency = '৳ BDT ';
//     const delivery_fee = 100;
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
//     const [cartItems, setCartItems] = useState({});
//     const [products, setProducts] = useState([]);
//     const [token, setToken] = useState('');
//     const navigate = useNavigate();

//     const addToCart = async (itemId, size) => {
//         if (!size) {
//             toast.error('Select Product Size');
//             return;
//         }
//         let cartData = structuredClone(cartItems);
//         if (cartData[itemId]) {
//             if (cartData[itemId][size]) {
//                 cartData[itemId][size] += 1;
//             } else {
//                 cartData[itemId][size] = 1;
//             }
//         } else {
//             cartData[itemId] = {};
//             cartData[itemId][size] = 1;
//         }
//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } });
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const items in cartItems) {
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalCount += cartItems[items][item];
//                     }
//                 } catch (error) {}
//             }
//         }
//         return totalCount;
//     };

//     const updateQuantity = async (itemId, size, quantity) => {
//         let cartData = structuredClone(cartItems);
//         cartData[itemId][size] = quantity;
//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } });
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     const getCartAmount = () => {
//         let totalAmount = 0;
//         for (const items in cartItems) {
//             let itemInfo = products.find((product) => product._id === items);
//             for (const item in cartItems[items]) {
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalAmount += itemInfo.price * cartItems[items][item];
//                     }
//                 } catch (error) {}
//             }
//         }
//         return totalAmount;
//     };

//     const getProductsData = async () => {
//         try {
//             const response = await axios.get(backendUrl + '/api/product/list');
//             if (response.data.success) {
//                 setProducts(response.data.products.reverse());
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     const getUserCart = async (token) => {
//         try {
//             const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
//             if (response.data.success) {
//                 setCartItems(response.data.cartData);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     useEffect(() => {
//         getProductsData();
//     }, []);

//     useEffect(() => {
//         if (!token && localStorage.getItem('token')) {
//             setToken(localStorage.getItem('token'));
//             getUserCart(localStorage.getItem('token'));
//         }
//         if (token) {
//             getUserCart(token);
//         }
//     }, [token]);

//     const value = {
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItems,
//         addToCart,
//         setCartItems,
//         getCartCount,
//         updateQuantity,
//         getCartAmount,
//         navigate,
//         backendUrl,
//         setToken,
//         token,
//     };

//     return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
// };

// export default ShopContextProvider;


// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {

//     const currency = '৳ BDT ';
//     const delivery_fee = 100;
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
//     const [cartItems, setCartItems] = useState({});
//     const [products, setProducts] = useState([]);
//     const [token, setToken] = useState('');
//     const navigate = useNavigate();

//     // Add to cart with variantInfo = { variant, color, price }
//     const addToCart = async (itemId, variantInfo) => {
//         if (!variantInfo || !variantInfo.variant) {
//             toast.error('Select Product Variant');
//             return;
//         }
//         let cartData = structuredClone(cartItems);

//         if (cartData[itemId]) {
//             if (cartData[itemId][variantInfo.variant]) {
//                 cartData[itemId][variantInfo.variant].quantity += 1;
//             } else {
//                 cartData[itemId][variantInfo.variant] = {
//                     quantity: 1,
//                     price: variantInfo.price,
//                     color: variantInfo.color,
//                 };
//             }
//         } else {
//             cartData[itemId] = {};
//             cartData[itemId][variantInfo.variant] = {
//                 quantity: 1,
//                 price: variantInfo.price,
//                 color: variantInfo.color,
//             };
//         }

//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(
//                     backendUrl + '/api/cart/add',
//                     { itemId, variant: variantInfo.variant, color: variantInfo.color },
//                     { headers: { token } }
//                 );
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     // Total quantity in cart
//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const itemId in cartItems) {
//             for (const variantName in cartItems[itemId]) {
//                 try {
//                     let item = cartItems[itemId][variantName];
//                     if (item.quantity > 0) {
//                         totalCount += item.quantity;
//                     }
//                 } catch (error) {}
//             }
//         }
//         return totalCount;
//     };

//     // Update quantity for a specific product variant
//     const updateQuantity = async (itemId, variantName, quantity) => {
//         let cartData = structuredClone(cartItems);
//         if (cartData[itemId] && cartData[itemId][variantName]) {
//             if(quantity <= 0) {
//                 // Remove variant from cart
//                 delete cartData[itemId][variantName];
//                 // If no variants left for this itemId, remove itemId
//                 if (Object.keys(cartData[itemId]).length === 0) {
//                     delete cartData[itemId];
//                 }
//             } else {
//                 cartData[itemId][variantName].quantity = quantity;
//             }
//         }
//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(
//                     backendUrl + '/api/cart/update',
//                     { itemId, variant: variantName, quantity },
//                     { headers: { token } }
//                 );
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     // Calculate total amount by summing quantity * price of each variant
//     const getCartAmount = () => {
//         let totalAmount = 0;
//         for (const itemId in cartItems) {
//             for (const variantName in cartItems[itemId]) {
//                 try {
//                     let item = cartItems[itemId][variantName];
//                     if (item.quantity > 0) {
//                         totalAmount += item.price * item.quantity;
//                     }
//                 } catch (error) {}
//             }
//         }
//         return totalAmount;
//     };

//     // Fetch products list
//     const getProductsData = async () => {
//         try {
//             const response = await axios.get(backendUrl + '/api/product/list');
//             if (response.data.success) {
//                 setProducts(response.data.products.reverse());
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     // Fetch user cart from backend
//     const getUserCart = async (token) => {
//         try {
//             const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
//             if (response.data.success) {
//                 setCartItems(response.data.cartData);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     useEffect(() => {
//         getProductsData();
//     }, []);

//     useEffect(() => {
//         if (!token && localStorage.getItem('token')) {
//             setToken(localStorage.getItem('token'));
//             getUserCart(localStorage.getItem('token'));
//         }
//         if (token) {
//             getUserCart(token);
//         }
//     }, [token]);

//     const value = {
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItems,
//         addToCart,
//         setCartItems,
//         getCartCount,
//         updateQuantity,
//         getCartAmount,
//         navigate,
//         backendUrl,
//         setToken,
//         token,
//     };

//     return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
// };

// export default ShopContextProvider;









// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//     const currency = '৳ BDT ';
//     const delivery_fee = 100;
//     const backendUrl = import.meta.env.VITE_BACKEND_URL;
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(false);
//     const [cartItems, setCartItems] = useState({});
//     const [products, setProducts] = useState([]);
//     const [token, setToken] = useState('');
//     const navigate = useNavigate();

//     // Add to cart with optional variantInfo = { variant, color, price }
//     const addToCart = async (itemId, variantInfo) => {
//         // If product has variants, variantInfo must be provided with variant name
//         if (variantInfo && !variantInfo.variant) {
//             toast.error('Select Product Variant');
//             return;
//         }

//         let cartData = structuredClone(cartItems);

//         // For products without variants, use "default" as variant key
//         const variantKey = variantInfo ? variantInfo.variant : 'default';
//         const price = variantInfo ? variantInfo.price : null;
//         const color = variantInfo ? variantInfo.color : null;

//         if (cartData[itemId]) {
//             if (cartData[itemId][variantKey]) {
//                 cartData[itemId][variantKey].quantity += 1;
//             } else {
//                 cartData[itemId][variantKey] = {
//                     quantity: 1,
//                     price: price,
//                     color: color,
//                 };
//             }
//         } else {
//             cartData[itemId] = {};
//             cartData[itemId][variantKey] = {
//                 quantity: 1,
//                 price: price,
//                 color: color,
//             };
//         }

//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(
//                     backendUrl + '/api/cart/add',
//                     { itemId, variant: variantKey, color },
//                     { headers: { token } }
//                 );
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     const getCartCount = () => {
//         let totalCount = 0;
//         for (const itemId in cartItems) {
//             for (const variantName in cartItems[itemId]) {
//                 try {
//                     let item = cartItems[itemId][variantName];
//                     if (item.quantity > 0) {
//                         totalCount += item.quantity;
//                     }
//                 } catch (error) {}
//             }
//         }
//         return totalCount;
//     };

//     const updateQuantity = async (itemId, variantName, quantity) => {
//         let cartData = structuredClone(cartItems);
//         if (cartData[itemId] && cartData[itemId][variantName]) {
//             if(quantity <= 0) {
//                 delete cartData[itemId][variantName];
//                 if (Object.keys(cartData[itemId]).length === 0) {
//                     delete cartData[itemId];
//                 }
//             } else {
//                 cartData[itemId][variantName].quantity = quantity;
//             }
//         }
//         setCartItems(cartData);

//         if (token) {
//             try {
//                 await axios.post(
//                     backendUrl + '/api/cart/update',
//                     { itemId, variant: variantName, quantity },
//                     { headers: { token } }
//                 );
//             } catch (error) {
//                 console.log(error);
//                 toast.error(error.message);
//             }
//         }
//     };

//     const getCartAmount = () => {
//         let totalAmount = 0;
//         for (const itemId in cartItems) {
//             for (const variantName in cartItems[itemId]) {
//                 try {
//                     let item = cartItems[itemId][variantName];
//                     if (item.quantity > 0) {
//                         totalAmount += item.price * item.quantity;
//                     }
//                 } catch (error) {}
//             }
//         }
//         return totalAmount;
//     };

//     const getProductsData = async () => {
//         try {
//             const response = await axios.get(backendUrl + '/api/product/list');
//             if (response.data.success) {
//                 setProducts(response.data.products.reverse());
//             } else {
//                 toast.error(response.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     const getUserCart = async (token) => {
//         try {
//             const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
//             if (response.data.success) {
//                 setCartItems(response.data.cartData);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.message);
//         }
//     };

//     useEffect(() => {
//         getProductsData();
//     }, []);

//     useEffect(() => {
//         if (!token && localStorage.getItem('token')) {
//             setToken(localStorage.getItem('token'));
//             getUserCart(localStorage.getItem('token'));
//         }
//         if (token) {
//             getUserCart(token);
//         }
//     }, [token]);

//     const value = {
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItems,
//         addToCart,
//         setCartItems,
//         getCartCount,
//         updateQuantity,
//         getCartAmount,
//         navigate,
//         backendUrl,
//         setToken,
//         token,
//     };

//     return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
// };

// export default ShopContextProvider;

import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '৳ BDT ';
    const delivery_fee = 100;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    // Add to cart with variantInfo = { variant, color, price }
    const addToCart = async (itemId, variantInfo) => {
        // Handle product without variants/colors:
        if (!variantInfo) {
            const product = products.find(p => p._id === itemId);
            if (!product) {
                toast.error('Product not found');
                return;
            }
            variantInfo = {
                variant: 'default',
                color: '',
                price: product.price,
            };
        } else if (!variantInfo.variant) {
            toast.error('Select Product Variant');
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {
            if (cartData[itemId][variantInfo.variant]) {
                cartData[itemId][variantInfo.variant].quantity += 1;
            } else {
                cartData[itemId][variantInfo.variant] = {
                    quantity: 1,
                    price: variantInfo.price,
                    color: variantInfo.color,
                };
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][variantInfo.variant] = {
                quantity: 1,
                price: variantInfo.price,
                color: variantInfo.color,
            };
        }

        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(
                    backendUrl + '/api/cart/add',
                    { itemId, variant: variantInfo.variant, color: variantInfo.color },
                    { headers: { token } }
                );
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    // Total quantity in cart
    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            for (const variantName in cartItems[itemId]) {
                try {
                    let item = cartItems[itemId][variantName];
                    if (item.quantity > 0) {
                        totalCount += item.quantity;
                    }
                } catch (error) {}
            }
        }
        return totalCount;
    };

    // Update quantity for a specific product variant
    const updateQuantity = async (itemId, variantName, quantity) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId] && cartData[itemId][variantName]) {
            if(quantity <= 0) {
                // Remove variant from cart
                delete cartData[itemId][variantName];
                // If no variants left for this itemId, remove itemId
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            } else {
                cartData[itemId][variantName].quantity = quantity;
            }
        }
        setCartItems(cartData);

        if (token) {
            try {
                await axios.post(
                    backendUrl + '/api/cart/update',
                    { itemId, variant: variantName, quantity },
                    { headers: { token } }
                );
            } catch (error) {
                console.log(error);
                toast.error(error.message);
            }
        }
    };

    // Calculate total amount by summing quantity * price of each variant
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            for (const variantName in cartItems[itemId]) {
                try {
                    let item = cartItems[itemId][variantName];
                    if (item.quantity > 0) {
                        totalAmount += item.price * item.quantity;
                    }
                } catch (error) {}
            }
        }
        return totalAmount;
    };

    // Fetch products list
    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list');
            if (response.data.success) {
                setProducts(response.data.products.reverse());
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    // Fetch user cart from backend
    const getUserCart = async (token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } });
            if (response.data.success) {
                setCartItems(response.data.cartData);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getProductsData();
    }, []);

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token'));
        }
        if (token) {
            getUserCart(token);
        }
    }, [token]);

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        setCartItems,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backendUrl,
        setToken,
        token,
    };

    return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;