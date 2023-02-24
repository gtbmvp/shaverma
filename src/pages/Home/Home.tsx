import { useCallback, useEffect, useState } from "react";

import Filter from "../../components/Filter";
import Shaverma from "../../components/Shaverma";
import ShavermaSkeleton from "../../components/Shaverma/ShavermaSkeleton";
import Sort from "../../components/Sort";

import { IShaverma } from "../../types";

import styles from "./home.module.scss";

const Home: React.FC = () => {
  const [shavermas, setShavermas] = useState<IShaverma[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  return (
    <main>
      <div className="container">
        <div className={styles.top}>
          <Filter />
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
            shavermas.map((item) => {
              return <Shaverma key={item.id} {...item} />;
            })
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
