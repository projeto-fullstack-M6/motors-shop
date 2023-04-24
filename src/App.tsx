import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 2000,
        }}
      />
      <AppRoutes />
    </>
  );
}

export default App;
