export default function EpisodeList({
  episodes,
  selectedEpisode,
  setSelectedEpisode,
}) {
  return (
    <div className="episode-list">
      <h2>Episodes</h2>

      {episodes.map((episode) => {
        return (
          <p
            key={episode.id}
            className={
              selectedEpisode?.id === episode.id ? "active" : ""
            }
            onClick={() => setSelectedEpisode(episode)}
          >
            {episode.title}
          </p>
        );
      })}
    </div>
  );
}