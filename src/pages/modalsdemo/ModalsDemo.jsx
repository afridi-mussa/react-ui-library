import React, { useState } from "react";
import Modal from "../../components/modals/Modal";
import Button from "../../components/buttons/Button";

function ModalsDemo() {
  const [openSimple, setOpenSimple] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);

  return (
    <div>
      

      <Button
        label="Open Simple Modal"
        variant="primary"
        onClick={() => setOpenSimple(true)}
      />
      <Button
        label="Open Login Modal"
        variant="secondary"
        onClick={() => setOpenLogin(true)}
      />
      <Button
        label="Open Terms Modal"
        variant="success"
        onClick={() => setOpenTerms(true)}
      />

      {/* Simple modal */}
      <Modal
        isOpen={openSimple}
        onClose={() => setOpenSimple(false)}
        title="Demo Modal"
      >
        
        <Button
          label="Close"
          variant="danger"
          onClick={() => setOpenSimple(false)}
        />
      </Modal>

      {/* Login modal */}
      <Modal
        isOpen={openLogin}
        onClose={() => setOpenLogin(false)}
        variant="login"
      />

      {/* Terms of service modal */}
      <Modal
        isOpen={openTerms}
        onClose={() => setOpenTerms(false)}
        variant="terms"
      />
    </div>
  );
}

export default ModalsDemo;
