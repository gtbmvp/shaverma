import { useAppSelector } from "../../store/hooks";

import { Link } from "react-router-dom";

import { orange } from "@mui/material/colors";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";

import styles from "./header.module.scss";

import logo from "../../assets/img/logo.png";

const Header: React.FC = () => {
  const { totalPrice, totalCount } = useAppSelector((state) => state.cart);

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Link to="/" className={styles.logo}>
          <img
            className={styles.img}
            width="64"
            height="64"
            src={logo}
            alt="Shaverma logo"
          />
          <div>
            <h1 className={styles.title}>S-tier food</h1>
            <p className={styles.text}>лучшая шаверма на Северо-Западе</p>
          </div>
        </Link>

        {totalCount <= 0 ? (
          <Button
            variant="contained"
            sx={{
              backgroundColor: orange[900],
              borderRadius: 25,
              ":hover": {
                bgcolor: orange[800],
              },
            }}
            disabled
          >
            <ShoppingCartIcon fontSize="small" />
          </Button>
        ) : (
          <Link to="/cart" className={styles.cart}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: orange[900],
                borderRadius: 25,
                ":hover": {
                  bgcolor: orange[800],
                },
              }}
            >
              <span>{totalCount}</span>
              <ShoppingCartIcon fontSize="small" />
              <span>{totalPrice} ₽</span>
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
