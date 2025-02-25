const userModel = require("../models/userModels.js");

const uploadProductPermission = async (userId) => {
  const user = await userModel.findById(userId);

  if (!user) {
    console.log("User not found");
    return false;
  }

  if (user.role !== "ADMIN") {
    return false;
  }

  return true;
};

module.exports = uploadProductPermission;
