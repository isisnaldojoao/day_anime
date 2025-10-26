import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { User } from 'lucide-react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { toast } from 'react-hot-toast';

export function LoginIcon() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        localStorage.setItem('user', JSON.stringify(currentUser));
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success(" Deslogado com sucesso!");
    } catch (error) {
      toast.error(" Erro ao deslogar");
      console.error("Erro ao deslogar:", error);
    }
  };

  return (
    <main className="w-[80%] flex items-center justify-end m-4">
      {user ? (
        <section className="group relative flex flex-row-reverse items-center cursor-pointer
          bg-white/10 hover:bg-white/20 border border-white/20
          backdrop-blur-md backdrop-saturate-150 
          p-3 rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300">
          
          <div className="flex flex-col m-2 text-white justify-start">
            <h3 className="flex ml-2 gap-2">
              {user.displayName}
            </h3>

            <div className="flex gap-2">
              <Link to="/profile" className="hover:text-blue-400">Ver Perfil</Link>
              <h3>|</h3>
              <button onClick={handleLogout} className="hover:text-red-400">Sair</button>
            </div>
          </div>
        </section>
      ) : (
        <Link to="/login">
          <section className="group relative flex flex-row-reverse items-center cursor-pointer
            bg-white/10 hover:bg-white/20 border border-white/20
            backdrop-blur-md backdrop-saturate-150 
            p-3 rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300">
            
            <div className="flex items-center m-2 text-white">
              <h3>Entrar</h3>
              <User size={30} color="white" />
            </div> 
          </section>
        </Link>
      )}
    </main>
  );
}
