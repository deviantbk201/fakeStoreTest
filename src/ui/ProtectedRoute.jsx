import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  // 1 Load Authenticated USer
  const {
    user,
    isLoading: isLoadingUserData,
    isAuthenticated,
    fetchStatus,
  } = useUser();
  const userId = user?.id;
  // 3 if no authenticated user ,redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoadingUserData && fetchStatus !== "fetching")
        navigate("/login");
      if (isAuthenticated) {
        searchParams.set("userId", userId);
        setSearchParams(searchParams);
      }
    },
    [
      fetchStatus,
      isAuthenticated,
      navigate,
      isLoadingUserData,
      userId,
      setSearchParams,
      searchParams,
    ]
  );

  //2 while Loading Spinner
  if (isLoadingUserData)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4 if  user render the app

  if (isAuthenticated) return children;
}
