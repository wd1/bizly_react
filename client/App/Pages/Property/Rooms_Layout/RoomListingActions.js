export const TOGGLE_ROOM_TAB = 'TOGGLE_ROOM_TAB';

export function toggleRoomTab(id) {
  return {
    type: TOGGLE_ROOM_TAB,
    id
  };
};