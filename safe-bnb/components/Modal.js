// adding in Modal

export default props => (
  <div className="nav-container">
    {/* cool, an empty div? maybe it's the whole modal background; very nice trick */}
    <div className="modal-background" onClick={() => props.close()}></div>
    <div className="modal">{props.children}</div>
    <style jsx global>{`
      .modal-background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.3);
      }
      .modal {
        position: absolute;
        left: 50%;
        top: 50%;
        width: calc(100vh - 4em);
        max-width: 32em;
        max-height: calc(100vh - 4em);

        transform: translate(-50%, -50%);

        overflow: auto;
        background: white;
        border-radius: 0.3em;
        padding: 1em;
      }
    `}</style>
  </div>
);
