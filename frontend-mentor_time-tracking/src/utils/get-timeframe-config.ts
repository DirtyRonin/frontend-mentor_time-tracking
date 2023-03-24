import { TimeframeType } from '../models/timeframe-type';

export function GetTimeframeConfig(timeframe: TimeframeType) {
  switch (timeframe) {
    case 'daily':
      return 'yesterday';
    case 'weekly':
      return 'last week';
    case 'monthly':
      return 'last month';

    default:
      return undefined;
  }
}
