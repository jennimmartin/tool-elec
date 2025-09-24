import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

import LegalNotice from "../Components/LegalNotice";

const Legal = () => {
  return (
    <div className="text-zinc-200 grid text-center justify-center py-20">
      <Link to="/" className="py-8">
        <AiFillHome className="text-[#c6210b] place-self-center hover:text-zinc-500 duration-300 w-8 h-8" />
      </Link>
      <LegalNotice />
    </div>
  );
};
export default Legal;
