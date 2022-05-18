import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ViewCourse from '../views/ViewCourse.vue';
import EnrollCourse from '../views/EnrollCourse.vue';
import CourseDetails from '../views/CourseDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/view-course',
    name: 'ViewCourse',
    component: ViewCourse,
  },
  {
    path: '/enroll/:title',
    name: 'EnrollCourse',
    component: EnrollCourse,
  },
  {
    path: '/course/:title',
    name: 'CourseDetails',
    component: CourseDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
