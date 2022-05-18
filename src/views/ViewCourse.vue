<template>
  <div class="outer-services">
    <div class="container" style="textalign: center">
      <div class="section-heading">Courses you can Enroll</div>
      <div class="services">
        <div v-for="(course, idx) in this.courses" :key="idx">
          <div @click="route(course)" class="service">
            <img :src="require(`../assets/${course.img}`)" />
            <div class="service-heading">{{ course.title }}</div>
            <div class="service-text">
              Course Lecturer: {{ course.lecturer }} <br />Course Length:
              {{ course.length }} <br />Course Prerequisites:
              {{ course.prereq }}
              <b-button id="viewc">View Course</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'ViewCourse',
  methods: {
    ...mapActions(['addCourse']),
    route(course) {
      this.addCourse(course);
      this.$router.push(`enroll/${course.link}`);
    },
  },
  data() {
    return {
      courses: [
        {
          link: 'git',
          img: 'git.jpg',
          title: 'Git & Github',
          lecturer: 'Alex Pinto',
          length: '5 hours',
          prereq: 'HTML & CSS',
          file: {
            videotext: 'This video covers the basics of git and GitHub',
            video: 'https://www.youtube.com/embed/Uszj_k0DGsg',
            linktext:
              'Practice your git commands by completing the tasks in this website',
            link: 'https://learngitbranching.js.org/',
            pdftext:
              'Attached below is cheat sheet which will help you memorize those commands as soon as possible',
            pdf: 'https://education.github.com/git-cheat-sheet-education.pdf',
          },
          desc: `Version control is an integral part in companies that work in teams.
Git and GitHub allows you keep a record of all the changes that you and your team as done in the project

This course teaches you how to use version control in your projects.
There is interactive media and vidoes to get a edge in learning. This course is the first step to becoming a DevOps master.

This course will teach you how to
1.Get familiar with the concept of version control 
2. Learn to make your first commit.
3. Learn to make a branch.
4. Learn to Merge branches
5. Learn to resolve merge conflicts

This course is compatible with beginners also.`,
        },
        {
          link: 'docker',
          img: 'docker.jpg',
          title: 'Docker',
          lecturer: 'Desmond Daimon',
          length: '12 hours',
          prereq: 'Basic programming skills',
          file: {
            videotext: 'This video covers the basics of Docker in DevOps',
            video: 'https://www.youtube.com/embed/pTFZFxd4hOI',
            linktext:
              'Play with the different commands of docker and get the hang of all the commands in docker',
            link: 'https://www.docker.com/play-with-docker/',
            pdftext:
              'Attached below is text book about docker where you can learn more about docker and further improve your understanding on the same',
            pdf: 'https://riptutorial.com/Download/docker.pdf',
          },
          desc: `Docker is the trending DevOps tool that allows you to containerize your 
project so that it can be run on any system.
With the rise of framework and dependencies docker is seeing a great spike in its usage.

This course will teach you how to
1. Install Docker .
2. Create a virtual environment.
3.Deploy your app and make it compatible with any pc on the planet.

This course is compatible with beginners as well.`,
        },
      ],
    };
  },
};
</script>

<style scoped>
#viewc {
  margin-top: 20px;
  background: #000;
  color: #fff;
}
img {
  width: 200px;
  height: 120px;
}
.section-heading {
  padding-bottom: 50px;
  margin-right: 100px;
  font-size: 3rem;
}
.outer-services {
  background-color: #e0f3fe;
  padding: 60px 0 80px 0;
}
.services {
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-around; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.service {
  text-decoration: none;
  width: 280px;
  height: 400px;
  padding: 0px 40px;
  background-color: #4f6ecc;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.service-heading {
  font-size: 1.25rem;
  font-weight: bold;
  color: #fff;
  text-align: left;
  padding-top: 20px;
  text-align: center;
  padding-bottom: 10px;
}
.service-text {
  color: #fff;
}
</style>
