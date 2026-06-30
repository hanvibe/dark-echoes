import { useState } from "react";
import { episodeList } from "./data";
import EpisodeList from "./EpisodeList";
import EpisodeDetails from "./EpisodeDetails";
import "./index.css";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <main>
      <h1>Dark Echoes</h1>

      <section className="layout">
        <EpisodeList
          episodes={episodes}
          selectedEpisode={selectedEpisode}
          setSelectedEpisode={setSelectedEpisode}
        />

        <EpisodeDetails
          selectedEpisode={selectedEpisode}
        />
      </section>
    </main>
  );
}