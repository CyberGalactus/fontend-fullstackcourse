const signIn = (jwt: string) => {
    localStorage.setItem('jwt', jwt);
}

const isSignedIn = () => !!localStorage.getItem('jwt');

const getJWT = () => localStorage.getItem('jwt');

const signOut = () => localStorage.clear();

export default {
    signIn,
    signOut,
    isSignedIn,
    getJWT
}