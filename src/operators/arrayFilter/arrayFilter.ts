import { from, Observable, pipe, UnaryFunction } from 'rxjs';
import { filter, flatMap, toArray } from 'rxjs/operators';

export function arrayFilter<T>(predicate: (value: T) => boolean): UnaryFunction<Observable<T[]>, Observable<T[]>> {
  return pipe(flatMap((value) => from(value).pipe(filter(predicate), toArray())));
}
