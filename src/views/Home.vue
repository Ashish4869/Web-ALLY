<template>
  <div class="home">
    <particles />
    <div id="main">
      <h1 class="heading">AKademy</h1>
      <h3>We are all you need!</h3>
      <img id="image" src="../assets/mainimage.png" />
    </div>

    <div class="outer-services">
      <div class="container" style="textalign: center">
        <div class="section-heading">Our Services</div>
        <div class="services">
          <div class="service">
            <!-- <img src="../assets/home-icons/check-icon.png" alt="check-icon" /> -->
            <div class="service-heading">Quality Content</div>
            <div class="service-text">
              The resources used are exclusively made by our experts in the
              workforce.
            </div>
          </div>
          <div class="service">
            <!-- <img src="../assets/home-icons/car-icon.png" alt="car-icon" /> -->
            <div class="service-heading">Variety</div>
            <div class="service-text">
              We offer various courses as well as various methods of learning
              like vidoes and external learning links.
            </div>
          </div>
          <div class="service">
            <!-- <img src="../assets/home-icons/bolt-icon.png" alt="bolt-icon" /> -->
            <div class="service-heading">Easy and Fast Access</div>
            <div class="service-text">
              Our high speed servers make sure that you don't have to wait for
              your course content to load
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="who-are-we">
      <div class="container">
        <div class="section-heading">Who are we?</div>
        <div class="section-text">
          We provide quality online learning right at your fingertips You we
          have externals links that take you to sites you never knew existed And
          exclusive content that are present unlisted in our YouTube channel
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import particles from '../components/particles';

export default {
  name: 'Home',
  components: {
    particles,
  },
};
</script>

<style scoped>
#main {
  margin-top: 70px;
  position: absolute;
  top: 0;
  left: 30%;
  text-align: center;
}
.banner-container {
  position: relative;
}
.banner {
  width: 100%;
}
.banner-text {
  position: absolute;
  top: 26%;
  left: 20%;
  width: 600px;
}
.heading {
  padding-top: 80px;
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
}
.button {
  background-color: #e4c314;
  width: 120px;
  padding: 6px 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button:hover {
  cursor: pointer;
}
.text {
  width: 400px;
  font-size: 1.1rem;
  color: #eee;
  margin-top: 10px;
}

.button-text {
  font-size: 1.1rem;
  color: #000;
  text-decoration: none;
}

.outer-services {
  background-color: #e0f3fe;
  padding: 60px 0 80px 0;
  text-align: center;
}
.services {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.service {
  width: 280px;
  height: 300px;
  padding: 20px 40px;
  background-color: #4f6ecc;
  opacity: 0.8;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.service-heading {
  font-size: 1.25rem;
  font-weight: bold;
  color: #fff;
  padding-top: 20px;
  padding-bottom: 10px;
}
.service-text {
  color: #fff;
}

.who-are-we {
  padding: 0 0 80px 0;
  text-align: center;
  background: #e0f3fe;
}
.section-heading {
  font-size: 2.2rem;
  font-weight: bold;
  color: #000;
  padding-bottom: 30px;
  text-align: center;
}
.section-text {
  font-size: 1.1rem;
  color: #000;
}
</style>
