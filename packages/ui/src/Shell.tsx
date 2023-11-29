'use client'
import { useAppShell } from "../useAppShell";
export const Shell: React.FunctionComponent<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const { user, score, setUser } = useAppShell();
  return (
    <main>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">{title}</a>
          <div className="flex me-2">
            {user && (
              <div>
                <span>
                {" "}
                {user} - {score}
              </span>
              <button
                className="btn btn-outline-success"
                onClick={() => setUser(null)}
              >
                Logout
              </button>
              </div>
            )}
            {!user && (
              <button
                className="btn btn-outline-success"
                onClick={() => setUser("Shahzaib")}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>
      {children}
    </main>
  );
};
 