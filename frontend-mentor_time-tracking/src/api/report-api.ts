import { Activity } from '../models/activity';
import { ActivityTheme } from '../models/activity-theme';
import { Timeframe } from '../models/timeframe';
import { TimeframeType } from '../models/timeframe-type';
import { getPublicUrl } from '../utils/get-public-url';

type TimeframeDto = {
  title: ActivityTheme;
  timeframes: {
    daily: Timeframe;
    weekly: Timeframe;
    monthly: Timeframe;
  };
};

export async function GetReportsByTimeframe(timeframe: TimeframeType) {
  const values: TimeframeDto[] = await fetch(getPublicUrl('/assets/data.json'))
    .then((response) => response.json())
    .then((data) => data);

  return values.map<Activity>((x) => ({ title: x.title, timeframe: x.timeframes[timeframe] }));
}
