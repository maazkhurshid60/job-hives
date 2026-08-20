"use client";

import React, { useState } from "react";
import ButtonSm from "@/components/button/ButtonSm";
import Modal from "@/components/modal/Modal";

const ModalShowcase: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ButtonSm text="Open modal" onClick={() => setOpen(true)} />
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm action">
        <p className="text-body-md text-neutral-600 mb-lg">
          This is the shared Modal component — backdrop click, the Escape key, and the close button all dismiss it.
        </p>
        <div className="flex justify-end gap-sm">
          <ButtonSm text="Cancel" onClick={() => setOpen(false)} bgColor="bg-transparent hover:bg-neutral-100 text-neutral-700" />
          <ButtonSm text="Confirm" onClick={() => setOpen(false)} />
        </div>
      </Modal>
    </div>
  );
};

export default ModalShowcase;
