/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const AuthContext = createContext(null);

const googleAuthProvider = new GoogleAuthProvider();


 const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
  // const name = 'diganto'; 

  const createUser = (email,password) =>{
    setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password)
  }

  const SignInUser = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const signOutUser = () =>{
    setLoading(true);
    return signOut(auth);

  }

  useEffect(()=>{
   const unsubscribed =   onAuthStateChanged(auth,currentUser=>{
          console.log('Current User', currentUser);
          setUser(currentUser);
          setLoading(false);
    })
    return()=>{
      unsubscribed()
    }

  },[])

  const signInGoogle = () =>{
     return signInWithPopup(auth,googleAuthProvider);
  }

  // onAuthStateChanged(auth, currentUser =>{
  //       if(currentUser){
  //         console.log('Currently loged User',currentUser)
  //         setUser(currentUser)
  //       }
  //       else{
  //         console.log('No User Logged In')
  //         setUser(null)
  //       }
  // })

  const authInfo ={

    user,
    loading,
    createUser,
    SignInUser,
    signOutUser,
    signInGoogle

  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

/***
 * 1. create context with null as default 
 * 2. create provider 
 * 3. set as  value with Something AuthInfo
 * 4. [attension please!!!!!!!!!]
 * 5. use the AuthProvider in the main.jsx 
 * 6.Access the children inside the AuthProvider in the main.jsx 
 * 7.export the AuthContext
 */