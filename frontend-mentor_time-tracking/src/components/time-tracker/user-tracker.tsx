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
    <div className="flex flex-col bg-dark-blue rounded-2xl md:w-[255px] ">
      <div className="flex md:h-[355px] md:flex-col items-center md:items-start justify-start bg-blue px-7 py-6 md:py-8 gap-3 md:gap-8 rounded-2xl">
        <img className="w-[80px] rounded-full border-[3px] border-white" alt="" src={Avatar} />
        <div className="md:flex md:flex-col md:gap-1">
          <p className="text-pale-Blue opacity-80 font-normal text-sm">Report for</p>
          <p className="text-white opacity-100 font-light text-xl md:text-[2.4rem] md:leading-[1.1] md:line">{name}</p>
        </div>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-1 py-6 md:py-5 md:gap-4">
        {timeframes.map((x) => (
          <button
            onClick={() => setTimeframe?.(x)}
            key={`timeframe-button-key-${x}`}
            className={`capitalize font-normal ${x === timeframe ? 'text-white' : 'text-pale-Blue'} active:text-white md:text-start md:pl-7`}
          >
            {x}
          </button>
        ))}
      </div>
    </div>
  );
}
