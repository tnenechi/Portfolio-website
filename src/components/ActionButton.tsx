import { useState } from "react";
import type { ReactNode } from "react";
import Modal from "./Modal";
import { ContactForm } from "@/pages/ContactForm";

type Props = {
  children: ReactNode;
  customStyle?: string;
};

const ActionButton = ({ children, customStyle }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${customStyle} w-fit px-md py-smd bg-primary text-white hover:bg-primary-light transform transition duration-200 hover:scale-95 cursor-pointer shadow-xl`}
      >
        {children}
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm />
      </Modal>
    </>
  );
};

export default ActionButton;
