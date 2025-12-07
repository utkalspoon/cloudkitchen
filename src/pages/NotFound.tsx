import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
        <p className="text-lg text-muted-foreground">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          aria-label="Return to homepage"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
