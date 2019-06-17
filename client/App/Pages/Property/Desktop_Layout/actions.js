export const SELECT_ROOM_DESKTOP = 'SELECT_ROOM_DESKTOP';

export function selectRoomDesktop(roomSlug,room) {
  return {
    type: SELECT_ROOM_DESKTOP,
    room,
    roomSlug
  };
};