export async function handle({ event, resolve }) {
    event.locals.authedUser = undefined;
    try{
        let token = event.cookie.get("userToken");
        if(!token) throw new Error("No token");
        
        let decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        event.locals.authedUser = decodedToken.username;

    }
    finally{
        return await resolve(event);
    }
}