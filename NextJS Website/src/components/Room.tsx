type RoomProps = {
  name: string;
  description: string;
  event: string;
  gradient: Array<string>;
  active: boolean 
};
const Room = (props: RoomProps) => {
  return (
    <a href="#" className="w-full mx-auto hover:ease-in-out duration-150 transition">
      <div className="text-left rounded-xl bg-gradient-to-r from-blue-500 to-slate-400 p-4">
        <h2 className="font-bold text-3xl">{props.name}</h2>
        <h3 className="font-medium text-lg opacity-[50%]">{props.event}</h3>
      </div>
    </a>
  );
};

export default Room;
