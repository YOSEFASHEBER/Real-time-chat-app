import { BiLogOut } from "react-icons/bi";
import useLogout from "../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto pt-0.5 pb-1 flex justify-center">
      {!loading ? (
        <BiLogOut
          className="w-6 h-6 text-white cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
