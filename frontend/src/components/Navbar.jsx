import { useAuth } from "@clerk/react";
import { Link } from "react-router";
import { ShoppingBagIcon } from "lucide-react";

const Navbar = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="navbar bg-base-300">
      <div className="max-w-5xl mx-auto w-full px-4 flex justify-between items-center">
        <div className="flex">
          <Link to="/" className="btn btn-ghost gap-2">
            <ShoppingBagIcon className="size-5 text-primary"/>
            <span className="text-lg font-bold">ProductStore</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
