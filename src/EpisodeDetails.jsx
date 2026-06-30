export default function EpisodeDetails({ selectedEpisode }) {
  return (
    <div className="episode-details">
      <h2>Episode Details</h2>

      {selectedEpisode ? (
        <>
          <h3>Episode {selectedEpisode.id}</h3>
          <h2>{selectedEpisode.title}</h2>
          <p>{selectedEpisode.description}</p>
          <button>Watch Now</button>
        </>
      ) : (
        <p>Please select an episode.</p>
      )}
    </div>
  );
}
