import UserSchema from "../Model/User.schema.js";
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
    try{
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

    const hashedPassword = await bcrypt.hashSync(password, 10)
    // console.log(hashedPassword, password)
    
    const user = new UserSchema({
        name: name,
        email: email,
        password: hashedPassword
        // confirmPassword: confirmPassword
    })
    await user.save()
    return res.send("User Succesfully Stored in DB")


    // res.send(name)
    // res.send("Register")

    } catch (error){
        return res.status(500).json({ error })
    } 
}

export const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(401).json({success: false, message: "Email and password both are required."})
        }

        const user = await UserSchema.findOne({ email: email })
        if(!user) {
            return res.status(404).json({ success: false, message: "User not exists."})
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect){
            return res.status(404).json({success: false, message: "Password is incorrect"})
        }

        return res.status(200).json({ success: true, message: "Login Successfull"})
    }
    catch(error){
        return res.status(500).json({ success: false, error: error})
    }
}