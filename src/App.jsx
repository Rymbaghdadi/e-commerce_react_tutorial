import './App.css'
import { useState } from 'react';
import { Route , Routes } from 'react-router-dom'
function App() {

 function HomePage() {
    return <h1>Home Page</h1>
  }

  function AboutPage() {
    return <h1>About Page</h1>
  }


function LoginPage() {
  const [inputName, setInputName] = useState("");
  const [user, setUser] = useState({
    name: "",
    isAuth: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      name: inputName,
      isAuth: true,
    });
  };

  if (user.isAuth) {
    return (
      <div>
        <h2>Welcome {user.name} 🎉</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<h1>404 not found</h1>} />
    </Routes>   
    </>
  )
}

export default App
