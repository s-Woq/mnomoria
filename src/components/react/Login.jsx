import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase'; // Adjust the import path as necessary


export default function Login() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error,setError] = useState('');

    // Placeholder handlers for social logins
    const handleGoogleLogin = () => {
      // TODO: Implement Google login
      alert('Google login not implemented');
    };
    const handleFacebookLogin = () => {
      // TODO: Implement Facebook login
      alert('Facebook login not implemented');
    };
    const handleAppleLogin = () => {
      // TODO: Implement Apple login
      alert('Apple login not implemented');
    };

    const handleSubmit=async (e) => {
        e.preventDefault();
        setError('');

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in:', userCredential.user);
        } catch (err) {
            console.error('Error signing in:', err);
            setError(err.message);
        }
    };

    return (
    <div className="flex items-center justify-center  min-h-screen bg-[rgb(20,20,20)]">
      <div className="w-full max-w-md bg-black rounded-xl shadow-md p-6">
        <div className="flex justify-center mb-2 w-full h-18 align-middle ">
          <a href="/"><img src="/img/logo.png" alt="logo" className="w-20 h-20" /></a>
        </div>
        <p className="text-white text-center p-4 m-3 font-bold text-2xl">
          Inicia Sesion en <b>Mnomoria</b>
        </p>

       
        {/* Social login buttons */}
        <div className="mt-6 space-y-3">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition"
          >
            Sign in with Google 
          </button>
          {/* <button
            onClick={handleFacebookLogin}
            className="w-full bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition"
          >
            Sign in with Facebook
          </button> */}
          <button
            onClick={handleAppleLogin}
            className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition"
          >
            Sign in with Apple
          </button>

          <p className='p-4 m-4 text-3xl text-white text-center'>o</p>
          <p className='p-4 m-4 text-white text-xl text-center'>Continua Con</p>


             {/* Email/Password form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Sign In
          </button>
          <p className="text-white text-center">
              Don't have an account? <a href="/register" className="text-blue-400 hover:underline">Register</a> </p>

        </form>

        </div>
      </div>
    </div>
  );
}