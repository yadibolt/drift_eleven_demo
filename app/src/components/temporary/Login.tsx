import { useState } from "react";
import { authService } from "../../services/auth/auth.service";
import useUserStore from "../../@hooks/store/use-userStore.hook";
import { useLoginMutation } from "../../query/auth/login.repository";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../query/auth/logout.repository";

export default function Login() {
  const navigate = useNavigate();
  const { user } = useUserStore();
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const loginMutation = useLoginMutation();
  const logoutMutation = useLogoutMutation();

  const { loggedIn } = authService.getState();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await loginMutation.mutateAsync(formData);

      if (!result.error) navigate("/login");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await logoutMutation.mutateAsync();

      if (!result.error) navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loggedIn && user) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Welcome, {user.name || user.email}!</h1>
        <p>You are successfully logged in.</p>
        <button
          onClick={handleLogout}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="login"
            value={formData.login}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label
            htmlFor="password"
            style={{ display: "block", marginBottom: "0.5rem" }}
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "1rem",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.75rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            fontSize: "1rem",
            cursor: "pointer",
          }}
        >
          login...
        </button>
      </form>
    </div>
  );
}
