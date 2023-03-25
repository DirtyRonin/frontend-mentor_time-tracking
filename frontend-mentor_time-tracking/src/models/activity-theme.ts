export const activities = ['Work', 'Play', 'Study', 'Exercise', 'Social', 'Self Care'] as const;

export type ActivityTheme = typeof activities[number];
