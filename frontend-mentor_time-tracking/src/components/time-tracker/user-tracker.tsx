import { timeframes, TimeframeType } from '../../models/timeframe-type';
import Avatar from '../../project/images/image-jeremy.png';

interface UserTrackerProps {
  name: string;
  imgUrl: string;
  timeframe: TimeframeType;
  setTimeframe?: (timeframe: TimeframeType) => void;
}

export function UserTracker({ name, timeframe, setTimeframe }: UserTrackerProps) {
  return (
    <div className="flex flex-col bg-dark-blue rounded-2xl ">
      <div className="grid grid-cols-[2fr,5fr] items-center justify-center bg-blue px-7 py-6 gap-3 rounded-2xl">
        <img className="w-[80px] rounded-full border-[3px] border-white" alt="" src={Avatar} />
        <div>
          <p className="text-pale-Blue opacity-60 font-normal text-sm">Report for</p>
          <p className="text-white opacity-80 font-light text-xl">{name}</p>
        </div>
      </div>
      <div className="grid  grid-cols-3 py-6">
        {timeframes.map((x) => (
          <button
            onClick={() => setTimeframe?.(x)}
            key={`timeframe-button-key-${x}`}
            className={`capitalize font-normal ${x === timeframe ? 'text-white' : 'text-pale-Blue'} active:text-white`}
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  );
}
