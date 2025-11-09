import { useRouteError } from "react-router-dom";
import { formatRouteError } from "../utils/utils";

const RouterError = () => {
  const error = useRouteError();
  const errorMessage = formatRouteError(error);

  return (
    <div>
      <h1>OOps...!</h1>
      <h2>Something went wrong</h2>
      <h3>{errorMessage}</h3>
    </div>
  );
};

export default RouterError;
