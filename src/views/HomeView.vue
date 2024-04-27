<template>
  <div>

    <div id="app">

      <div class="container">
        <h1>Üritused</h1>
        <!--  <div id= "slider"> -->
        <div id="slide">
          <div v-for="(item, index) in items" :key="index">
            <img :src="item.src" style="width:100%"  alt=""/>
            <div>
              <h6>
                Some text
              </h6>
              <p>
                Lorizzle ipsum dolor sit amizzle, away adipiscing fo shizzle. Nullam my shizz velizzle
              </p>
              <a></a>
            </div>

          </div>
        </div>
          <div >
            <font-awesome-icon @click="previous" :icon="['fas', 'arrow-left']" style="margin-right: 20px" />
            <font-awesome-icon @click="next" :icon="['fas', 'arrow-right']" />
          </div>
      </div>


    </div>


  </div>
</template>

<script>
export default {
  name: 'HomeView',

  el: '#app',
  data() {
    return {
      count: 0,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ],
      direction: 'forward',
      frame: 2
    }
  },
  created(){
    var slide = setInterval(()=>this.slideLoop(this.direction),3000)
  },
  methods:{
    slideLoop(pass) {
      let steps = this.items.length - this.frame
      if(this.count >= steps & pass == 'forward'){
        this.direction = 'backward'
        this.previous()
        return
      }
      if(this.count <= steps & pass == 'backward'){
        if(this.count <= 0){
          this.count = 0
          this.direction = 'forward'
          this.next();
          return
        }
        this.previous()
        return
      }
      if(this.count < steps & pass == 'forward'){
        if(this.count < 0){
          this.resetScroll()
          return
        } else if(this.count == 0){
          this.next()
          return
        }
        this.next()
        return
      }
      this.resetScroll()
    },
    resetScroll(){
      this.count = 0
      this.direction = 'forward'
      this.scroll('reset')
    },
    previous() {
      this.count--
      this.scroll('previous')
    },
    next() {
      this.count++
      this.scroll('next')
    },
    scroll(position) {
      let el = document.getElementById('slide')
      let pos = 0;
      let id = setInterval(frame, 5);
      let num = this.items.length - this.frame
      let width = 250;
      let resize = num * width
      let check = position == 'reset' ? resize : width
      function frame() {
        if (pos == check) {
          clearInterval(id);
        } else {
          pos += 5;
          if(position == 'next'){
            el.scrollLeft += 5
          }else{
            el.scrollLeft -= 5
          }
        }
      }
    }
  }
}
</script>
