import React from "react";
import { Grid } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";

const Giphy = () => {
  const gif = new GiphyFetch("UKoLhbtqRvSjFn4w9BoHHcIVA27McLlU");
  const fetchGifs = (offset) =>
    gif.search("Kanye", {
      sort: "relevant",
      offset: Math.floor(Math.random() * 10),
      limit: 1,
    });

  return (
    <div>
      <Grid width={800} columns={1} fetchGifs={fetchGifs} />
    </div>
  );
};

export default Giphy;
