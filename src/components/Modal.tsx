import { Dialog, DialogPanel } from "@headlessui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import SharedModal from "./SharedModal";
import { StaticImageData } from "next/image";

export default function Modal({
  images,
  onClose,
}: {
  images: StaticImageData[];
  onClose?: () => void;
}) {
  let panelRef = useRef(null);
  const router = useRouter();

  const { photoId } = router.query;
  let index = Number(photoId);

  const [direction, setDirection] = useState(0);
  const [curIndex, setCurIndex] = useState(index);

  function handleClose() {
    router.push("/", undefined, { shallow: true });
    onClose?.();
  }

  function changePhotoId(newVal: number) {
    if (newVal > index) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
    setCurIndex(newVal);
    router.push(
      {
        query: { photoId: newVal },
      },
      `/p/${newVal}`,
      { shallow: true },
    );
  }

  return (
    <Dialog
      static
      open={true}
      onClose={handleClose}
      initialFocus={panelRef}
      className="fixed inset-0 z-10 flex items-center justify-center"
    >
      <DialogPanel
        ref={panelRef}
        as={motion.div}
        key="backdrop"
        className="fixed inset-0 z-30 bg-black/70 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />
      <SharedModal
        index={curIndex}
        direction={direction}
        images={images}
        changePhotoId={changePhotoId}
        closeModal={handleClose}
        navigation={true}
      />
    </Dialog>
  );
}
