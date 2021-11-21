<template>
  <div class="slideOut">
    <aside :style="asideStyle">
      <slot name="navbar">
        <ul>
          <li>List one</li>
          <li>List two</li>
          <li>List three</li>
          <li>List Four</li>
          <li>List Five</li>
        </ul>
      </slot>
    </aside>
    <section :style="mainStyle" id="main">
      <a href="#" @click="onToggle">
        <slot name="button"></slot>
      </a>
      <slot name="mainContent"> </slot>
    </section>
  </div>
</template>

<script>
export default {
  name: "SlideOUt",
  props: {
    startWidth: {
      type: Number,
      default: 40,
    },
    endWidth: {
      type: Number,
      default: 250,
    },
  },
  data() {
    const minWidth = this.startWidth;
    const maxWidth = this.endWidth;

    var down = "mousedown",
      move = "mousemove",
      up = "mouseup";

    const mainStyle = {
      width: "100%",
      transform: `translateX(${minWidth + "px"})`,
    };

    let reactiveData = { colloups: false };
    let colloupsCounter = 0;

    if ("ontouchstart" in document.documentElement) {
      down = "touchstart";
      up = "touchend";
      move = "touchmove";
    }

    window.addEventListener(down, (event) => {
      colloupsCounter = event.touches[0].clientX;
    });
    let counter = minWidth;
    window.addEventListener(move, function (event) {
      if (event.touches[0].clientX > colloupsCounter) {
        reactiveData.colloups = true;
      } else {
        reactiveData.colloups = false;
      }
      if (reactiveData.colloups) {
        if (counter <= maxWidth) {
          counter += 1;
          mainStyle.transform = `translateX(${counter + "px"})`;
        }
      } else {
        if (counter >= minWidth) {
          counter -= 1;
          mainStyle.transform = `translateX(${counter + "px"})`;
        }
      }
    });

    window.addEventListener(up, function () {
      if (reactiveData.colloups) {
        mainStyle.transform = `translateX(${maxWidth + "px"})`;
        reactiveData.colloups = true;
      } else {
        mainStyle.transform = `translateX(${minWidth + "px"})`;
        reactiveData.colloups = false;
      }
    });

    return {
      asideStyle: {
        width: maxWidth + "px",
      },
      mainStyle,
      slideToggle: false,
      reactiveData,
    };
  },
  methods: {
    onToggle() {
      this.reactiveData.colloups = !this.reactiveData.colloups;
      if (this.reactiveData.colloups) {
        this.mainStyle.transform = `translateX(${this.endWidth + "px"})`;
      } else {
        this.mainStyle.transform = `translateX(${this.startWidth + "px"})`;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
aside {
  background-color: #999999;
  color: #ffffff;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
#main {
  transition: all 0.3s linear;
  background-color: #eeeeee;
  height: 100vh;
}
</style>
