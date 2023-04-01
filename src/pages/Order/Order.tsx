import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearCart, selectCountAndIds } from "../../store/slices/cartSlice";

import { TextField } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import Button from "@mui/material/Button";

import debouncedPromise from "awesome-debounce-promise";

import styles from "./order.module.scss";

interface IOrderFields {
  phone: number | "";
  name: string | "";
  adress: string | "";
}

const Order: React.FC = () => {
  const items = useAppSelector(selectCountAndIds);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<IOrderFields>({
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<IOrderFields> = ({ phone, name, adress }) => {
    const order = { phone, name, adress, order: [...items] };
    console.log(order);
    dispatch(clearCart());
    navigate("/success");
  };

  return (
    <main>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Controller
            name="phone"
            control={control}
            defaultValue=""
            rules={{
              required: "Введите номер телефона",
              pattern: {
                value: /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/,
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
            defaultValue=""
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
            defaultValue=""
            rules={{
              validate: debouncedPromise(async (value) => {
                if (value === "") return false;

                const { data } = await axios(
                  `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=59566f07-dd93-4b8e-a0cf-1b6ea1f17d1e&bbox=30.324002,59.817543~30.3775,59.844154&rspn=1&geocode=${value}`
                );

                if (
                  data.response.GeoObjectCollection.featureMember.length === 0
                ) {
                  return "Уточните по телефону возможность доставки по этому адресу";
                }

                return true;
              }, 300),
            }}
            render={({ field }) => (
              <TextField
                className={styles.input}
                error={errors.adress && true}
                id="filled-error-helper-text"
                label="Адрес"
                helperText={errors.adress?.message}
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
            Заказать
          </Button>
        </form>
      </div>
    </main>
  );
};

export default Order;
