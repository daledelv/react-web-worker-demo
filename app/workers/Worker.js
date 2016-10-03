
import Fibonacci from '../utils/Fibonacci';

self.onmessage = (message) => {
    var buffer = message.data.buffer;
    var view = new Uint32Array(buffer);
    var fibonacci = new Fibonacci();
    var current = fibonacci.compute(view[0], view[1]);
    view[0] = view[1];
    view[1] = current;
    self.postMessage({'buffer': buffer}, [buffer]);
}
