import { UnaryFunction, Observable, pipe } from 'rxjs';
import { pairwise, map } from 'rxjs/operators';

export const differenceRatio = (): UnaryFunction<Observable<number>, Observable<number>> =>
  pipe(
    pairwise(),
    map(([previousValue, currentValue]) => (currentValue - previousValue) / previousValue),
  );
