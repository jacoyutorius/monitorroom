
// 500, 315
function Screen(props) {
  return (
    <iframe 
      width={props.width}
      height={props.height}
      src={`https://www.youtube-nocookie.com/embed/${props.youtube_id}?controls=0`}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  );
}

export default Screen;