type Props = {
  color: string;
};

const BallLoader: React.FC<Props> = ({ color }) => {
  return (
    <div className="flex items-center justify-center space-x-2 animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-x-2">
      <div
        style={{ backgroundColor: color }}
        className="w-6 h-6 rounded-full animate-beat-load"
      ></div>
      <div
        style={{ backgroundColor: color }}
        className="w-6 h-6 rounded-full animate-beat-load animation-delay-200"
      ></div>
      <div
        style={{ backgroundColor: color }}
        className="w-6 h-6 rounded-full animate-beat-load animation-delay-400"
      ></div>
    </div>
  );
};

export default BallLoader;
