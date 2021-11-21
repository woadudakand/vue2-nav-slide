<template>
  <div id="app">
    <SlideOut :startWidth="40" :endWidth="250">
      <template v-slot:navbar>
        <ul>
          <li>List one</li>
          <li>List two</li>
          <li>List three</li>
          <li>List Four</li>
          <li>List Five</li>
        </ul>
      </template>
      <template v-slot:button> <button>Click</button> </template>
      <template v-slot:mainContent>
        <section style="padding: 15px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          repellendus nulla eum rerum sunt at alias, corporis error tempora
          aliquam vero velit amet cumque nobis iure tempore omnis. Laborum,
          praesentium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ducimus repellendus nulla eum rerum sunt at alias, corporis error
          tempora aliquam vero velit amet cumque nobis iure tempore omnis.
          Laborum, praesentium. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ducimus repellendus nulla eum rerum sunt at alias,
          corporis error tempora aliquam vero velit amet cumque nobis iure
          tempore omnis. Laborum, praesentium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ducimus repellendus nulla eum rerum sunt
          at alias, corporis error tempora aliquam vero velit amet cumque nobis
          iure tempore omnis. Laborum, praesentium. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ducimus repellendus nulla eum rerum sunt
          at alias, corporis error tempora aliquam vero velit amet cumque nobis
          iure tempore omnis. Laborum, praesentium.
        </section>
      </template>
    </SlideOut>
  </div>
</template>
<script>
import SlideOut from "./components/SlideOut.vue";

export default {
  name: "app",
  components: { SlideOut },
};
</script>

<style>
html {
  overflow-x: hidden;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  overflow-x: hidden;
}
</style>
