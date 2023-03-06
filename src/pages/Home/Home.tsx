import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import {
  changeFilter,
  changeSorting,
  setSearch,
} from "../../store/slices/filterSlice";
import { fetchAllProducts, selectBy } from "../../store/slices/productSlice";

import Filter from "../../components/Filter";
import Shaverma from "../../components/Shaverma";
import ShavermaSkeleton from "../../components/Shaverma/ShavermaSkeleton";
import Sort from "../../components/Sort";
import Search from "../../components/Search";

import { isValidCategory, isValidSort } from "../../types";

import styles from "./home.module.scss";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const { status, error } = useAppSelector((state) => state.product);
  const { filterBy, sorting, search } = useAppSelector((state) => state.filter);
  const items = useAppSelector(selectBy(filterBy, sorting, search));

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    const { filterBy, sorting, search } = Object.fromEntries(
      searchParams.entries()
    );

    if (isValidCategory(filterBy)) dispatch(changeFilter(filterBy));
    if (isValidSort(sorting)) dispatch(changeSorting(sorting));
    if (search) dispatch(setSearch(search));
  }, [searchParams, dispatch]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (filterBy !== "все") params.append("filterBy", filterBy);
    if (sorting !== "rating") params.append("sorting", sorting);
    if (search !== "") params.append("search", search);

    setSearchParams(params);
  }, [filterBy, sorting, search, setSearchParams]);

  if (error) {
    console.log(error);
    return (
      <main>
        <div className={styles.error}>
          <h1>Сервер не справился с задачей показать Вам наши шавермы...</h1>
          <a className={styles.call} href="tel:88005553535">
            Заказать по телефону
          </a>
          👉👈
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="container">
        <div className={styles.top}>
          <Filter />
          <Search />
          <Sort />
        </div>
        <div className={styles.items}>
          {status === "loading" ? (
            <>
              <ShavermaSkeleton />
              <ShavermaSkeleton />
              <ShavermaSkeleton />
              <ShavermaSkeleton />
            </>
          ) : (
            items.map((item) => {
              return <Shaverma key={item.id} {...item} />;
            })
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
