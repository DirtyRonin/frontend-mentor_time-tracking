import { ActivityTheme } from '../models/activity-theme';
import IconWork from '../project/images/icon-work.svg';
import { getPublicUrl } from './get-public-url';

export function GetActivityTheme(theme: ActivityTheme) {
  switch (theme) {
    case 'work':
      return { color: 'bg-light-orange', icon: getPublicUrl('/img/icon-work.svg') };
    case 'play':
      return { color: 'bg-soft-blue', icon: getPublicUrl('/img/icon-play.svg') };
    case 'study':
      return { color: 'bg-light-red', icon: getPublicUrl('/img/icon-study.svg') };
    case 'exercise':
      return { color: 'bg-lime-green', icon: getPublicUrl('/img/icon-exercise.svg') };
    case 'social':
      return { color: 'bg-violet', icon: getPublicUrl('/img/icon-social.svg') };
    case 'self care':
      return { color: 'bg-soft-orange', icon: getPublicUrl('/img/icon-self-care.svg') };

      return undefined;
  }
}
