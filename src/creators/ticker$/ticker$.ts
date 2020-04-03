import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

const DEFAULT_TICKER_INTERVAL = 50;
const DEFAULT_TICKER_STEPS = 20;

export interface TickerOptions {
  tickerInterval?: number;
  tickerSteps?: number;
}

export function ticker$(startValue: number, endValue: number, options?: TickerOptions): Observable<number> {
  const tickerInterval = options?.tickerInterval ?? DEFAULT_TICKER_INTERVAL;
  const tickerSteps = options?.tickerSteps ?? DEFAULT_TICKER_STEPS;

  return interval(tickerInterval).pipe(
    take(tickerSteps),
    map((count) => ++count),
    map((count) => Math.floor(startValue * ((tickerSteps - count) / tickerSteps) + endValue * (count / tickerSteps))),
  );
}
