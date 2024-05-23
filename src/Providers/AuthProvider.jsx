import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
// import { app } from "../firebase/firebase.config";



export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic()

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //google sign in
    const googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // log out 
    const logout = () => {
        setLoading(true)
        return signOut(auth)

    }

    // update profile:
    const updateUserProfile =(name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName:name,photoURL:photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current ---> ', currentUser);
            if (currentUser) {
                // get token and store client
                const userInfo = {email:currentUser?.email}
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                        localStorage.setItem('access-token',res.data.token)
                    }
                })

            }
            else {
                //TODO: remove token (if token stored in the client side:local storage, catching,in memory)
                localStorage.removeItem('access-token')
                
            }
            setLoading(false)
        });
        return () => {
            return unsubscribe()
        }
    }, [axiosPublic])

    const authInfo = {
        user,
        loading,
        setLoading,
        setUser,
        createUser,
        signInUser,
        logout,
        updateUserProfile,
        googleSignin


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;