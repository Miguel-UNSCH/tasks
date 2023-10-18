import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AuthProvider } from "./context/AuthContext";
import { TaskPage } from "./pages/TaskPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { ProfilePage } from "./pages/ProfilePage";
import { HomePage } from "./pages/HomePage";

import { ProtectedRoute } from "./ProtectedRoute";
import { TaskProvider } from "./context/TaskContext";
import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Navbar />
          <div className="max-w-screen-xl mx-auto relative">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>

            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<TaskPage />}></Route>
              <Route path="/add-task" element={<TaskFormPage />}></Route>
              <Route path="/tasks/:id" element={<TaskFormPage />}></Route>
              <Route path="/profile" element={<ProfilePage />}></Route>
            </Route>
          </Routes>
          </div>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}
