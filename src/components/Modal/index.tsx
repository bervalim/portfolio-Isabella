import close from "../../assets/Close.png";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  children: React.ReactNode;
}

export function Modal({ children, setShow, show }: Props) {
  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f0f0f0",
    },
    openButton: {
      padding: "10px 20px",
      fontSize: "16px",
      background: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.5)",
      zIndex: 999,
    },
    modal: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "8px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      zIndex: 1000,
      width: "1302px",
      height: "auto",
      textAlign: "center",
    },
    title: {
      marginBottom: "15px",
      fontSize: "20px",
    },
    text: {
      marginBottom: "20px",
      fontSize: "16px",
      color: "#333",
    },
    closeButton: {
      padding: "10px 20px",
      background: "#dc3545",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <>
      {show && (
        <>
          <div style={styles.overlay} onClick={() => setShow(false)} />
          <div className="!bg-[#EAEBF0] p-[24px]" style={styles.modal}>
            <img
              src={close}
              className="absolute right-[24px] cursor-pointer"
              onClick={() => setShow(false)}
            />
            {children}
          </div>
        </>
      )}
    </>
  );
}
