import { useRouteError } from "react-router-dom";



interface ErrorType {
   statusText?: string;
   message?: string; 
}
export default function ErrorPage() {
  const error = useRouteError() as ErrorType;
  console.error(error);

 
  return (
    <div id="error-page">
      <h1>Ooopsi daisy</h1>
      <p>Seems this site doesnt exist</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}