import { Typography } from "@mui/material";
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
        <Typography>Oops!</Typography>
        <Typography>Sorry, an unexpected error occurred.</Typography>
        <Typography>{getErrorMessage(error)}</Typography>
    </div>);
}

export default ErrorPage;