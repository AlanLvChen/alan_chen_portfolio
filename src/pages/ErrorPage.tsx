import { useRouteError } from "react-router-dom";


const getErrorMessage = (err: unknown): string => {
    if (err instanceof Error) {
      return err.message; 
    }
    return String(err);
  };


const ErrorPage = () => {
    const error = useRouteError();
    return (<div>
        <h1>Oops!</h1>
        <h1>Sorry, an unexpected error occurred.</h1>
        <h1>{getErrorMessage(error)}</h1>
    </div>);
}

export default ErrorPage;