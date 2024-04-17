<template>
  <div class="row justify-content-center">
    <div class="col col-5">

      <MainEventInfo/>

    </div>
  </div>
</template>

<script>
import MainEventInfo from "@/components/event/MainEventInfo.vue";

export default {
  name: "NewEventView",
  components: {MainEventInfo}
}
</script>


