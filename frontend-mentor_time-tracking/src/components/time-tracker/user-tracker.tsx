import Avatar from '../../project/images/image-jeremy.png';

interface UserTrackerProps {
  name: string;
  imgUrl: string;
}

export function UserTracker({ name }: UserTrackerProps) {
  return (
    <div className="flex flex-col bg-dark-blue rounded-2xl ">
      <div className="grid grid-cols-[2fr,5fr] items-center justify-center bg-blue px-7 py-6 gap-3 rounded-2xl">
        <img className="w-[80px] rounded-full border-[3px] border-white" alt="" src={Avatar} />
        <div>
          <p className="text-pale-Blue opacity-60 font-normal text-sm">Report for</p>
          <p className="text-white opacity-80 font-light text-xl">{name}</p>
        </div>
      </div>
      <div className="grid text-pale-Blue opacity-60 grid-cols-3 py-6">
        <button>Daily</button>
        <button>Weekly</button>
        <button>Monthly</button>
      </div>
    </div>
  );
}
