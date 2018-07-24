<template>
  <div>
    <!-- Header -->
    <header id="header">
      <a href="/#intro"><h1>Chelsea & Jason</h1></a>
      <nav>
        <ul>
          
          <li><a href="/#where">About the Farm</a></li>
          <li><a href="/#details">Wedding Details</a></li>
                    <li><a href="/#four">Camping Info</a></li>
          <li><a href="/#gifts">Gifts</a></li>
          <li> <a href="https://goo.gl/forms/VhGFkgeedX6JtxNQ2" class="button--green2" target=_blank>RSVP</a></li>
        </ul>
      </nav>
    </header>

    <nuxt/>

    <!-- Footer -->
    <footer id="footer">

      <!-- Icons -->
        <ul class="actions">
          <li><a href="#" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
          <li><a href="#" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
          <li><a href="#" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
          <li><a href="#" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
          <li><a href="#" class="icon fa-dribbble"><span class="label">Dribbble</span></a></li>
          <li><a href="#" class="icon fa-pinterest"><span class="label">Pinterest</span></a></li>
        </ul>

      <!-- Menu -->
        <ul class="menu">
        
        </ul>

    </footer>

    <!-- Scripts -->
    <script src="/assets/js/jquery.min.js"></script>
    <script src="/assets/js/jquery.poptrox.min.js"></script>
    <script src="/assets/js/jquery.scrolly.min.js"></script>
    <script src="/assets/js/jquery.scrollex.min.js"></script>
    <script src="/assets/js/skel.min.js"></script>
    <script src="/assets/js/util.js"></script>
    <!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
    <script src="/assets/js/main.js"></script>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--green2 {
  display: inline-block;
  border-radius: 2px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 15px 40px;
}

.button--green2:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
