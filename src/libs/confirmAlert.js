// libs/confirmAlert.jsx
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { formatErrors } from "./utils";

class ConfirmAlert {
  success(message) {
    confirmAlert({
      message: message,
      buttons: [
        {
          label: "OK",
          onClick: () => {},
        },
      ],
    });
  }

  error(message) {
    let msg = formatErrors(message);
    confirmAlert({
      message: msg,
      buttons: [
        {
          label: "OK",
          onClick: () => {},
        },
      ],
    });
  }
}

// Assign instance to a variable before exporting
const confirmAlertInstance = new ConfirmAlert();

export default confirmAlertInstance;