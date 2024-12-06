import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const Legal = () => {
  return (
    <div className="text-zinc-500 grid text-center justify-center py-20">
      <h2 className="text-2xl font-bold pt-10">Mentions légal </h2>
      <p className="">notices</p>
      <Link to="/" className="py-8">
        <AiFillHome className="text-[#c6210b] place-self-center hover:text-zinc-500 duration-300 w-8 h-8" />
      </Link>
    </div>
  );
};
export default Legal;
