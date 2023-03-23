import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import styles from "./delivery.module.scss";

const Delivery: React.FC = () => {
  return (
    <div className={styles.field}>
      <h1 className={styles.title}>Зона доставки</h1>

      <div id="map-container" className={styles.map}></div>

      <Link to="/">
        <Button
          variant="contained"
          color="success"
          startIcon={<KeyboardBackspaceIcon />}
        >
          На главную
        </Button>
      </Link>
    </div>
  );
};

export default Delivery;
