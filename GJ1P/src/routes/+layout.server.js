import jwt from "jsonwebtoken";

export function load(event){
    let authedUser = undefined;
    try{
        let token = event.cookies.get("userToken");
        if(!token) throw new Error("No token");
        
        let decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        authedUser = decodedToken.username;

    }
    catch(err){
        console.log(err);
    }
    return{
        authedUser: authedUser
    }
}