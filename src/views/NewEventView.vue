<template>
  <div class="row justify-content-center">
    <div class="col col-5">
      <MainEventInfo/>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col col-5">
      <FeatureCategoryInfo/>
    </div>
  </div>

</template>

<script>
import MainEventInfo from "@/components/event/MainEventInfo.vue";
import BusinessDropdown from "@/components/event/BusinessDropdown.vue";
import FeatureCategoryInfo from "@/components/event/FeatureCategoryInfo.vue";

export default {
  name: "NewEventView",
  components: {FeatureCategoryInfo, BusinessDropdown, MainEventInfo}
}
</script>


