function Screen(props) {
  const src = `https://www.youtube.com/embed/${props.youtube_id}?autoplay=1&mute=1&playsinline=1&loop=1&controls=0&playlist=${props.youtube_id}`;

  return (
    <iframe 
      width={props.width}
      height={props.height}
      src={src}
      frameborder="0"
      fs="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
    </iframe>
  );
}

export default Screen;