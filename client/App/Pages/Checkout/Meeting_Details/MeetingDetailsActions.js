export const UPDATE_MEETING_DETAILS = 'UPDATE_MEETING_DETAILS';

export const updateMeetingDetails = (data) => {
  return {
    type: UPDATE_MEETING_DETAILS,
    data
  };
};