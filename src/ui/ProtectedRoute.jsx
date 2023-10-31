import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
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
  // 1 Load Authenticated USer
  const {
    isLoading: isLoadingUserData,
    isAuthenticated,
    fetchStatus,
  } = useUser();
  // 3 if no authenticated user ,redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoadingUserData && fetchStatus !== "fetching")
        navigate("/login");
    },
    [fetchStatus, isAuthenticated, navigate, isLoadingUserData]
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
