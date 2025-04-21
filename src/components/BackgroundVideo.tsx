
interface BackgroundVideoProps {
  videoUrl: string;
  fallbackImage?: string;
}

const BackgroundVideo = ({
  videoUrl,
  fallbackImage,
}: BackgroundVideoProps) => (
  <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
    <video
      className="object-cover w-full h-full min-h-screen"
      src={videoUrl}
      poster={fallbackImage}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      style={{ objectPosition: "center center" }}
    />
    {/* Overlay for sleek look */}
    <div className="absolute inset-0 bg-gradient-to-tr from-black/75 via-black/30 to-transparent" />
  </div>
);

export default BackgroundVideo;
