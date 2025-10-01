import errorImg from "../Images/errorImg.jpg";
import { Link, useRouteError } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Error = () => {
  const error = useRouteError();

  // Log error in development only
  if (process.env.NODE_ENV === "development") {
    console.error("Route Error:", error);
  }

  // Safe error status extraction with fallback
  const errorStatus = error?.status || error?.response?.status;
  const errorMessage = error?.data?.message || error?.message;

  // Handles 404
  if (errorStatus === 404) {
    return (
      <div className="text-zinc-500 grid text-center justify-center py-20">
        <img src={errorImg} alt="404 error img" className="h-64 w-64 rounded" />
        <h2 className="text-2xl font-bold pt-10">Oups !</h2>
        <p>Page non trouvée</p>
        <p className="text-sm mt-2">La page que vous cherchez n'existe pas.</p>
        <Link to="/" className="py-8">
          <AiFillHome className="text-[#c6210b] place-self-center hover:text-zinc-500 duration-300 w-8 h-8" />
        </Link>
      </div>
    );
  }

  // Handle other specific error codes if needed
  if (errorStatus === 403) {
    return (
      <div className="text-zinc-500 grid text-center justify-center py-20">
        <h2 className="text-2xl font-bold pt-10">Accès refusé</h2>
        <p>Vous n'avez pas la permission d'accéder à cette page.</p>
        <Link to="/" className="py-8">
          <AiFillHome className="text-[#c6210b] place-self-center hover:text-zinc-500 duration-300 w-8 h-8" />
        </Link>
      </div>
    );
  }

  // Generic error fallback
  return (
    <div className="text-zinc-500 grid text-center justify-center py-20">
      <h2 className="text-2xl font-bold pt-10">Oups !</h2>
      <p>Quelque chose n'a pas marché...</p>
      {errorMessage && (
        <p className="text-sm mt-2 text-zinc-400">{errorMessage}</p>
      )}
      {errorStatus && (
        <p className="text-xs mt-1 text-zinc-400">
          Code d'erreur: {errorStatus}
        </p>
      )}
      <Link to="/" className="py-8">
        <AiFillHome className="text-[#c6210b] place-self-center hover:text-zinc-500 duration-300 w-8 h-8" />
      </Link>
    </div>
  );
};

export default Error;
