import { race, Observable, throwError } from 'rxjs';
import { take } from 'rxjs/operators';

export function select<T>(inStream: Observable<T>): T {
  let value: T;

  race(inStream, throwError(new Error(select.name + ' expects a synchronous stream. Received an asynchronous stream.')))
    .pipe(take(1))
    .subscribe((val) => {
      value = val;
    });

  return value!;
}
