import Info from "@/components/Info"
import Profile from "@/components/Profile"

const MainPage = () => {
  return (
    <main className="animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Profile />
        <Info />
      </div>
    </main>
  )
}

export default MainPage