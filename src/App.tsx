import MainLayouts from "./layouts/MainLayouts";
import ProtectedRoute from "./layouts/protectedRoute";

function App() {
  return (
    <>
      <ProtectedRoute>
        <MainLayouts />
      </ProtectedRoute>
    </>
  );
}

export default App;
