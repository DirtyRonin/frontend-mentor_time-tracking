import React from 'react';
import { UserReport } from '../../models/user-report';
import { ActivityItem } from './activity-item';
import { UserTracker } from './user-tracker';

export function TimeTracker() {
  const [state, dispatch] = React.useState<UserReport>({
    user: { name: 'Jeremy Robson' },
    activities: [
      { title: 'work', timeframe: { current: 13, previous: 10 } },
      { title: 'play', timeframe: { current: 13, previous: 10 } },
      { title: 'study', timeframe: { current: 13, previous: 10 } },
      { title: 'exercise', timeframe: { current: 13, previous: 10 } },
      { title: 'social', timeframe: { current: 13, previous: 10 } },
      { title: 'self care', timeframe: { current: 13, previous: 10 } },
    ],
    timeframe: 'weekly',
  });

  return (
    <div>
      <div className="flex flex-col w-full px-[24px] py-[80px] gap-4 bg-very-dark-blue">
        <UserTracker name={state.user.name} imgUrl="" />
        <div className="flex flex-row flex-wrap gap-4">
          {state.activities.map((x, index) => (
            <ActivityItem key={index} activity={x} timeframeType={state.timeframe} />
          ))}
        </div>
      </div>
    </div>
  );
}
