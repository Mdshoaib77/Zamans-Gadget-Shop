// import mongoose from 'mongoose'

// const orderSchema = new mongoose.Schema({
//     userId: { type: String, required: true },
//     items: { type: Array, required: true },
//     amount: { type: Number, required: true },
//     address: { type: Object, required: true },
//     status: { type: String, required: true, default:'Order Placed' },
//     paymentMethod: { type: String, required: true },
//     payment: { type: Boolean, required: true , default: false },
//     date: {type: Number, required:true}
// })

// const orderModel = mongoose.models.order || mongoose.model('order',orderSchema)
// export default orderModel;

// import mongoose from 'mongoose'

// const orderSchema = new mongoose.Schema({
//   userId: { type: String, required: true },
//   items: { type: Array, required: true },
//   amount: { type: Number, required: true },
//   address: {
//     fullName: { type: String, required: true },
//     phone: { type: String, required: true },
//     address: { type: String, required: true }
//   },
//   status: { type: String, required: true, default: 'Order Placed' },
//   paymentMethod: { type: String, required: true },
//   payment: { type: Boolean, required: true, default: false },
//   date: { type: Number, required: true }
// })

// const orderModel = mongoose.models.order || mongoose.model('order', orderSchema)
// export default orderModel;


// import mongoose from 'mongoose'

// const orderItemSchema = new mongoose.Schema({
//   productId: { type: String, required: true },
//   quantity: { type: Number, required: true },
//   variant: {
//     variantName: { type: String, required: true },
//     color: { type: String, required: true },
//     price: { type: Number, required: true }
//   }
// }, { _id: false });

// const orderSchema = new mongoose.Schema({
//   userId: { type: String, required: true },

//   // Now items will be array of orderItemSchema
//   items: { type: [orderItemSchema], required: true },

//   amount: { type: Number, required: true },

//   address: {
//     fullName: { type: String, required: true },
//     phone: { type: String, required: true },
//     address: { type: String, required: true }
//   },

//   status: { type: String, required: true, default: 'Order Placed' },

//   paymentMethod: { type: String, required: true },

//   payment: { type: Boolean, required: true, default: false },

//   date: { type: Number, required: true }
// })

// const orderModel = mongoose.models.order || mongoose.model('order', orderSchema)
// export default orderModel;



// import mongoose from 'mongoose'

// const orderItemSchema = new mongoose.Schema({
//   productId: { type: String, required: true },
//   quantity: { type: Number, required: true },
//   variant: {
//     variantName: { type: String, required: true },  // e.g., "8/128"
//     color: {
//       name: { type: String, required: true },       // e.g., "Lavender"
//       code: { type: String, required: true }        // e.g., "#E6E6FA"
//     },
//     price: { type: Number, required: true }         // selected price (regular or offer)
//   }
// }, { _id: false });

// const orderSchema = new mongoose.Schema({
//   userId: { type: String, required: true },

//   items: { type: [orderItemSchema], required: true },

//   amount: { type: Number, required: true },

//   address: {
//     fullName: { type: String, required: true },
//     phone: { type: String, required: true },
//     address: { type: String, required: true }
//   },

//   status: { type: String, required: true, default: 'Order Placed' },

//   paymentMethod: { type: String, required: true },

//   payment: { type: Boolean, required: true, default: false },

//   date: { type: Number, required: true }
// });

// const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);
// export default orderModel;


// import mongoose from 'mongoose'

// const orderItemSchema = new mongoose.Schema({
//   productId: { type: String, required: true },
//   quantity: { type: Number, required: true },
//   variant: {
//     variantName: { type: String, required: false },  // e.g., "8/128"
//     color: {
//       name: { type: String, required: false },       // e.g., "Lavender"
//       code: { type: String, required: false }        // e.g., "#E6E6FA"
//     },
//     price: { type: Number, required: true }         // selected price (regular or offer)
//   }
// }, { _id: false });

// const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

//   items: { type: [orderItemSchema], required: true },

//   amount: { type: Number, required: true },

//   address: {
//     fullName: { type: String, required: true },
//     phone: { type: String, required: true },
//     address: { type: String, required: true }
//   },

//   status: { type: String, required: true, default: 'Order Placed' },

//   paymentMethod: { type: String, required: true },

//   payment: { type: Boolean, required: true, default: false },

//   date: { type: Number, required: true, default: () => Date.now() }
// });

// const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);
// export default orderModel;


// import mongoose from 'mongoose';

// // Order Item Schema
// const orderItemSchema = new mongoose.Schema({
//   productId: { type: String, required: true },
//   quantity: { type: Number, required: true },
//   variant: {
//     variantName: { type: String, required: false },  // e.g., "8/128"
//     color: {
//       name: { type: String, required: false },       // e.g., "Lavender"
//       code: { type: String, required: false }        // e.g., "#E6E6FA"
//     },
//     price: { type: Number, required: true }          // selected price
//   }
// }, { _id: false });

// // Main Order Schema
// const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

//   items: { type: [orderItemSchema], required: true },

//   amount: { type: Number, required: true },

//   address: {
//     fullName: { type: String, required: true },
//     phone: { type: String, required: true },
//     address: { type: String, required: true }
//   },

//   status: { type: String, required: true, default: 'Order Placed' },

//   paymentMethod: { type: String, required: true },

//   payment: { type: Boolean, required: true, default: false },

//   date: { type: Number, required: true, default: () => Date.now() }
// });

// // Export the model
// const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);
// export default orderModel;


// import mongoose from 'mongoose';

// // Order Item Schema with name and image
// const orderItemSchema = new mongoose.Schema({
//   productId: { type: String, required: true },
//   name: { type: String, required: false },   // Product name for frontend display
//   image: { type: String, required: false },  // Product image URL for frontend display

//   quantity: { type: Number, required: true },
//   variant: {
//     variantName: { type: String, required: false },  // e.g., "8/128"
//     color: {
//       name: { type: String, required: false },       // e.g., "Lavender"
//       code: { type: String, required: false }        // e.g., "#E6E6FA"
//     },
//     price: { type: Number, required: true }          // selected price
//   }
// }, { _id: false });

// // Main Order Schema
// const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

//   items: { type: [orderItemSchema], required: true },

//   amount: { type: Number, required: true },

//   address: {
//     fullName: { type: String, required: true },
//     phone: { type: String, required: true },
//     address: { type: String, required: true }
//   },

//   status: { type: String, required: true, default: 'Order Placed' },

//   paymentMethod: { type: String, required: true },

//   payment: { type: Boolean, required: true, default: false },

//   date: { type: Number, required: true, default: () => Date.now() }
// });

// const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);
// export default orderModel;


// import mongoose from 'mongoose'

// const orderItemSchema = new mongoose.Schema({
//   productId: { type: String, required: true },
//   quantity: { type: Number, required: true },
//   variant: {
//     variantName: { type: String, required: false },  // e.g., "8/128"
//     color: {
//       name: { type: String, required: false },       // e.g., "Lavender"
//       code: { type: String, required: false }        // e.g., "#E6E6FA"
//     },
//     price: { type: Number, required: true }         // selected price (regular or offer)
//   }
// }, { _id: false });

// const orderSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

//   items: { type: [orderItemSchema], required: true },

//   amount: { type: Number, required: true },

//   address: {
//     fullName: { type: String, required: true },
//     phone: { type: String, required: true },
//     address: { type: String, required: true }
//   },

//   status: { type: String, required: true, default: 'Order Placed' },

//   paymentMethod: { type: String, required: true },

//   payment: { type: Boolean, required: true, default: false },

//   date: { type: Number, required: true, default: () => Date.now() }
// });

// const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);
// export default orderModel;

import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  variant: { type: String, required: false },  // e.g., "8/128"
  color: { type: String, required: false },    // e.g., "Lavender"
}, { _id: false });

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

  items: { type: [orderItemSchema], required: true },

  amount: { type: Number, required: true },

  address: {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true }
  },

  status: { type: String, required: true, default: 'Order Placed' },

  paymentMethod: { type: String, required: true },

  payment: { type: Boolean, required: true, default: false },

  date: { type: Number, required: true, default: () => Date.now() }
});

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);
export default orderModel;
