export const UPDATE_SPECIAL_REQUESTS = 'UPDATE_SPECIAL_REQUESTS';

export const updateSpecialRequests = (data) => {
  const description = joinDescription(data);
  return {
    type: UPDATE_SPECIAL_REQUESTS,
    description
  };
};

function joinDescription(data) {
  const keys = Object.keys(data);
  let description = '';
  keys.forEach( key => {
    if ( data[key] ) return description += key + ': ' + data[key] + ' |';
  });
  return description;
};