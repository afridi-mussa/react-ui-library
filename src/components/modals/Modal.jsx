import React, { useRef } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children, variant }) => {
  const emailRef = useRef(null);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div
        className={`modal ${
          variant === "login" ? "modal-card" : variant === "terms" ? "modal-terms" : ""
        }`}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        {variant === "login" ? (
          /* ✅ Login Modal */
          <div className="modal-body">
            <h3 className="modal-title">Sign in to our platform</h3>

            <div className="input-group">
              <label htmlFor="email">Your email</label>
              <input
                id="email"
                ref={emailRef}
                type="email"
                placeholder="name@company.com"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Your password</label>
              <input id="password" type="password" required />
            </div>

            <div className="options">
              <label className="checkbox">
                <input type="checkbox" id="remember" /> Remember me
              </label>
              <a href="#" className="link">
                Lost Password?
              </a>
            </div>

            <button className="btn-primary full">Log in to your account</button>

            <div className="register">
              Not registered?&nbsp;
              <a href="#" className="link">
                Create account
              </a>
            </div>
          </div>
        ) : variant === "terms" ? (
          /* ✅ Terms of Service Modal */
          <div className="modal-body">
            <h3 className="modal-title">Terms of Service</h3>
            <div className="modal-scroll">
              <p>
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p>
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>

            <div className="modal-actions">
              <button className="btn-primary" onClick={onClose}>
                I Accept
              </button>
              <button className="btn-alt" onClick={onClose}>
                Decline
              </button>
            </div>
          </div>
        ) : (
          /* ✅ Simple Modal (default) */
          <>
            <h2 className="modal-title">{title}</h2>
            <div className="modal-content">{children}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
