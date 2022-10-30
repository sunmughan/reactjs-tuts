import ReactPlayer from "react-player";

const ReactPlayerVideo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReactPlayer
        controls
        width={"480px"}
        height={"240px"}
        onReady={() => console.log("onReady Callback")}
        onStart={() => console.log("onStart Callback")}
        onPause={() => console.log("onPause Callback")}
        onEnded={() => console.log("onEnded Callback")}
        onError={() => console.log("onError Callback")}
        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />
    </div>
  );
};

export default ReactPlayerVideo;
