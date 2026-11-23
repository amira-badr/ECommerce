import userModel from "../models/userModel.js";

// Add to Cart
const addToCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { id: itemId } = req.body;

    let userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User Not Found"
      });
    }

    let cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.json({
      success: true,
      message: "Added to Cart"
    });

  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message
    });
  }
};

// Remove From Cart
const removeFromCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { id: itemId } = req.body;

    let userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User Not Found"
      });
    }

    if (itemId) {
      if (userData.cartData[itemId]) {
        userData.cartData[itemId] -= 1;

        if (userData.cartData[itemId] <= 0) {
          delete userData.cartData[itemId];
        }
      }
    } else {
      userData.cartData = {};
    }

    await userData.save();

    res.status(200).json({
      success: true,
      message: itemId ? "Item Removed From Cart" : "Cart Cleared Successfully"
    });

  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message
    });
  }
};

// Get Cart
const getCart = async (req, res) => {
  try {
    const userId = req.userId;

    let userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User Not Found"
      });
    }

    res.json({
      success: true,
      cartData: userData.cartData || {}
    });

  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message
    });
  }
};

// Clear Cart
const clearCart = async (req, res) => {
  try {
    const userId = req.userId;

    let userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User Not Found"
      });
    }

    const cartData = userData.cartData || {};

    userData.cartData = {};

    await userData.save();

    res.json({
      success: true,
      message: "Cart Cleared Successfully",
      cartData
    });

  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: err.message
    });
  }
};

export { addToCart, removeFromCart, getCart, clearCart };