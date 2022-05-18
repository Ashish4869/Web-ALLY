<template>
  <div>
    <b-navbar toggleable="xl" class="header">
      <b-navbar-brand>
        <router-link class="nav-heading" :to="{ path: '/' }">
          <img class="logo" src="../assets/logo.png" />
          AKademy
        </router-link>
      </b-navbar-brand>

      <b-navbar-nav class="mx-auto">We are all you need!</b-navbar-nav>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto">
          <b-navbar-nav>
            <b-nav-item class="nav-flex-item">
              <router-link class="nav-item" :to="{ path: '/' }">
                Home
              </router-link>
            </b-nav-item>
            <b-nav-item class="nav-flex-item">
              <router-link class="nav-item" :to="{ path: '/view-course' }">
                Courses
              </router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.logo {
  width: 50px;
  height: 50px;
  transform: scale(1.4);
}
@media (min-width: 768px) {
  .header {
    padding: 1rem 16rem;
  }
}
@media (max-width: 767px) {
  .header {
    padding: 1rem 2rem;
  }
}
@media (max-width: 600px) {
  .d-flex {
    display: block !important;
  }
}
.header {
  background-color: #e0f3fe;
}
.nav-heading {
  color: #000 !important;
  text-decoration: none !important;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
}
.nav-item {
  padding: 0 4px !important;
  font-size: 18px;
  color: #000;
  font-weight: 600;
  text-decoration: none !important;
}
.nav-item:hover {
  text-decoration: underline !important;
}
.logout {
  color: #000;
}
</style>
