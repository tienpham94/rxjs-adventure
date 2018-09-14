import { Observable } from "rxjs";

const observable = Observable.create((observer: any) => {
  observer.next("Hello world");
  observer.next("Buddy");
  observer.complete();
  observer.next("Buddy");
});

const logItem = (val: any) => {
  const node = document.createElement("li");
  const textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById("list").appendChild(node);
};

observable.subscribe(
  (x: any) => logItem(x),
  (error: any) => logItem(error),
  () => logItem("completed")
);
