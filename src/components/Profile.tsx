import { Mail, MapPin, Moon, Phone, Sun } from "lucide-react";
import SplitText from "./SplitText";
import { useState } from "react";
import LinkButton from "./LinkButton";

import { motion, AnimatePresence } from "motion/react";

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const themeToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
    document.documentElement.classList.toggle("dark");
  };

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

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
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <SplitText
              text="Ezekiel Carreon"
              className="text-lg md:text-2xl font-semibold"
              delay={150}
              animationFrom={{
                opacity: 0,
                transform: "translate3d(0, 50px, 0)",
              }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing={easeOutCubic}
              threshold={0.2}
              rootMargin="-50px"
            />
            <button
              className="flex items-start p-1.5 rounded-md bg-gray-100 border-[1px] border-[#e5e7eb] dark:border-neutral-30 duration-300 cursor-pointer transition-all dark:bg-neutral-5"
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
                      duration: 0.2,
                    }}
                  >
                    <Moon size={21} className="dark:text-white" />
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
                    <Sun size={21} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
          <p className="text-xs md:text-sm mt-0.5 flex items-center gap-1 text-neutral-30 dark:text-neutral-90">
            <MapPin size={16} />
            <span className="truncate">Pampanga, Philippines</span>
          </p>
          <p className="text-sm md:text-base mt-1.5 md:mt-2">
            Aspiring Front End Developer
          </p>

          <div className="flex gap-2 mt-3 md:mt-4">
            <LinkButton
              text="Send Email"
              icon={<Mail size={15} />}
              className="bg-white-bg-100 text-black-bg-100 dark:bg-black-bg-100 dark:text-white -bg-100"
            />
            <LinkButton
              text="Contact"
              icon={<Phone size={15} />}
              className="bg-black-bg-100 text-white-bg-100 dark:bg-white-bg-100 dark:text-black-bg-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
