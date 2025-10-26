import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebaseConfig";
import Google from '../../assets/Google__G__logo.svg.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const userInfo = result.user;
      setUser(userInfo);
      
      localStorage.setItem('user', JSON.stringify(userInfo));

      console.log("Usuário logado:", userInfo);

      navigate('/');
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <main className="flex justify-center items-start min-h-screen pt-32 px-4">
      <section className="flex flex-col items-center justify-center bg-white/10 p-10 rounded-2xl shadow-lg">
        {!user && (
          <>
            <h1 className="text-2xl font-bold text-white">Realizar Login</h1>

            <div>
              <button
                onClick={handleGoogleLogin}
                className="flex text-black font-bold items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow mt-4"
              >
                Login com Google
                <img width={20} src={Google} alt="Login com Google" />
              </button>
            </div>
          </>
        )}

        {user && (
          <div className="mt-6 items-center text-white text-center">
            <p>Bem-vindo, {user.displayName}!</p>
          </div>
        )}
      </section>
    </main>
  );
}
