const SignIn = (jwt: string) => {
    localStorage.setItem('jwt', jwt);
}

const isSignedIn = () => !!localStorage.getItem('jwt');

const getJWT = () => localStorage.getItem('jwt');

const SignOut = () => localStorage.clear();

export default {
    SignIn,
    isSignedIn,
    getJWT,
    SignOut
};