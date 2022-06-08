import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const useCollection = (collection) => {
  const error = ref(null);
  console.log(collection);
  const addDoc = async (doc) => {
    const error = null;
    console.log(doc);
    try {
      await projectFirestore.collection(collection).add(doc);
    } catch (err) {
      console.log(err, message);
      error.value = "Could not send the message";
    }
  };
  return { error, addDoc };
};

export default useCollection;
