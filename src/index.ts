import { Observable } from "rxjs";

const observable = Observable.create((observable: any) => {
  observable.next("Hello world");
});
