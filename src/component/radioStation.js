import React, { useState } from "react";

import backArrow from "../assets/back-arrow.png";
import minusIcon from "../assets/minus.png";
import plusIcon from "../assets/plus.png";
import previewImg from "../assets/preview.jpg";
import switchIcon from "../assets/switch.png";

const RadioStationList = ({ radioStation }) => {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <div className="radio__station">
        <div className="station__header">
          <span className="left__arrow">
            <img src={backArrow} alt="" />
          </span>
          <h2>STATIONS</h2>
          <span className="power__icon">
            <img src={switchIcon} alt="" />
          </span>
        </div>
        <div className="station__list__box">
          <ul className="stations__list">
            {radioStation.map((station, index) => (
              <li onClick={() => setSelected(station.name)} key={index}>
                {selected ? (
                  <>
                    <div
                      className={`${
                        selected === station.name
                          ? "radio__player__visible"
                          : " radio__player__hidden"
                      }`}
                    >
                      <div className="radio__player">
                        <div className="minus__icon">
                          <img src={minusIcon} alt="" />
                        </div>
                        <div className="preview__img">
                          <img src={previewImg} alt="" />
                        </div>
                        <div className="plus__icon">
                          <img src={plusIcon} alt="" />
                        </div>
                      </div>
                    </div>
                    <span
                      className={`${
                        selected === station.name
                          ? "list list__player__view"
                          : "list"
                      }`}
                    >
                      <span>{station.name}</span>
                      <span>{station.frequency}</span>
                    </span>
                  </>
                ) : (
                  <>
                    <span className="list">
                      <span>{station.name}</span>
                      <span>{station.frequency}</span>
                    </span>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
        {selected ? (
          <div className="bottom">
            <span className="current__station">CURRENTLY PLAYING</span>
            <span className="station__name">{selected}</span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default RadioStationList;
