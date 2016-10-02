
self.onmessage = (message) => {
    var buffer = message.data.buffer;
    var view = new Uint32Array(buffer);
    view[0] = view[0] + 1;
    view[1] = view[1] + view[0];
    self.postMessage({'buffer': buffer}, [buffer]);
}
