/// <reference types="@types/spotify-web-playback-sdk"/>
import WebPlaybackProps from '../../../interfaces/WebPlaybackProps';

const WebPlayback: React.FC<WebPlaybackProps> = ({ task }) => {
    const playlistID = task.playlist_id;

  return (
    <>
      <iframe
        className='spotify-embed'
        title="Spotify Embed: Recommendation Playlist "
        src={`https://open.spotify.com/embed/playlist/${playlistID}?utm_source=generator&theme=0`}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </>
  );
};

export default WebPlayback;