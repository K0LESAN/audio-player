export const formatSecondsToTimeString = (seconds: number): string => {
  const formatMinutes: string = String(Math.floor(seconds / 60));
  const formatSeconds: string = String(Math.floor(seconds % 60)).padStart(
    2,
    '0'
  );

  return `${formatMinutes}:${formatSeconds}`;
};
