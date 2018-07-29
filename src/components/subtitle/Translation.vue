<script>
import Subtitle from '../Subtitle.vue';
import {translate} from '../../services/translation';
import {register} from '../../services/speechToText';

export default {
  extends: Subtitle,

  created() {
    register((entry) => {
      translate(entry.text).then((text) => {
        if(entry.final) {
          this.textHistory.push(text);
          this.textPartial = '';
        } else {
          this.textPartial = text;
        }
      });
    });
  }
}

</script>
