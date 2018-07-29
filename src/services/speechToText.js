import Sonus from 'sonus';
import path from 'path';
import cloudSpeech from '@google-cloud/speech';

const speech = cloudSpeech({
  projectId: 'streaming-speech-sample',
  keyFilename: path.resolve('./keyfile.json')
});
const hotwords = [{ file: path.resolve('./node_modules/sonus/resources/sonus.pmdl'), hotword: 'Grabarz' }];
const language = "de-DE";
const sonus = Sonus.init({ hotwords, language, recordProgram: "rec" }, speech);
const registeredCallbacks = [];

Sonus.start(sonus);
sonus.on('hotword', (index, keyword) => {
  console.log("!", keyword, index)
});

sonus.on('partial-result', text => {
  registeredCallbacks.forEach((cb) => {
    cb({text, final: false})
  });
});

sonus.on('final-result', text => {
  if(text) {
    registeredCallbacks.forEach((cb) => {
      cb({text, final: true})
    });
  }
  Sonus.trigger(sonus, 0);
});

export function register(cb) {
  registeredCallbacks.push(cb);
}
