import UserSchema from "../Model/User.schema.js";

export const register = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    if(!name || !email || !password  || !confirmPassword){
        return res.send("All fields are required")
    }

    if(password != confirmPassword){
        return res.send("Password and confirm password are not same")
    }

    const isEmailExist = await UserSchema.find({ email: email})
    if (isEmailExist.length){
        return res.send("Email is exist")
    }
    
    const user = new UserSchema({
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    })
    await user.save()
    res.send("User Succesfully Stored in DB")


    // res.send(name)
    // res.send("Register")
}