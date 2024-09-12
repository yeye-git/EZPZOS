import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { DefaultRoutesValues } from "ezpzos.core";

function useAuthCheck() {
	const navigate = useNavigate();
	const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn); // Using useSelector to get login status

    useEffect(() => {
        if (!isLoggedIn) {
          // Delay the navigation to give time for the alertTag to show
			const timeout = setTimeout(() => {
				navigate(`/${DefaultRoutesValues.AuthRoutes.Login}`);
			}, 3000); // 3 seconds delay before redirecting to login

			// Cleanup timeout if component unmounts or effect re-runs
			return () => clearTimeout(timeout);
        }
      }, [isLoggedIn, navigate]);
      return isLoggedIn;
    }

export default useAuthCheck;
