<template>
  <div>
    <img id="imgbanner" :src="require(`../assets/${course.img}`)" />
    <div class="container">
      <h1>{{ course.title }}</h1>
      <h4>
        Course Lecturer: {{ course.lecturer }}<br />
        Course Length: {{ course.length }}<br />
        Course Prerequisites: {{ course.prereq }}
      </h4>
      <h4>
        <pre>About the course: {{ course.desc }}</pre>
      </h4>
      <br />
      <br />
      <h5>
        <input id="term" type="checkbox" v-model="isChecked" />
        I have read all the terms & conditions.
      </h5>

      <img src="../assets/pay.png" @click="ValidatePay()" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'EnrollCourse',
  data() {
    return {
      course: {},
      isChecked: false,
    };
  },
  methods: {
    ...mapGetters(['getCourse']),
    loadLocalData() {
      this.course = this.getCourse();
      console.log(this.getCourse());
    },

    ValidatePay() {
      if (this.isChecked) {
        alert('Payment successful!');
        this.$router.push(`/course/${this.course.title.toLowerCase()}`);
      } else alert('Please accept the terms & conditions');
    },
  },
  created() {
    this.loadLocalData();
  },
};
</script>

<style>
#imgbanner {
  height: 60vh;
  width: 100vw;
  object-fit: cover;
}
pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: 'Courier New', Courier, monospace;
}
</style>
