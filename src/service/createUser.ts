

interface userTech {
    title: string;
    experience: number;
} 

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | userTech>;
};


export const createUser = ({name = '', email, password} : CreateUserData)  => {

    const user = {
        name,
        email,
        password,
    };

    return user;
}