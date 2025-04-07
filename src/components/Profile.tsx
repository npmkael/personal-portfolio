import { Download, Mail, MapPin, Moon, Phone, Sun } from "lucide-react";
import { useState } from "react";
import LinkButton from "./LinkButton";

import { motion, AnimatePresence } from "motion/react";

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <section className="mb-8 animate-fade-in">
      <div className="flex items-center gap-4 md:gap-6">
        <img
          src="/profile-pic.jpg"
          width={160}
          height={160}
          className="w-32 h-32 md:w-40 md:h-40 object-cover flex-shrink-0 rounded-lg"
          alt="Ezekiel"
        />

        <div className="flex-1 min-w-0 font-poppins">
          <div className="flex items-center font-semibold  gap-2">
            <h3 className="text-3xl font-semibold">Ezekiel Carreon</h3>
          </div>
          <p className="text-xs md:text-sm mt-0.5 flex items-center  gap-1 text-neutral-30 dark:text-neutral-90">
            <MapPin size={16} />
            <span className="truncate">Pampanga, Philippines</span>
          </p>
          <p className="text-sm md:text-base mt-1.5 md:mt-2 dark:text-neutral-90">
            Aspiring Front End Developer
          </p>

          <div className="flex gap-2 mt-3 md:mt-4">
            <LinkButton
              text="Send Email"
              icon={<Mail size={15} />}
              className="bg-foreground text-background"
            />
            <LinkButton
              text="Download CV"
              icon={<Download size={15} />}
              className="bg-background text-foreground"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
