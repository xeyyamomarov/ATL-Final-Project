import MainLayout from "containers/mainLayout";
import { Routing } from "routing";
import { LoginPage } from "pages/LoginPage";

function App() {
  return (
    <div className="App">
      <LoginPage/>
      <MainLayout>
        <Routing />
      </MainLayout>
    </div>
  );
}

export default App;