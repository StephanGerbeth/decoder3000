<script>
import Subtitle from '../Subtitle.vue';
import {register} from '../../services/speechToText';

export default {
  extends: Subtitle,
  name: 'Speech',

  created() {
    register((entry) => {
      if(entry.final) {
        this.textHistory.push(entry.text);
        this.textPartial = '';
      } else {
        this.textPartial = entry.text;
      }
    });
  }
}

</script>

<style>
  li {
    background: green;
  }
</style>
