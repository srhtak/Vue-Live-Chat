import { ref } from "vue";
import { projectFirestore } from "@/firebase/config";

const getCollection = (collection) => {
  const error = ref(null);
  const documents = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  collectionRef.onSnapshot(
    (snap) => {
      let result = [];
      snap.docs.forEach((doc) => {
        doc.data().createdAt && result.push({ ...doc.data(), id: doc.id });
      });
      documents.value = result;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "could not fetch data";
    }
  );
  return { error, documents };
};

export default getCollection;
