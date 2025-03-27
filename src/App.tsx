import Info from "./components/Info";
import Profile from "./components/Profile";

function App() {
  return (
    <main className="animate-fade-in">
      <div className="max-w-5xl mx-auto px-4 py-8 md:flex block md:gap-8 items-start">
        <Profile />
        <Info />
      </div>
    </main>
  );
}

export default App;
