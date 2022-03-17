import {once,delay} from '.';

test('twice', async () => {
  const firstCall = jest.fn();
  const secondCall = jest.fn();

  once('once', () => { firstCall(); console.debug(1) }, 1000);
  once('once', secondCall, 1000);
  await delay(2000);

  expect(firstCall.mock.calls.length).toBe(0);
  expect(secondCall.mock.calls.length).toBe(1);
});