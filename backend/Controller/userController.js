import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generatetoken from '../util/generateToken.js';

// @desc Fetch auth user
// @route /api/user/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generatetoken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc Fetch user profile
// @route /api/user/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const user = await User.findById({ _id });
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generatetoken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('User not found')
    }
})

// @desc Register User
// @route /api/user
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400);
        throw new Error('Email is already in used')
    }

    const user = await User.create({
        name,
        email,
        password
    })
    if (user) {
        res.status(200)
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generatetoken(user._id)
        })
    } else {
        res.status(400);
        throw new Error('Invalid user data')
    }
})

export { authUser, registerUser, getUserProfile }