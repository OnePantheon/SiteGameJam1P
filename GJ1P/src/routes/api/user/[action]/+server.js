export async function POST({request, cookies}){
    const {action} = request.params;

    switch(action){
        case "login":
            return await login(request, cookies);
        case "logout":
            return await logout(cookies);
        case "register":
            return await register(request, cookies);
    }
}

async function login(request, cookies){
    const {email, password} = request.body;

    let user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(user){
        if(await bcrypt.compare(password, user.password)){
            cookies.set("user", user.id, {
                path: "/",
                maxAge: 60 * 60 * 24 * 7
            });

            return {
                status: 200,
                body: {
                    message: "Logged in"
                }
            }
        }
    }

    return {
        status: 401,
        body: {
            message: "Invalid username or password"
        }
    }
}

async function logout(cookies){
    cookies.set("user", "", {
        path: "/",
        maxAge: 0
    });

    return {
        status: 200,
        body: {
            message: "Logged out"
        }
    }
}

async function register(request, cookies){
    const {username, email, password} = request.body;

    let user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(user){
        return {
            status: 409,
            body: {
                message: "User already exists"
            }
        }
    }

    let hashedPassword = await bcrypt.hash(password, 10);

    let newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword
        }
    });

    cookies.set("user", newUser.id, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7
    });

    return {
        status: 200,
        body: {
            message: "Registered"
        }
    }
}