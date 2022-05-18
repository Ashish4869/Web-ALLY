<template>
  <div class="container">
    <h1>{{ this.course.title }}</h1>
    <h3>By {{ this.course.lecturer }}</h3>
    <div class="section">
      <h4>
        {{ this.course.lecturer }} at 17/03/2022 <br />
        {{ this.course.file.videotext }}
      </h4>
      <details>
        <summary>View resource</summary>
        <p>
          <iframe
            width="560"
            height="315"
            :src="this.course.file.video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </p>
      </details>
    </div>
    <div class="section">
      <h4>
        {{ this.course.lecturer }} at 12/02/2022 <br />
        {{ this.course.file.linktext }}
      </h4>
      <details>
        <summary>View resource</summary>
        <a :href="this.course.file.link" target="_blank">Link to resource</a>
      </details>
    </div>
    <div class="section">
      <h4>
        {{ this.course.lecturer }} at 02/01/2022 <br />
        {{ this.course.file.pdftext }}
      </h4>
      <details>
        <summary>View resource</summary>
        <a :href="this.course.file.pdf" target="_blank">Link to PDF</a>
      </details>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CourseDetails',
  data() {
    return {
      course: {},
    };
  },
  methods: {
    ...mapGetters(['getCourse']),
    loadLocalData() {
      this.course = this.getCourse();
      console.log(this.getCourse());
    },
  },
  created() {
    this.loadLocalData();
  },
};
</script>

<style>
.container {
  margin-top: 50px;
}
.section {
  margin: 40px 0;
  padding: 20px 10px;
  background-color: #e0f3fe;
  box-shadow: 0 0 15px #999;
}
</style>
