import { ChevronDownIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LanguageSelector() {
  const options = ["english", "portuguese"];
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 right-0 mr-[20px] flex w-fit flex-col overflow-visible text-black select-none">
      <span
        className="flex flex-nowrap items-center justify-end gap-2 p-2 transition-all hover:text-purple-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected} <ChevronDownIcon className={isOpen ? "" : "rotate-90"} />
      </span>

      {isOpen && (
        <motion.div
          className="flex flex-col text-black"
          initial={{ height: 0 }}
          animate={{ height: "100px" }}
          exit={{ height: 0 }}
        >
          {options.map((option) => (
            <span
              key={option}
              className={`p-2 transition-all ${selected === option ? "text-purple-700" : ""} flex justify-end whitespace-nowrap hover:bg-gray-300 hover:text-white`}
              onClick={() => {
                setSelected(option);
                setIsOpen(!isOpen);
              }}
            >
              {option} *
            </span>
          ))}
        </motion.div>
      )}
    </div>
  );
}
