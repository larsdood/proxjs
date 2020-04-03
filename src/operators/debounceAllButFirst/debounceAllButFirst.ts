import { Observable, UnaryFunction, concat } from 'rxjs';
import { debounceTime, skip, take } from 'rxjs/operators';

export function debounceAllButFirst<T>(time: number): UnaryFunction<Observable<T>, Observable<T>> {
  return (source: Observable<T>) => concat(source.pipe(take(1)), source.pipe(skip(1), debounceTime(time)));
}
