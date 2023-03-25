export const timeframes = ['daily', 'weekly', 'monthly'] as const;

export type TimeframeType = typeof timeframes[number];
