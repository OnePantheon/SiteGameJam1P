import database from '$lib/server/database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { fail } from '@sveltejs/kit';


export const actions = {
    login : async ({request, cookies}) => {
        console.log("login");
        const loginFormData = await request.formData();
        const username = loginFormData.get("username");
        const password = loginFormData.get("password");

        console.log(username);
        let user = await database.getUserByName(username);

        console.log(user);
        let result = {
            error: false,
            message: "",
            username: ""
        }

        if(user){
            console.log(password);
            console.log(user.passwordHash);
            if(await bcrypt.compare(password, user.passwordHash)){
                result.username = user.username;
                cookies.set("userToken", 
                jwt.sign({username: user.username}, process.env.JWT_SECRET, {expiresIn: "24h"})
                ,{
                    path: "/",
                    maxAge: 60 * 60 * 24,
                    httpOnly: true,
                    sameSite: "strict",
                    secure: true
                })
                return result;
            }
        }
        
        result.error = true;
        result.message = "Invalid username or password";
        console.log(result);
        return result;
    },

    register : async ({request, cookies}) => {
        console.log("register");
        const loginFormData = await request.formData();
        const username = loginFormData.get("username");
        const password = loginFormData.get("password");
        const email = loginFormData.get("email");
        console.log(email);

        let userQuery = await database.getUserByName(username);
        console.log(userQuery);

        let result = {
            error: false,
            message: "",
            username: ""
        }

        if(userQuery){
            result.error = true;
            result.message = "Username is already taken";
            return result;
        }

        let hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        let newUser = await database.createUser(username, email, hashedPassword);
        console.log(newUser);
        
        result.username = newUser.username;
        cookies.set("userToken", 
            jwt.sign({username: newUser.username}, process.env.JWT_SECRET, {expiresIn: "24h"})
            ,{
                path: "/",
                maxAge: 60 * 60 * 24,
                httpOnly: true,
                sameSite: "strict",
                secure: true
            })
        return result;
    },

    isLogin: async ({request, cookies}) => {
        let result = {
            error: false,
            message: "",
            username: ""
        }

        let token = cookies.get("userToken");

        if(!token){
            result.error = true;
            result.message = "Not logged in";
            return result;
        }

        let decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        if(!decodedToken){
            result.error = true;
            result.message = "Invalid token";
            return result;
        }

        result.username = decodedToken.username;
        return result;
    },

    logout: async ({request, cookies}) => {
        cookies.set("userToken", "", {
            path: "/",
            maxAge: 0,
            httpOnly: true,
            sameSite: "strict",
            secure: true
        })
    }
}