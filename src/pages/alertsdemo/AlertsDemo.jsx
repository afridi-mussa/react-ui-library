import React, { useState } from "react";
import Alert from "../../components/alerts/Alert";

function AlertsDemo() {
  const [show, setShow] = useState({
    info: true,
    success: true,
    warning: true,
    error: true,
  });

  return (
    <div>
      

      {show.info && (
        <Alert
          type="info"
          message="This is an info alert. Something you should know!"
          onClose={() => setShow((prev) => ({ ...prev, info: false }))}
        />
      )}

      {show.success && (
        <Alert
          type="success"
          message="Your action was successful!"
          onClose={() => setShow((prev) => ({ ...prev, success: false }))}
        />
      )}

      {show.warning && (
        <Alert
          type="warning"
          message="Be careful! This is a warning."
          onClose={() => setShow((prev) => ({ ...prev, warning: false }))}
        />
      )}

      {show.error && (
        <Alert
          type="error"
          message="Something went wrong. Try again."
          onClose={() => setShow((prev) => ({ ...prev, error: false }))}
        />
      )}
    </div>
  );
}

export default AlertsDemo;
