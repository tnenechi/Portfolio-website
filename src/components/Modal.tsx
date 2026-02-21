import { MdClose } from "react-icons/md";

type modalProps = {
  setIsModalOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
};

const Modal = ({ setIsModalOpen, children }: modalProps) => {
  return (
    <div className="w-screen h-screen z-[30] fixed top-0 bg-black px-12 md:px-32 py-y-sm flex flex-col gap-10">
      <div
        className="ml-auto bg-white text-black w-fit p-2 rounded-full cursor-pointer"
        onClick={() => setIsModalOpen(false)}
      >
        <MdClose className="h-7 w-7" />
      </div>

      {children}
    </div>
  );
};

export default Modal;
