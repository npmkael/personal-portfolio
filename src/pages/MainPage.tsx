import Info from "@/components/Info";
import ParticlesComponent from "@/components/Particles";
import Profile from "@/components/Profile";
import { useTheme } from "@/context/ThemeContext";

const MainPage = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <main className="animate-fade-in">
        <div>
          <ParticlesComponent />
        </div>
        <div className="max-w-3xl mx-auto px-4 py-8">
          <Profile />
          <Info />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 py-8 border-t border-border">
          <p className="text-sm text-foreground/70">
            © 2025 Ezekiel Jhon Carreon. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
};

export default MainPage;
