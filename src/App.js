import MainLayout from "containers/mainLayout";
import { Routing } from "routing";

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <MainLayout>
        <Routing />
      </MainLayout>
    </div>
  );
}

export default App;