import "./App.css";
import Counter from "./component/Counter";
import useTheme from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <div className="container mx-auto p-4">
        <button
          onClick={toggleTheme}
          className="mb-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          Toggle to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
        <Counter />
      </div>
    </div>
  );
}

export default App;
