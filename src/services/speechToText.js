import Sonus from "sonus";
import path from "path";
import cloudSpeech from "@google-cloud/speech";
import { fromEvent } from "rxjs";
import { filter, tap } from "rxjs/operators";

const speech = cloudSpeech({
  projectId: "streaming-speech-sample",
  keyFilename: path.resolve("./credentials/google_api.json")
});

const hotwords = [
  {
    file: path.resolve("./node_modules/sonus/resources/sonus.pmdl"),
    hotword: "sonus",
    sensitivity: 0.5
  },
  {
    file: path.resolve("./hotwords/Grabarz___Partner.pmdl"),
    hotword: "Grabarz&Partner",
    sensitivity: 0.5
  },
  {
    file: path.resolve("./hotwords/Bam.pmdl"),
    hotword: "Bam",
    sensitivity: 0.5
  }
];

const language = "de-DE";
const sonus = Sonus.init({ hotwords, language, recordProgram: "rec" }, speech);
const finalResult = fromEvent(sonus, "final-result");
finalResult.subscribe(() => Sonus.trigger(sonus, 0, "continue"));

Sonus.start(sonus);
Sonus.trigger(sonus, 0, "continue");

export const hotword = fromEvent(sonus, "hotword");
export const silence = fromEvent(sonus, "silence");
export const noise = fromEvent(sonus, "sound");
export const error = fromEvent(sonus, "error");
export const partial = fromEvent(sonus, "partial-result").pipe(
  filter(text => !!text)
);
export const final = finalResult.pipe(filter(text => !!text));

error.subscribe(e => console.error(e));

export function addCommands(list) {
  let commands = list.reduce(function(result, item) {
    result[item.key] = item.fn;
    return result;
  }, {});
  console.log(commands);
  Sonus.annyang.addCommands(commands);
}

addCommands([
  {
    key: "hello",
    fn: function() {
      console.log("You will obey");
    }
  },
  {
    key: "(give me) :flavor ice cream",
    fn: function(flavor) {
      console.log("Fetching some " + flavor + " ice ceam for you sr");
    }
  },
  {
    key: "turn (the)(lights) :state (the)(lights)",
    fn: function(state) {
      console.log("Turning the lights", state == "on" ? state : "off");
    }
  }
]);
