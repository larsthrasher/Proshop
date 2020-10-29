import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
  },
  {
    name: "Butts Galante",
    email: "buttsgalante@kerryfordhonda.com",
    password: bcrypt.hashSync("123456", 10)
  },
  {
    name: "The Devil",
    email: "satan@hell.com",
    password: bcrypt.hashSync("123456", 10)
  }
];

export default users;
