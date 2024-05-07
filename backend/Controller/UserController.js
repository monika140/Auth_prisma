const prisma = require("../DB/db.config");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (findUser) {
    return res.json({
      status: 400,
      message: "Email already Taken. Please use another email.",
    });
  }
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
  return res.json({ status: 200, data: newUser, msg: "User created." });
};
//fetch user
const fetchUsers = async (req, res) => {
  const users = await prisma.user.findMany({
    select: {
      _count: {
        select: {
          post: true,
          comment: true,
        },
      },
    },
  });

  return res.json({ status: 200, data: users });
};
//show data
const showUser = async (req, res) => {
  const userId = req.params.id;
  const user = await prisma.user.findFirst({
    where: {
      id: Number(userId),
    },
  });

  return res.json({ status: 200, data: user });
};

// update user
const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;

  await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      name,
      email,
      password,
    },
  });
  return res.json({
    status: 200,
    msg: "User updated successfully",
  });
};


//delete user
const deleteUser = async (req, res) => {
  const userId = req.params.id;
  await prisma.user.delete({
    where: {
      id: Number(userId),
    },
  });

  return res.json({ status: 200, msg: "User deleted successfully" });
};
module.exports = { createUser, updateUser, fetchUsers, showUser, deleteUser };
