export const TOGGLE_MOBILE_VIEW = 'TOGGLE_MOBILE_VIEW';

export const OPEN_ROOM_MODAL = 'OPEN_ROOM_MODAL';

export const CLOSE_ROOM_MODAL = 'CLOSE_ROOM_MODAL';

export function toggleMobileView() {
  return {
    type: TOGGLE_MOBILE_VIEW
  };
};

export function openRoomModal(roomSlug, room) {
  return {
    type: OPEN_ROOM_MODAL,
    roomSlug,
    room
  };
};

export function closeRoomModal() {
  return {
    type: CLOSE_ROOM_MODAL
  };
};