/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from "axios";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null) 
 
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)

const AuthProvider = ( {children}) => { 
  const [ user , setUser] = useState(null)
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
      const userEmail= {email:currentUser?.email || user?.email}
      
        setUser(currentUser)
        setLoading(false)
        console.log("currentUser", currentUser);
        
        //if user exists then issue a token
        if(currentUser){
         
          axios.post("https://assignment-11-server-site-project.vercel.app/jwt", userEmail, {withCredentials: true})
          .then(res =>{
            if(res.data)
            console.log("token response", res.data);
          })
        }else{
          axios.post("https://assignment-11-server-site-project.vercel.app/logout", userEmail, {withCredentials: true})
          .then(res=>{
            console.log("logout", res.data);
          })
        }
        
    })
    return () => {
      return  unSubscribe()
       
    }
},[])

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