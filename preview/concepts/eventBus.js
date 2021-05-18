const subscribers = {};

const sortFunc = (a, b) => b.priority - a.priority;

export function on(event, callback, priority = 0) {
  if(!subscribers[event]) {
    subscribers[event] = [{callback, priority}];
  }
  else {
    subscribers[event].push({callback, priority});
    subscribers[event].sort(sortFunc);
  }
}

export async function fire(event, ...payload) {
  console.log('fire ', event, payload);

  for(const subscriber of subscribers[event]) {
    try {
      await subscriber.callback(...payload);
    } catch (e) {
      console.error(e);
    }
  }
}