import { useState, useEffect, useCallback } from "react";
import "./app.scss";

import Header from "./Header";
import Sort from "./Sort";
import Filter from "./Filter";
import Shaverma from "./Shaverma";
import ShavermaSkeleton from "./Shaverma/ShavermaSkeleton";

import { IShaverma } from "../types";
// https://6321dfda82f8687273bb7341.mockapi.io/shavermas

export const App: React.FC = () => {
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
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Filter />
              <Sort />
            </div>
            <h2 className="content__title">Все шавермы</h2>
            <div className="content__items">
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
        </div>
      </div>
    </>
  );
};
