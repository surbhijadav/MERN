const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");
const User = require("../models/user_model");

mongoose.connect("mongodb://127.0.0.1:27017/mern_admin");

const generateUsers = async () => {
  try {
    const users = [];

    for (let i = 0; i < 1000; i++) {
      users.push({
        username: faker.person.firstName(),
        email: faker.internet.email(),
        phone: faker.phone.number("9#########"),
        password: "123456",
        isAdmin: false,
      });
    }

    await User.insertMany(users);

    console.log("✅ 1000 demo users inserted successfully!");
    process.exit();

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

generateUsers();