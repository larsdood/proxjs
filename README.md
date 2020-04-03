# pRoXJS

Additional operators, creators and utils for RxJs.

## Creators

### ticker$
An asynchronous creator function that returns a stream that ticks between two values over a specified duration (default 20 ticks over one second)

## Operators

### arrayFilter
An operator that takes emissions with array values and filters on the value of the emission

### debounceAllButFirst
An operator that debounces all but the first emission

### differenceRatio
An operator that emits the difference ratio between the current emission and previous emission (both must be numbers)

### pipeTimer
An operator that emits the time between it was created until the source observable completes (useful for evaluating runtime of pipes etc.)

## Utils

### select
Short-hand for getting the emitted value from a synchronous stream