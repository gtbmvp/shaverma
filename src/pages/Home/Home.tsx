import { useCallback, useMemo, useEffect, useState } from "react";

import type { RootState } from "../../store";
import { useSelector } from "react-redux";

import Filter from "../../components/Filter";
import Shaverma from "../../components/Shaverma";
import ShavermaSkeleton from "../../components/Shaverma/ShavermaSkeleton";
import Sort from "../../components/Sort";
import Search from "../../components/Search";

import { IShaverma } from "../../types";

import styles from "./home.module.scss";

const Home: React.FC = () => {
  const [shavermas, setShavermas] = useState<IShaverma[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { filterBy, sorting, search } = useSelector(
    (state: RootState) => state.filter
  );

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://6321dfda82f8687273bb7341.mockapi.io/shavermas"
      );
      const data = await response.json();
      setShavermas(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("mockapi fetch error");
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const sortedShavermas = useMemo(
    () => shavermas.sort((a, b) => b[sorting] - a[sorting]),
    [shavermas, sorting]
  );

  const filteredShavermas = sortedShavermas
    .filter((item) => (filterBy !== "все" ? item.category === filterBy : true))
    .filter(
      (item) =>
        item.title.toLowerCase().includes(search) ||
        item.category.toLowerCase().includes(search) ||
        item.ingredients.some((ing) => ing.toLowerCase().includes(search))
    );

  return (
    <main>
      <div className="container">
        <div className={styles.top}>
          <Filter />
          <Search />
          <Sort />
        </div>
        <div className={styles.items}>
          {isLoading ? (
            <>
              <ShavermaSkeleton />
              <ShavermaSkeleton />
              <ShavermaSkeleton />
              <ShavermaSkeleton />
            </>
          ) : (
            filteredShavermas.map((item) => {
              return <Shaverma key={item.id} {...item} />;
            })
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
