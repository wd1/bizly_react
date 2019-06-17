// used to parse through an array of error objects
export function extractErrorMessages(errors) {
  let messages = [];
  if ( Object.keys(errors).length > 0 ) {
    for (let errorType in errors) {
      if (errors[errorType].length > 0) {
        messages = messages.concat(errors[errorType].map(message => message));
      }
    }
  }
  return messages;
}