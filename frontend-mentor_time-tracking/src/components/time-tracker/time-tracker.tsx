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
    <div>
      <div className="flex flex-col w-full px-[24px] py-[80px] gap-5 bg-very-dark-blue">
        <UserTracker name={state.user.name} imgUrl="" timeframe={state.timeframe} setTimeframe={setTimeframe} />
        <div className="flex flex-row flex-wrap gap-5">
          {state.activities.map((x, index) => (
            <ActivityItem key={index} activity={x} timeframeType={state.timeframe} />
          ))}
        </div>
      </div>
    </div>
  );
}
