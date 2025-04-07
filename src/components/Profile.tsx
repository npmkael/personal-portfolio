import { Download, Mail, MapPin, Moon, Phone, Sun } from "lucide-react";
import { useState } from "react";
import LinkButton from "./LinkButton";

import { motion, AnimatePresence } from "motion/react";
import { SunIcon } from "./ui/sun";
import { MoonIcon } from "./ui/moon";
import { useTheme } from "@/context/ThemeContext";

const Profile = () => {
  const { isDarkMode, themeToggle } = useTheme();

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
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-semibold">Ezekiel Carreon</h3>
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-foreground/5 hover:text-accent-foreground h-10 w-10 relative rounded-full transition-all duration-300 group border border-border"
              onClick={themeToggle}
            >
              <AnimatePresence mode="wait">
                {isDarkMode ? (
                  <motion.div
                    key="moon"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.1,
                    }}
                  >
                    <MoonIcon size={23} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <SunIcon size={23} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
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
