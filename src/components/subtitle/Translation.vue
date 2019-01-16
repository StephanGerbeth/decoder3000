<script>
import Subtitle from "../Subtitle.vue";
import { translate } from "../../services/translation";
import { partial, final } from "../../services/speechToText";
import { switchMap, shareReplay } from "rxjs/operators";

const finalTranslated = final.pipe(
  switchMap(text => translate(text)),
  shareReplay(1000)
);

export default {
  extends: Subtitle,

  created() {
    partial.pipe(switchMap(text => translate(text))).subscribe(text => {
      this.textPartial = text;
    });

    finalTranslated.subscribe(text => {
      this.textFinal = text;
      this.textPartial = "";
    });

    setTimeout(() => {
      finalTranslated.subscribe(text => {
        console.log("AHA", text);
      });
    }, 15000);
  }
};
</script>
