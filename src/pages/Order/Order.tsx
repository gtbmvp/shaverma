import { useAppSelector } from "../../store/hooks";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { TextField } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Button from "@mui/material/Button";

import styles from "./order.module.scss";

interface IOrderFields {
  phone: number;
  name: string;
  adress: string;
}

const Order: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<IOrderFields>({
    mode: "onBlur",
  });
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  const onSubmit: SubmitHandler<IOrderFields> = (data) => console.log(data);

  return (
    <main>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Введите номер телефона",
              pattern: {
                value: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                message: "Введите корректный номер телефона",
              },
            }}
            render={({ field }) => (
              <TextField
                className={styles.input}
                error={errors.phone && true}
                id="filled-error-helper-text"
                label="Телефон"
                helperText={errors.phone?.message}
                variant="filled"
                {...field}
              />
            )}
          />

          <Controller
            name="name"
            control={control}
            rules={{
              required: "Введите имя не короче 2 символов",
              minLength: {
                value: 2,
                message: "Введите имя не короче 2 символов",
              },
            }}
            render={({ field }) => (
              <TextField
                className={styles.input}
                error={errors.name && true}
                id="filled-error-helper-text"
                label="Имя"
                helperText={errors.name?.message}
                variant="filled"
                {...field}
              />
            )}
          />

          <Controller
            name="adress"
            control={control}
            render={({ field }) => (
              <TextField
                className={styles.input}
                id="filled-multiline-static"
                label="Адрес"
                multiline
                rows={4}
                variant="filled"
                {...field}
              />
            )}
          />

          <Button
            disabled={!isValid}
            type="submit"
            variant="contained"
            color="success"
            startIcon={<CreditCardIcon />}
          >
            Оплатить {totalPrice} ₽
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Order;
