import BrowserRouter from "./BrowserRouter.jsx";
import Route from "./Route.jsx";
import NavBar from "./NavBar.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold my-8 text-gray-800">App</h1>
      <BrowserRouter>
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
          Browser Router!
        </h2>
        <NavBar />
        <div className="mt-8">
          <Route path="/home">
            <h3 className="text-xl font-medium text-gray-900">Route Home</h3>
          </Route>
          <Route path="/blog">
            <h3 className="text-xl font-medium text-gray-900">Route Blog</h3>
          </Route>
          <Route path="/3">
            <h3 className="text-xl font-medium text-gray-900">Route 3</h3>
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
