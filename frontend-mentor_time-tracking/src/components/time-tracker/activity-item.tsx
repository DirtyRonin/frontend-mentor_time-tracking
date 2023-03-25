import { Activity } from '../../models/activity';
import { GetActivityTheme } from '../../utils/get-activity-theme';
import { ReactComponent as IconEllipsis } from '../../project/images/icon-ellipsis.svg';
import { TimeframeType } from '../../models/timeframe-type';
import { GetTimeframeConfig } from '../../utils/get-timeframe-config';

interface ActivityProps {
  activity: Activity;
  timeframeType: TimeframeType;
}

export function ActivityItem({ activity: { title, timeframe }, timeframeType }: ActivityProps) {
  const theme = GetActivityTheme(title);

  return (
    <div
      className={`relative w-full h-36 bg-no-repeat bg-[top_-0.3rem_right_1rem] ${theme?.color} rounded-2xl  `}
      style={{ backgroundImage: `url("${theme?.icon}")` }}
    >
      <div className="absolute flex flex-col gap-0.5 top-9 bg-dark-blue hover:bg-[hsl(235_46%_30%)] cursor-pointer w-full rounded-2xl p-[25px] ">
        <div className="flex justify-between items-center">
          <p className="text-white capitalize ">{title}</p>
          <button className=" text-pale-Blue opacity-100 active:text-white active:opacity-100">
            <IconEllipsis />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-white font-light text-[1.75rem]">{timeframe.current}hrs</h2>
          <p className="text-pale-Blue opacity-100 capitalize text-[.82rem]">{`${GetTimeframeConfig(timeframeType)} - ${timeframe.previous}hrs`}</p>
        </div>
      </div>
    </div>
  );
}
