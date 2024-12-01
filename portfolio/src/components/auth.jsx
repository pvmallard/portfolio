import { useState } from "react";
import { auth, googleProvider } from "../config/firebase.js"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

export default function Auth() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // console.log(auth.currentUser.email)

    async function signIn() {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    }
    
    async function signInWithGoogle() {
        try{
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    }

    async function logout() {
        try{
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <input 
                placeholder="Email..." 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                placeholder="Password..."
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}>Sign In</button>

            <button onClick={signInWithGoogle}> Sign In With Google</button>

            <button onClick={logout}> Logout </button>
        </div>
    );
}