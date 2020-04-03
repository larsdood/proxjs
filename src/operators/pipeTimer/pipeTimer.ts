import { Observable, pipe, UnaryFunction } from 'rxjs';
import { ignoreElements, last, map, startWith } from 'rxjs/operators';

export const pipeTimer = (): UnaryFunction<Observable<any>, Observable<number>> =>
  pipe(
    ignoreElements(),
    startWith(Date.now()),
    last(),
    map((startTime) => Date.now() - startTime),
  );
