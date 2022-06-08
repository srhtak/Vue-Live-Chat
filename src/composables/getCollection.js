import { ref, watchEffect } from "vue";
import { projectFirestore } from "@/firebase/config";

const getCollection = (collection) => {
  const error = ref(null);
  const documents = ref(null);

  let collectionRef = projectFirestore
    .collection(collection)
    .orderBy("createdAt");

  const unsub = collectionRef.onSnapshot(
    (snap) => {
      console.log("snapshot");
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

  watchEffect((onValidate) => {
    onValidate(() => unsub());
  });

  return { error, documents };
};

export default getCollection;
