export const SELECT_DURATION = 'SELECT_DURATION';

export function selectDuration(duration) {
  return {
    type: SELECT_DURATION,
    duration
  };
};