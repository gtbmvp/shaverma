import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import styles from "./success.module.scss";

const Success: React.FC = () => {
  return (
    <div className={styles.field}>
      <h1 className={styles.title}>
        Ваш заказ № <span>55</span>.
      </h1>
      <p>
        Оператор свяжется с Вами в течение 5 минут 🤙 <br />
        для подтверждения заказа
      </p>

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

export default Success;
