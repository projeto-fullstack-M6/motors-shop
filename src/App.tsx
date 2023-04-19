import { UserProvider } from "./providers/UserContext";
import AppRoutes from "./routes";

function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}

export default App;
