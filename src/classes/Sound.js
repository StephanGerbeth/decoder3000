import audioBuffer from '../services/audioBuffer';

window.AudioContext = window.AudioContext || window.webkitAudioContext;

export default class Sound {

  constructor(url) {
    this.context = new AudioContext();

    this.source = audioBuffer.load(url, this.context)
      .then((result) => {
        let source = this.context.createBufferSource();
        source.buffer = result.buffer;
        source.connect(this.context.destination);
        return source;
      });
  }

  play() {
    this.source.then((source) => {
      source.start(0);
    });
  }

  stop() {
    this.source.then((source) => {
      source.stop();
    });
  }
}
