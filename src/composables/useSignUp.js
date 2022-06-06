import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const signUp = async (email, password, displayName) => {
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Could not complete sign up");
    }
    await res.user.updateProfile({ displayName });
    error.value = null;
    console.log(res.user);
    return res;
  } catch (err) {
    if (err.code == "auth/email-already-in-use") {
      error.value = "The email address is already in use";
    } else if (err.code == "auth/invalid-email") {
      error.value = "The email address is not valid.";
    } else if (err.code == "auth/operation-not-allowed") {
      error.value = "Operation not allowed.";
    } else if (err.code == "auth/weak-password") {
      error.value = "The password is too weak.";
    }
  }
};

const useSignUp = () => {
  return { error, signUp };
};

export default useSignUp;
