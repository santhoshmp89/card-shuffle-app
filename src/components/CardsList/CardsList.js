import React from "react";
import Card from "../Card/Card";

const colors = [
  "#333333",
  "#EFEFEF",
  "#72C3DC",
  "#2B8EAD",
  "#6F98A8",
  "#BFBFBF",
  "#2F454E",
  "#72C3DC",
  "#6F98A8"
];

const CardsList = ({ lists }) => {
  return (
    <>
      {lists.map((v) => {
        return <Card key={v} text={v} bgColor={colors[v]} />;
      })}
    </>
  );
};

export default CardsList;
