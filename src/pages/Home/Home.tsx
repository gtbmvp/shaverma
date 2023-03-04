import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { reset } from "../../store/slices/filterSlice";
import { fetchAllProducts, selectBy } from "../../store/slices/productSlice";

import Filter from "../../components/Filter";
import Shaverma from "../../components/Shaverma";
import ShavermaSkeleton from "../../components/Shaverma/ShavermaSkeleton";
import Sort from "../../components/Sort";
import Search from "../../components/Search";

import styles from "./home.module.scss";

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.product);
  const { filterBy, sorting, search } = useAppSelector((state) => state.filter);

  const items = useAppSelector(selectBy(filterBy, sorting, search));

  useEffect(() => {
    dispatch(reset());
    dispatch(fetchAllProducts());
  }, [dispatch]);

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
