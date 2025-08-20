import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../lib/firebase'; // adjust path if needed

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');

  // Placeholder social logins
  const handleGoogleRegister = () => alert('Google signup not implemented');
  const handleAppleRegister = () => alert('Apple signup not implemented');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (displayName) {
        await updateProfile(user, { displayName });
      }

      console.log('User registered:', user);
      // redirect or show success message here
    } catch (err) {
      console.error('Error registering:', err);
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[rgb(20,20,20)]">
      <div className="w-full max-w-md bg-black rounded-xl shadow-md p-6">
        <div className="flex justify-center mb-2">
          <a href="/"><img src="/img/logo.png" alt="logo" className="w-20 h-20" /></a>
        </div>
        <p className="text-white text-center p-4 m-3 font-bold text-2xl">
          Crea tu cuenta en <b>Mnomoria</b>
        </p>

        {/* Social register buttons */}
        <div className="mt-6 space-y-3">
          <button
            type="button"
            onClick={handleGoogleRegister}
            className="w-full bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition"
          >
            Sign up with Google
          </button>
          <button
            type="button"
            onClick={handleAppleRegister}
            className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition"
          >
            Sign up with Apple
          </button>
        </div>

        <p className="p-4 m-4 text-3xl text-white text-center">o</p>
        <p className="p-4 m-4 text-white text-xl text-center">Regístrate con tu email</p>

        {/* Email/Password form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name (optional)"
            className="w-full p-3 border rounded-lg"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 border rounded-lg"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>

        <p className="text-white text-center mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-blue-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
