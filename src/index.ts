interface Call {

  addedTimes: number;

  func: Function;

}

const functions: Map<string, Call> = new Map();

export function delay(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(); }, delay);
  });
}

export async function once(
  name:string, 
  aFunc: Function, 
  milliseconds: number, 
): Promise<void> {

  let call = functions.get(name);
  if (!call) {
    call = {
      addedTimes: 0,
      func: aFunc
    };
    functions.set(name, call);
  }
  call.addedTimes += 1;
  call.func = aFunc;

  if (call.addedTimes > 1) {
    return;
  }

  await delay(milliseconds);

  call = functions.get(name);
  if (!call) return;
  functions.delete(name);
  call.func();
}