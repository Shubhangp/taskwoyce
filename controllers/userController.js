const User = require('../models/userModel');

exports.getUser = async(req, res) => {
    try{
        const user = await User.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.createUser = async(req,res) => {
    try{
        const newUser = await User.create(req.body);
        return res.status(201).json({
            status: 'success',
            data: {
                user: newUser
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.updateUser = async(req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
        if(!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'User not found'
            })
        }

        return res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    } catch (err){
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}

exports.deleteUser = async(req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id, {
           new: true, runValidators: true
        })

        if(!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'User not found'
            })
        }

        return res.status(200).json({
            status: 'success',
            data: {
                user
            },
            message: 'User delete successfully'
        })

    }catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        })
    }
}