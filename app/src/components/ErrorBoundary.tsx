import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorBoundary() {
  const error = useRouteError();
  console.log(isRouteErrorResponse(error))

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops!</h1>
        <h2>{error.status} {error.statusText}</h2>
        <p>{error.data}</p>
      </div>
    );
  }

  if (error instanceof Error) {
    return (
      <div>
        <h1>Something went wrong!</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  // Fallback for unknown errors
  return <div>Unknown error occurred</div>;
}