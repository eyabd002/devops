import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    alert("Account created (demo).");
    navigate("/");
  };

  return (
    <section className="container py-5">
      <h2 className="mb-4">Create Account</h2>
      <form onSubmit={submit} style={{ maxWidth: 420 }}>
        <input className="form-control mb-2" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <input type="password" className="form-control mb-2" placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)} required />
        <button className="btn btn-dark w-100">Create Account</button>
      </form>
    </section>
  );
};

export default Signup;
