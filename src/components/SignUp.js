import { useState } from "react";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import Navbar from "./Navbar";
import Footer from "./Footer";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      console.error("Sign-up Error:", error);
    }
  };

  return (
    <div>
         
          <h2>SignUp</h2>
          <p>Welcome to our Library Management SignUp</p>
      {!user ? (
        <form onSubmit={handleSignUp}>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <>
          <p>Welcome, {user.email}!</p>
          <button onClick={() => signOut(auth)}>Logout</button>
        </>
      )}
       
    </div>
  );
};

export default SignUp;
  