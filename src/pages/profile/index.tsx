import { useState, useEffect } from "react";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import  barusu  from '../../assets/38ae4ac6c3104b60b0fd3afb4e36442b.jpg';

export function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [, setDisplayName] = useState("");

  // 🔍 Carrega o usuário atual do Firebase Auth
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setDisplayName(currentUser.displayName || "");
      }
    });
    return () => unsubscribe();
  }, []);


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
