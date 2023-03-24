import { ActivityTheme } from './activity-theme';
import { Timeframe } from './timeframe';

export interface Activity {
  title: ActivityTheme;
  timeframe: Timeframe;
}
