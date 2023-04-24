import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes";
import { ModalEditProfile } from "./components/Modals/ModalEditProfile/ModalEditProfile";

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
      {/* <AppRoutes /> */}
      <ModalEditProfile />
    </>
  );
}

export default App;
