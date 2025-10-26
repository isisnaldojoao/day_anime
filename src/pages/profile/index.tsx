import { useState, useEffect } from "react";
import { auth, storage } from "../../firebaseConfig";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import  barusu  from '../../assets/38ae4ac6c3104b60b0fd3afb4e36442b.jpg';

export function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [displayName, setDisplayName] = useState("");
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // 🔍 Carrega o usuário atual do Firebase Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setDisplayName(currentUser.displayName || "");
        setPreview(currentUser.photoURL || null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleUpload = async () => {
    if (!photo || !user) return;
    setLoading(true);

    try {
      const storageRef = ref(storage, `users/${user.uid}/profile.jpg`);
      await uploadBytes(storageRef, photo);
      const downloadURL = await getDownloadURL(storageRef);

      await updateProfile(user, {
        displayName,
        photoURL: downloadURL,
      });

      alert("Perfil atualizado com sucesso!");
      setPreview(downloadURL);
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  if (!user) {
    return (
      <main className="flex justify-center items-center min-h-screen text-white">
        <h2>Você precisa estar logado para acessar esta página.</h2>
      </main>
    );
  }

  return (
    <main className="flex justify-center items-center  text-white">
      <section className="flex flex-col items-center justify-center bg-white/10 p-10 rounded-2xl shadow-lg w-[90%] max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Meu Perfil</h1>

        <div>
          <h1><span className="font-bold">Nome:</span> {user.displayName}</h1>
        </div>

        <img src={barusu} alt="Preview" className="w-15 h-15 rounded-xl mb-4 mx-auto" />

        <div className="mt-6">
            <h2 className="font-bold">Serviços:</h2>
            <button
            onClick={() => alert("Em breve: seus favoritos!")}
            className="text-blue-400 bg-white p-2 rounded-lg p-4 mt-2 hover:bg-white/80 transition"
            >
            Ver meus favoritos
          </button>
        </div>
      </section>
    </main>
  );
}
