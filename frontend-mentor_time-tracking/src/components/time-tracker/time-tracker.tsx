import React from 'react';
import { GetReportsByTimeframe } from '../../api/report-api';
import { TimeframeType } from '../../models/timeframe-type';
import { UserReport } from '../../models/user-report';
import { ActivityItem } from './activity-item';
import { UserTracker } from './user-tracker';

export function TimeTracker() {
  const [state, dispatch] = React.useState<UserReport>({
    user: { name: 'Jeremy Robson' },
    activities: [],
    timeframe: 'weekly',
  });

  React.useEffect(() => {
    GetReportsByTimeframe(state.timeframe).then((result) => dispatch((prev) => ({ ...prev, activities: result })));
  }, [state.timeframe]);

  const setTimeframe = (timeframe: TimeframeType) => dispatch((prev) => ({ ...prev, timeframe }));

  return (
    <div className="flex flex-col md:flex-row w-full px-[24px] md:pl-[100px] py-[80px]  md:p-0 gap-5 md:gap-[30px] bg-very-dark-blue md:justify-center md:items-start">
      <div className="">
        <UserTracker name={state.user.name} imgUrl="" timeframe={state.timeframe} setTimeframe={setTimeframe} />
      </div>
      <div className="flex flex-row flex-wrap gap-5 md:gap-[31px]  ">
        {state.activities.map((x, index) => (
          <ActivityItem key={index} activity={x} timeframeType={state.timeframe} />
        ))}
      </div>
    </div>
  );
}
