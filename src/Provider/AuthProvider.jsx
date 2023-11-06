


/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null) 
 
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)

const AuthProvider = ( {children}) => { 
  const [user , setUser] = useState(null)
  const [loading, setLoading] = useState(true)
 
  //create user 
  const createUser =(email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // userProfile 
  const updateUser =(profile)=>{
    return updateProfile(auth.currentUser, profile)
  }


  //sign in 
  const signIn =(email, password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email, password)
  }

// signIn with Google 
const googleSignIn =()=>{
    return signInWithPopup(auth, googleProvider)
}

// signOut 
const logOut =()=>{
    setLoading(true)
    return signOut(auth)
}

//observer 
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        const userEmail= currentUser?.email || user?.email
        const loggedUser ={email:userEmail}
        setLoading(false)
        if(currentUser){
          axios.post("/jwt", loggedUser, {withCredentials: true})
          .then(res=>{
            console.log("token response", res.data);
          })
        }else{
          axios.post("/logout" ,loggedUser, {withCredentials:true})
                .then(res=>{
                    console.log(res.data);
                })
        }
    })
    return () => {
        unSubscribe()
    }
},[user?.email])

const info ={
    user,
    loading,
    createUser,
    updateUser,
    signIn,
    googleSignIn,
    logOut
}

    return (
        <AuthContext.Provider value={info}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;