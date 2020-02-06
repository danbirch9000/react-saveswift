import { payload } from "../mock-api/accounts/__userId__/get";

test("ThePayloadReturnedIsTruthy", ()=>{
  let test = payload;
  expect(payload).toBeTruthy();
});