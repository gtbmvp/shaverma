import "./app.scss";

import Header from "./Header";
import Sort from "./Sort";
import Filter from "./Filter";
import Shaverma from "./Shaverma";

import shavermas from "../data/shaverma.json";

export const App: React.FC = () => {
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
              {shavermas.map((item) => {
                return <Shaverma key={item.id} {...item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
