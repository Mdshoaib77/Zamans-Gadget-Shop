// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";

// // Placing orders using COD Method
// const placeOrder = async (req, res) => {
//     try {
//         const { userId, items, amount, address } = req.body;

//         const orderData = {
//             userId,
//             items,
//             address,
//             amount,
//             paymentMethod: "COD",
//             payment: false,
//             date: Date.now()
//         };

//         const newOrder = new orderModel(orderData);
//         await newOrder.save();

//         await userModel.findByIdAndUpdate(userId, { cartData: {} });

//         res.json({ success: true, message: "Order Placed" });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // All Orders data for Admin Panel
// const allOrders = async (req, res) => {
//     try {
//         const orders = await orderModel.find({});
//         res.json({ success: true, orders });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // User Order Data For Frontend
// const userOrders = async (req, res) => {
//     try {
//         const { userId } = req.body;

//         const orders = await orderModel.find({ userId });
//         res.json({ success: true, orders });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // Update order status from Admin Panel
// const updateStatus = async (req, res) => {
//     try {
//         const { orderId, status } = req.body;

//         await orderModel.findByIdAndUpdate(orderId, { status });
//         res.json({ success: true, message: 'Status Updated' });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// export { placeOrder, allOrders, userOrders, updateStatus };


// import orderModel from "../models/orderModel.js"; 
// import userModel from "../models/userModel.js";

// // Placing orders using COD Method
// const placeOrder = async (req, res) => {
//     try {
//         const { userId, items, amount, address } = req.body;

//         // Validation for just Full Name, Phone, and Address
//         if (!userId || !items || !amount || !address?.fullName || !address?.phone || !address?.address) {
//             return res.json({ success: false, message: "Missing required fields" });
//         }

//         const orderData = {
//             userId,
//             items,
//             address, // fullName, phone, address (string)
//             amount,
//             paymentMethod: "COD",
//             payment: false,
//             date: Date.now()
//         };

//         const newOrder = new orderModel(orderData);
//         await newOrder.save();

//         await userModel.findByIdAndUpdate(userId, { cartData: {} });

//         res.json({ success: true, message: "Order Placed" });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // All Orders data for Admin Panel
// const allOrders = async (req, res) => {
//     try {
//         const orders = await orderModel.find({});
//         res.json({ success: true, orders });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // User Order Data For Frontend
// const userOrders = async (req, res) => {
//     try {
//         const { userId } = req.body;

//         const orders = await orderModel.find({ userId });
//         res.json({ success: true, orders });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // Update order status from Admin Panel
// const updateStatus = async (req, res) => {
//     try {
//         const { orderId, status } = req.body;

//         await orderModel.findByIdAndUpdate(orderId, { status });
//         res.json({ success: true, message: 'Status Updated' });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// export { placeOrder, allOrders, userOrders, updateStatus };


// import orderModel from "../models/orderModel.js"; 
// import userModel from "../models/userModel.js";

// // Placing orders using COD Method
// const placeOrder = async (req, res) => {
//     try {
//         const { userId, items, amount, address } = req.body;

//         // Validate required fields including nested address fields
//         if (!userId || !items || !amount || !address?.fullName || !address?.phone || !address?.address) {
//             return res.json({ success: false, message: "Missing required fields" });
//         }

//         // items array structure example:
//         // [{
//         //    productId: "...",
//         //    quantity: 1,
//         //    variant: {          // <-- variant info included here
//         //      variantName: "4/64",
//         //      color: "Red",
//         //      price: 15000
//         //    }
//         // }]

//         const orderData = {
//             userId,
//             items,            // save full items with variant info intact
//             address,
//             amount,
//             paymentMethod: "COD",
//             payment: false,
//             date: Date.now()
//         };

//         const newOrder = new orderModel(orderData);
//         await newOrder.save();

//         // Clear user's cart after order placement
//         await userModel.findByIdAndUpdate(userId, { cartData: {} });

//         res.json({ success: true, message: "Order Placed" });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // Fetch all orders for Admin Panel
// const allOrders = async (req, res) => {
//     try {
//         const orders = await orderModel.find({});
//         res.json({ success: true, orders });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // Fetch orders for a specific user (frontend)
// const userOrders = async (req, res) => {
//     try {
//         const { userId } = req.body;

//         const orders = await orderModel.find({ userId });
//         res.json({ success: true, orders });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // Update order status from Admin Panel
// const updateStatus = async (req, res) => {
//     try {
//         const { orderId, status } = req.body;

//         await orderModel.findByIdAndUpdate(orderId, { status });
//         res.json({ success: true, message: 'Status Updated' });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// export { placeOrder, allOrders, userOrders, updateStatus };


// import orderModel from "../models/orderModel.js"; 
// import userModel from "../models/userModel.js";

// // Placing orders using COD Method
// const placeOrder = async (req, res) => {
//     try {
//         // Get userId from auth middleware (recommended)
//         const userId = req.user._id;

//         const { items, amount, address } = req.body;

//         // Validate required fields including nested address fields
//         if (!items || !amount || !address?.fullName || !address?.phone || !address?.address) {
//             return res.json({ success: false, message: "Missing required fields" });
//         }

//         // items array structure example:
//         // [{
//         //    productId: "...",
//         //    quantity: 1,
//         //    variant: {          // <-- variant info included here
//         //      variantName: "4/64",
//         //      color: "Red",
//         //      price: 15000
//         //    }
//         // }]

//         const orderData = {
//             userId,
//             items,            // save full items with variant info intact
//             address,
//             amount,
//             paymentMethod: "COD",
//             payment: false,
//             date: Date.now(),
//             status: "Pending" // initial status
//         };

//         const newOrder = new orderModel(orderData);
//         await newOrder.save();

//         // Clear user's cart after order placement
//         await userModel.findByIdAndUpdate(userId, { cartData: {} });

//         res.json({ success: true, message: "Order Placed" });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // Fetch all orders for Admin Panel
// const allOrders = async (req, res) => {
//     try {
//         const orders = await orderModel.find({});
//         res.json({ success: true, orders });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // Fetch orders for a specific user (frontend)
// const userOrders = async (req, res) => {
//     try {
//         // get userId from auth middleware instead of body
//         const userId = req.user._id;

//         const orders = await orderModel.find({ userId });
//         res.json({ success: true, orders });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // Update order status from Admin Panel
// const updateStatus = async (req, res) => {
//     try {
//         const { orderId, status } = req.body;

//         await orderModel.findByIdAndUpdate(orderId, { status });
//         res.json({ success: true, message: 'Status Updated' });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// export { placeOrder, allOrders, userOrders, updateStatus };


// import orderModel from "../models/orderModel.js"; 
// import userModel from "../models/userModel.js";

// // ✅ Placing orders using COD Method
// const placeOrder = async (req, res) => {
//     try {
//         const userId = req.user._id;
//         const { items, amount, address } = req.body;

//         if (!items || !amount || !address?.fullName || !address?.phone || !address?.address) {
//             return res.json({ success: false, message: "Missing required fields" });
//         }

//         // ✅ Clean and ensure color + variant values are saved
//         const orderItems = items.map(item => ({
//             productId: item.productId,
//             quantity: item.quantity,
//             variant: {
//                 variantName: item.variant?.variantName || "N/A",
//                 color: {
//                     name: item.variant?.color?.name || "N/A",
//                     code: item.variant?.color?.code || "#000000"
//                 },
//                 price: item.variant?.price || 0
//             }
//         }));

//         const orderData = {
//             userId,
//             items: orderItems,
//             address,
//             amount,
//             paymentMethod: "COD",
//             payment: false,
//             date: Date.now(),
//             status: "Pending"
//         };

//         const newOrder = new orderModel(orderData);
//         await newOrder.save();

//         await userModel.findByIdAndUpdate(userId, { cartData: {} });

//         res.json({ success: true, message: "Order Placed" });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // ✅ Fetch all orders for Admin Panel
// const allOrders = async (req, res) => {
//     try {
//         const orders = await orderModel.find({});
//         res.json({ success: true, orders });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // ✅ Fetch orders for a specific user
// const userOrders = async (req, res) => {
//     try {
//         const userId = req.user._id;
//         const orders = await orderModel.find({ userId });
//         res.json({ success: true, orders });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // ✅ Update order status from Admin Panel
// const updateStatus = async (req, res) => {
//     try {
//         const { orderId, status } = req.body;
//         await orderModel.findByIdAndUpdate(orderId, { status });
//         res.json({ success: true, message: 'Status Updated' });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// export { placeOrder, allOrders, userOrders, updateStatus };


// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";

// // ✅ Placing orders using COD Method
// const placeOrder = async (req, res) => {
//     try {
//         const userId = req.user._id;
//         const { items, amount, address } = req.body;

//         if (!items || !amount || !address?.fullName || !address?.phone || !address?.address) {
//             return res.json({ success: false, message: "Missing required fields" });
//         }

//         // ✅ Clean and ensure color + variant values are saved
//         const orderItems = items.map(item => ({
//             productId: item.productId,
//             quantity: item.quantity,
//             variant: {
//                 variantName: item.variant?.variantName || "N/A",
//                 color: {
//                     name: item.variant?.color?.name || "N/A",
//                     code: item.variant?.color?.code || "#000000"
//                 },
//                 price: item.variant?.price || 0
//             }
//         }));

//         const orderData = {
//             userId,
//             items: orderItems,
//             address,
//             amount,
//             paymentMethod: "COD",
//             payment: false,
//             date: Date.now(),
//             status: "Pending"
//         };

//         const newOrder = new orderModel(orderData);
//         await newOrder.save();

//         await userModel.findByIdAndUpdate(userId, { cartData: {} });

//         res.json({ success: true, message: "Order Placed" });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // ✅ Fetch all orders for Admin Panel
// const allOrders = async (req, res) => {
//     try {
//         const orders = await orderModel.find({}).lean(); // <-- Added .lean() for cleaner/faster objects
//         res.json({ success: true, orders });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // ✅ Fetch orders for a specific user
// const userOrders = async (req, res) => {
//     try {
//         const userId = req.user._id;
//         const orders = await orderModel.find({ userId }).lean();
//         res.json({ success: true, orders });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // ✅ Update order status from Admin Panel
// const updateStatus = async (req, res) => {
//     try {
//         const { orderId, status } = req.body;
//         await orderModel.findByIdAndUpdate(orderId, { status });
//         res.json({ success: true, message: 'Status Updated' });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// export { placeOrder, allOrders, userOrders, updateStatus };

// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";
// import productModel from "../models/productModel.js";  // Path thik ache kina check korun

// // Placing orders using COD Method
// const placeOrder = async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const { items, amount, address } = req.body;

//     if (!items || !amount || !address?.fullName || !address?.phone || !address?.address) {
//       return res.json({ success: false, message: "Missing required fields" });
//     }

//     // Promise.all diye async map kore product details shoho items ready kora hocche
//     const orderItems = await Promise.all(
//       items.map(async (item) => {
//         const product = await productModel.findById(item.productId).lean();

//         return {
//           productId: item.productId,
//           name: product?.name || "N/A",
//           image: product?.image?.[0] || "",
//           quantity: item.quantity,
//           variant: {
//             variantName: item.variant?.variantName || "N/A",
//             color: {
//               name: item.variant?.color?.name || "N/A",
//               code: item.variant?.color?.code || "#000000",
//             },
//             price: item.variant?.price || 0,
//           },
//         };
//       })
//     );

//     const orderData = {
//       userId,
//       items: orderItems,
//       address,
//       amount,
//       paymentMethod: "COD",
//       payment: false,
//       date: Date.now(),
//       status: "Pending",
//     };

//     const newOrder = new orderModel(orderData);
//     await newOrder.save();

//     // Clear user's cart
//     await userModel.findByIdAndUpdate(userId, { cartData: {} });

//     res.json({ success: true, message: "Order Placed" });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // Fetch all orders for Admin Panel
// const allOrders = async (req, res) => {
//   try {
//     const orders = await orderModel.find({}).lean();
//     res.json({ success: true, orders });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // Fetch orders for a specific user
// const userOrders = async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const orders = await orderModel.find({ userId }).lean();
//     res.json({ success: true, orders });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// // Update order status from Admin Panel
// const updateStatus = async (req, res) => {
//   try {
//     const { orderId, status } = req.body;
//     await orderModel.findByIdAndUpdate(orderId, { status });
//     res.json({ success: true, message: 'Status Updated' });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: error.message });
//   }
// };

// export { placeOrder, allOrders, userOrders, updateStatus };


// import orderModel from "../models/orderModel.js"; 
// import userModel from "../models/userModel.js";

// // Placing orders using COD Method
// const placeOrder = async (req, res) => {
//     try {
//         // Get userId from auth middleware (recommended)
//         const userId = req.user._id;

//         const { items, amount, address } = req.body;

//         // Validate required fields including nested address fields
//         if (!items || !amount || !address?.fullName || !address?.phone || !address?.address) {
//             return res.json({ success: false, message: "Missing required fields" });
//         }

//         // items array structure example:
//         // [{
//         //    productId: "...",
//         //    quantity: 1,
//         //    variant: {          // <-- variant info included here
//         //      variantName: "4/64",
//         //      color: "Red",
//         //      price: 15000
//         //    }
//         // }]

//         const orderData = {
//             userId,
//             items,            // save full items with variant info intact
//             address,
//             amount,
//             paymentMethod: "COD",
//             payment: false,
//             date: Date.now(),
//             status: "Pending" // initial status
//         };

//         const newOrder = new orderModel(orderData);
//         await newOrder.save();

//         // Clear user's cart after order placement
//         await userModel.findByIdAndUpdate(userId, { cartData: {} });

//         res.json({ success: true, message: "Order Placed" });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // Fetch all orders for Admin Panel
// const allOrders = async (req, res) => {
//     try {
//         const orders = await orderModel.find({});
//         res.json({ success: true, orders });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // Fetch orders for a specific user (frontend)
// const userOrders = async (req, res) => {
//     try {
//         // get userId from auth middleware instead of body
//         const userId = req.user._id;

//         const orders = await orderModel.find({ userId });
//         res.json({ success: true, orders });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// // Update order status from Admin Panel
// const updateStatus = async (req, res) => {
//     try {
//         const { orderId, status } = req.body;

//         await orderModel.findByIdAndUpdate(orderId, { status });
//         res.json({ success: true, message: 'Status Updated' });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// export { placeOrder, allOrders, userOrders, updateStatus };



import orderModel from "../models/orderModel.js"; 
import userModel from "../models/userModel.js";

// Placing orders using COD Method
const placeOrder = async (req, res) => {
    try {
        const userId = req.user._id;
        const { items, amount, address } = req.body;

        if (!items || !amount || !address?.fullName || !address?.phone || !address?.address) {
            return res.json({ success: false, message: "Missing required fields" });
        }

        // Format items with variant and color info
        const formattedItems = items.map((item) => ({
            productId: item.productId || item._id,
            name: item.name,
            quantity: item.quantity,
            price: item.variant?.price || item.price,
            variant: item.variant?.variantName || "N/A",
            color: item.variant?.color || "N/A",
        }));

        const orderData = {
            userId,
            items: formattedItems,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),
            status: "Pending"
        };

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        // Clear user's cart after order placement
        await userModel.findByIdAndUpdate(userId, { cartData: {} });

        res.json({ success: true, message: "Order Placed" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Fetch all orders for Admin Panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({});
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Fetch orders for a specific user (frontend)
const userOrders = async (req, res) => {
    try {
        const userId = req.user._id;
        const orders = await orderModel.find({ userId });
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Update order status from Admin Panel
const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body;
        await orderModel.findByIdAndUpdate(orderId, { status });
        res.json({ success: true, message: 'Status Updated' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { placeOrder, allOrders, userOrders, updateStatus };
