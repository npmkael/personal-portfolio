import Info from "@/components/Info";
import Profile from "@/components/Profile";

import Particles from "@/Particles/Particles";

const MainPage = () => {
  return (
    <>
      <main className="animate-fade-in">
        <Particles
          particleColors={["#000", "#000"]}
          particleCount={600}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={60}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={true}
        />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Profile />
          <Info />
        </div>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto px-4 py-8 border-t border-border">
          <p className="text-sm text-foreground/70">
            © 2025 Ezekiel Jhon Carreon. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
};

export default MainPage;
