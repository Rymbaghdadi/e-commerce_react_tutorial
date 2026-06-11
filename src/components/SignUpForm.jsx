// import { useState } from "react";
import { useForm } from "react-hook-form";
export default function SignUp() {
 const {register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    

    alert(`Account created! with name: ${data.name} email: ${data.email} and password: ${data.password}`);
  };

  return (
    <div>
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Enter your name"
          />
        </div>

        <br />

        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
    
            {...register("email", { required: "Email is required" })}
            placeholder="Enter your email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
 
            {...register("password", { required: true , minLength: {value: 6, message: "Password must be at least 6 characters long"}})}

          />
        </div>

        <br />

        <button type="submit">
          Create Account
        </button>
      </form>

      <hr />

      <h3>Current State</h3>
{/* 
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p> */}
    </div>
  );
}