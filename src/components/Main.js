import React, { useState } from "react";
import {
  doc,
  setDoc,
  getFirestore,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { app } from "../firebaseConfig";

const Main = () => {
  const db = getFirestore(app);

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      form.description.trim().length !== 0 &&
      form.description.trim().length !== 0
    ) {
      const docRef = addDoc(collection(db, "tasks"), {
        title: form.title.trim(),
        description: form.description.trim(),
      }).then((res) => console.log(res.id));
      setForm({ title: "", description: "" });
    }
  };

  //   const handleDelete = async () => {
  //     deleteDoc(collection(db, "tasks"))
  //       .then((res) => console.log(res))
  //       .catch((err) => console.log(err));
  //   };

  const [dataArray, setDataArray] = useState([]);
  getDocs(collection(db, "tasks")).then((res) =>
    setDataArray(res.docs.map((doc) => doc.data()))
  );
  return (
    <div className="col-span-10 flex gap-2  flex-wrap ">
      {dataArray.map((task, i) => (
        <div key={i} className="bg-cardBg w-fit h-fit p-5 rounded-md">
          <h1 className="text-2xl leading-10">{task.title.toUpperCase()}</h1>
          <p className="text-zinc-500">{task.description}</p>
        </div>
      ))}

      <div>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 gap-5 w-fit p-5 flex flex-col rounded-xl"
        >
          <input
            className="text-2xl bg-transparent focus:outline-none focus:border-b focus:border-orange border-b border-transparent leading-10"
            placeholder="Title"
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
          />
          <input
            className="text-zinc-500 bg-transparent border-b border-transparent focus:border-orange focus:outline-none focus:border-b pl-1 "
            placeholder="Description"
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="border text-left w-fit px-6 py-2 rounded-full hover:bg-slate-800"
          >
            Submit
          </button>
        </form>
        {/* <button
          className="border text-left w-fit px-6 py-2 rounded-full hover:bg-slate-800"
          onClick={handleDelete}
        >
          Delete
        </button> */}
      </div>
    </div>
  );
};

export default Main;
