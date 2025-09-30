import errorImg from "../Images/errorImg.jpg";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Error = () => {
  return (
    <div className="text-zinc-500 grid text-center justify-center py-20">
      <img src={errorImg} alt="404 error img" className="h-64 w-64 rounded" />
      <h2 className="text-2xl font-bold pt-10">Oups !</h2>
      <p className="">Quelque chose n&#39;a pas marché...</p>
      <Link to="/" className="py-8">
        <AiFillHome className="text-[#c6210b] place-self-center hover:text-zinc-500 duration-300 w-8 h-8" />
      </Link>
    </div>
  );
};
export default Error;
