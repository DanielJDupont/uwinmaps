import React from "react";

import { signInWithGoogle } from "../../../firebase/firebase.utils";

function Register() {
  return (
    <div>
      <form class="p-3">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Login
        </button>
        <button onClick={signInWithGoogle} class="btn btn-primary">
          Sign in with Google
        </button>
        <p onClick={signInWithGoogle}>Click here to sign in with google</p>
      </form>
    </div>
  );
}

export default Register;
