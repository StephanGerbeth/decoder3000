<script>
import Subtitle from "../Subtitle.vue";
import { partial, final } from "../../services/speechToText";
import { shareReplay } from "rxjs/operators";

const finalText = final.pipe(shareReplay(1000));

export default {
  extends: Subtitle,
  name: "Speech",

  created() {
    partial.subscribe(text => {
      this.textPartial = text;
    });

    finalText.subscribe(text => {
      this.textFinal = text;
      this.textPartial = "";
    });

    setTimeout(() => {
      finalText.subscribe(text => {
        console.log("AHA", text);
      });
    }, 15000);
  }
};
</script>

<style>
li {
  background: green;
}
</style>
