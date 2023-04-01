import React, { useState } from "react";
import { useLayoutEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import styles from "./delivery.module.scss";

import logo from "../../assets/img/logo.png";

const Delivery: React.FC = () => {
  const [maps, setMaps] = useState(
    <div className={styles.error}>
      При загрузке карт возникла ошибка, уточните зону доставки по телефону
    </div>
  );

  useLayoutEffect(() => {
    const getMap = async () => {
      const [ymaps3React] = await Promise.all([
        ymaps3.import("@yandex/ymaps3-reactify"),
        ymaps3.ready,
      ]);
      const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);
      const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapDefaultFeaturesLayer,
        YMapMarker,
        YMapFeature,
        YMapControls,
      } = reactify.module(ymaps3);

      const { YMapZoomControl } = reactify.module(
        await ymaps3.import("@yandex/ymaps3-controls@0.0.1")
      );

      setMaps(
        <YMap
          location={{
            zoom: 13,
            center: [30.349839, 59.830981],
          }}
          mode="vector"
        >
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />
          <YMapControls position="right">
            <YMapZoomControl />
          </YMapControls>
          <YMapMarker coordinates={[30.349839, 59.830981]}>
            <div className={styles.marker}>
              <img src={logo} alt="" />
            </div>
          </YMapMarker>
          <YMapFeature
            geometry={{
              type: "Polygon",
              coordinates: [
                [
                  [30.324175, 59.843914],
                  [30.339396, 59.844072],
                  [30.347077, 59.842431],
                  [30.355538, 59.842664],
                  [30.3675, 59.844154],
                  [30.381282, 59.8175],
                  [30.324002, 59.817543],
                ],
              ],
            }}
            style={{
              stroke: [{ width: 3, color: "rgb(255,127,80)" }],
              fill: "rgba(0, 0, 0, 0.6)",
            }}
          />
        </YMap>
      );
    };

    try {
      getMap();
    } catch {
      setMaps(
        <div className={styles.error}>
          При загрузке карт возникла ошибка, уточните зону доставки по телефону
        </div>
      );
    }
  }, []);

  return (
    <main>
      <div className={`${styles.field} container`}>
        <h1 className={styles.title}>Зона доставки</h1>

        <div className={styles.map}>{maps}</div>

        <Link to="/">
          <Button
            variant="contained"
            color="success"
            startIcon={<KeyboardBackspaceIcon />}
          >
            На главную
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Delivery;
