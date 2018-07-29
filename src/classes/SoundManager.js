import Sound from './Sound';

class SoundManager {
  constructor() {
    this.list = new Map();
  }

  get(url) {
    if(!this.list.has(url)) {
      this.list.set(url, new Sound(url));
    }
    return this.list.get(url);
  }
}

export default SoundManager;
