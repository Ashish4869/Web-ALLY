<template>
  <div class="footer">
    <div class="container inner-footer">
      <div class="upper-container">
        <div class="left-container">
          <div class="heading">AKademy</div>
          <div class="text">
            We provide quality online learning right at your fingertips You we
            have externals links that take you to sites you never knew existed
            And exclusive content that are present unlisted in our YouTube
            channel
          </div>
        </div>
        <div class="right-container">
          <div class="heading">Contact Us</div>
          <a href="https://facebook.com">
            <img class="social" src="../assets/fb.png" />
          </a>
          <a href="https://twitter.com">
            <img class="social" src="../assets/tw.png" />
          </a>
          <a href="https://instagram.com">
            <img class="social" src="../assets/ig.png" />
          </a>
        </div>
      </div>
      <div class="lower-container">AKademy | Copyright Ⓒ 2022</div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
@media only screen and (max-width: 1268px) {
  .upper-container {
    display: block !important;
  }
  .left-container,
  .right-container {
    width: 200px !important;
    padding: 1em 0 !important;
  }
  .lower-container {
    padding-bottom: 30px;
  }
  .text {
    width: 200px;
  }
}
.footer {
  width: 100%;
  min-height: 29vh;
  background-color: #bec1d9;
  color: #000;
  padding-top: 3em;
  padding-bottom: 20px;
}
.inner-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.upper-container {
  display: flex;
}
.heading {
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 10px;
}
.left-container,
.right-container {
  width: 600px;
}
.left-container {
  padding-right: 100px;
}
.right-container {
  padding-left: 100px;
}
.text {
  width: 400px;
}
.lower-container {
  padding-top: 60px;
}
.social {
  padding-right: 8px;
}
</style>
