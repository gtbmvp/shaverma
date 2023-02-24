import styles from "./cart.module.scss";

import { orange } from "@mui/material/colors";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import Button from "@mui/material/Button";

const Cart: React.FC = () => {
  return (
    <main>
      <div className="container">
        <div className={styles.cart}>
          <div className={styles.top}>
            <h1 className={styles.title}>Корзина</h1>
            <p className={styles.clear}>
              Очистить корзину
              <DeleteIcon />
            </p>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.image}>
                <img src={`img/algir.jpg`} alt="Shaverma" />
              </div>
              <h2 className={styles.title}>Алжирская</h2>
              <div className={styles.count}>
                <AddCircleOutlineIcon sx={{ color: orange[900] }} />
                <span>5</span>
                <RemoveCircleOutlineIcon />
              </div>
              <span className={styles.price}>700 ₽</span>
            </li>
            <li className={styles.item}>
              <div className={styles.image}>
                <img src={`img/algir.jpg`} alt="Shaverma" />
              </div>
              <h2 className={styles.title}>Алжирская</h2>
              <div className={styles.count}>
                <AddCircleOutlineIcon sx={{ color: orange[900] }} />
                <span>5</span>
                <RemoveCircleOutlineIcon />
              </div>
              <span className={styles.price}>700 ₽</span>
            </li>
            <li className={styles.item}>
              <div className={styles.image}>
                <img src={`img/algir.jpg`} alt="Shaverma" />
              </div>
              <h2 className={styles.title}>Алжирская</h2>
              <div className={styles.count}>
                <AddCircleOutlineIcon sx={{ color: orange[900] }} />
                <span>5</span>
                <RemoveCircleOutlineIcon />
              </div>
              <span className={styles.price}>700 ₽</span>
            </li>
            <li className={styles.item}>
              <div className={styles.image}>
                <img src={`img/algir.jpg`} alt="Shaverma" />
              </div>
              <h2 className={styles.title}>Алжирская</h2>
              <div className={styles.count}>
                <AddCircleOutlineIcon sx={{ color: orange[900] }} />
                <span>5</span>
                <RemoveCircleOutlineIcon />
              </div>
              <span className={styles.price}>700 ₽</span>
            </li>
          </ul>
          <div className={styles.bottom}>
            <p>
              Всего шаверм: <span>5</span> шт. на сумму: <span>900</span> рублей
            </p>
            <Button
              variant="contained"
              sx={{
                backgroundColor: orange[900],
                borderRadius: 25,
                ":hover": {
                  bgcolor: orange[800],
                },
              }}
              startIcon={<CreditCardIcon />}
            >
              Оплатить 900 ₽
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
