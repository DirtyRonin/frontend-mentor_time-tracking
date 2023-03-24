import { Activity } from './activity';
import { TimeframeType } from './timeframe-type';
import { User } from './user';

export interface UserReport {
  user: User;
  activities: Activity[];
  timeframe: TimeframeType;
}
