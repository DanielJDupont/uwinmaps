import React from "react";

import { signInWithGoogle } from "../../../firebase/firebase.utils";

function Register() {
  return (
    <div>
      <form class="p-3">
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
