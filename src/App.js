import MainLayout from "containers/mainLayout";
import { Routing } from "routing";

function App() {
  return (
    <div className="App">
      <MainLayout>
        <Routing />
      </MainLayout>
    </div>
  );
}

export default App;