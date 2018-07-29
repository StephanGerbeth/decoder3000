class AudioBuffer {
  constructor() {

  }

  load(path, context) {

    return fetch(path, {
      mode: 'cors'
    })
      .then((result) => {
        return result.arrayBuffer()
          .then((buffer) => {
            return {url: result.url, buffer: buffer};
          });
      })
      .then((result) => {
        return new Promise((resolve, reject) => {
          context.decodeAudioData(result.buffer, resolve, reject);
        })
        .then((buffer) => {
          return {
            url: result.url,
            buffer: buffer
          };
        });
      });

  }
}

export default new AudioBuffer();
