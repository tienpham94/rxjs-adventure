import { Observable } from "rxjs";

const observable = Observable.create((observable: any) => {
  observable.next("Hello world");
  observable.next("Buddy");
});

observable.subscribe((x: any) => console.log(x));

// const logItem = (val: any) => {
//   const node = document.createElement()
// }