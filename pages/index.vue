<template>
  <div>
		<!-- Intro -->
			<section id="intro" class="main style1 dark fullscreen">
				<div class="content">                             
					<header>
						<h2>Mason & Cecilia</h2><h3>do the thing</h3>
					</header>
					<p>Saturday June 16th 2018 at 2pm<br> 55 Hudson Road West, Irvginton NY, 10533</p>
					
				</div>
			</section>


		<!-- Two -->
			<section id="two" class="main style2 left dark fullscreen">
				<div class="content box style2">
					<header>
						<h2>Ceremony</h2>
					</header>
					<p>We'll be getting married in an informal, semi-secular, and probably not-entirely-traditional style. Afterward there will be house party revelry including drinks, buffet dinner, games, dancing, and so much merriment.</p>
				</div>
				<a href="#work" class="button style2 down anchored">Next</a>
			</section>

		<!-- Where -->
			<section id="where" class="main style3 primary">
				<div class="content">
					<header>
						<h2>Where</h2>
						<p><a href="https://www.google.com/maps/place/55+Hudson+Rd+W,+Irvington,+NY+10533/@41.0247179,-73.8763147,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2eb650aecc48d:0x2bf3c750f6815205!8m2!3d41.0247179!4d-73.874126?hl=en" target="_blank"><strong>55 Hudson Road West<br>
Irvington, NY, 10533</strong></a></p>

					</header>

					<!-- Gallery  -->
						<div class="gallery">
							<article class="from-left">
								<a href="/images/fulls/front.jpg" class="image fit"><img src="/images/thumbs/frontTH.jpg" title="A wraparound porch and conservatory fountain are the focal points of this redesigned entryway." alt="" /></a></article>
							<article class="from-right">
								<a href="/images/fulls/conserv.jpg" class="image fit"><img src="/images/thumbs/conservTH.jpg" title="The conservatory leads out to the side lawn." alt="" /></a></article>
</div>
<strong>Getting there</strong> <P>The house is a healthy walk from the Ardsley on Hudson Metro North station. Use directions to 2 Clifton Place, if you walk. Driving / Ubering: Take the driveway all the way around and make a left at the sign for 55.</p>  <img width=40% src="/images/fulls/VNmap.jpg"> 


				</div>
			</section>

<section id="details" class="main style2 right dark fullscreen">
				<div class="content box style2">
					<header>
						<h2>Further Information</h2>
						<p>(Or, "shoot, it's too late to text them and ask this..")</p>
					</header>
					<p><strong>Dress</strong>
						<br>
						"Semi-formal", if you want to put a point on it. But really, just feel pretty and be comfortable! We'll be inside and out (weather permitting) and it will likely be warm. Ps, feel welcome to bring a swimsuit. The bride may be jumping in.
					</p>
					<p><strong>Stay & go</strong>
						<br>
						Nearby hotels: <br>
<a href="http://www.ardsleymotel.com/" target=_blank>Ardsley Motel</a> (from $90)
<br><a href="http://www.tarrytownhouseestate.com/" target=_blank>Tarrytown Estates</a> (from $190)<br>
Travel: Uber and cabs go reliably to and from this location to both hotels
					</p>
					<p><strong>Children and Pets</strong>
						<br>
						Given the rental house's rules, this will be an adult-humans only event. If possible, please leave young children & pups with their excited-to-babysit in-laws. Peanut will be in attendance, if he can get his act together.
					</p>

				</div>
				<a href="#work" class="button style2 down anchored">Next</a>
			</section>


		<!-- Contact -->
			<section id="gifts" class="main style3 secondary">
				<div class="content">
					<header>
						<h2>Gifts</h2>
						<p>The main thing we'd like are honeymoon funds so we can take a trip! </p><p>Our mailing address is 408 S 19th st, Phila PA 19146. We also take payment in dog training because Peanut. (Sorry.) Alternatively, we're registered at <a href="https://www.amazon.com/wedding/share/hippzak" target="_blank">Amazon</a> for the usual lovely bric a brac.</p>
					</header>
					<!--<div class="box">
						<form method="post" action="mailto:martinwdolan@icloud.com">
							<div class="field half first"><input name="name" placeholder="Name" type="text" /></div>
							<div class="field half"><input type="email" name="email" placeholder="Email" /></div>
							<div class="field"><textarea name="message" placeholder="Message" rows="6"></textarea></div>
							<ul class="actions">
								<li><input type="submit" value="Send Message" /></li>
							</ul>
						</form>
						
					</div>-->

									
				</div>
			</section>




		<!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24080.340685216608!2d-73.88232416341707!3d41.02432424894796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2eb6579f4c955%3A0xdaa865850af0611a!2s2+Clifton+Pl%2C+Irvington%2C+NY+10533!5e0!3m2!1sen!2sus!4v1505324555399" width="100%" height="350" frameborder="0" style="border:0" allowfullscreen></iframe>-->

			<section id="book" class="main style2 right dark fullscreen">
				<div class="content box style2">
					<header>
						<a href="https://goo.gl/forms/VhGFkgeedX6JtxNQ2" target=_blank><h3 class="button" target="_blank">RSVP</h3></a>
					</header>
					<p><br>Let us know if you can make it!</p>
				</div>
			
			</section>
  </div> 

</template>

<script>

</script>

<style>
/* Intro */

	#intro {
		background: url('/static/images/heroimage.jpg');
		background-size: cover;
		background-attachment: fixed, fixed;
		background-position: top left, bottom center;
    background-repeat: repeat, no-repeat;
    height:90vh;
  }
  
  #intro:after{
    content:'';
    position: absolute;
    top: 0px; right:0px; bottom: 0px; left: 0px;
    width:100%;
    height: 100%;
    background-color:rgba(0,0,0,.3);
  }

/* Book */

	#book {
		background: url('/static/assets/css/images/overlay.png'), url('/static/images/detail.jpg');
		background-size: 256px 256px, cover;
		background-attachment: fixed, fixed;
		background-position: top left, center center;
	}

/* Two */

	#two {
		background: url('/static/assets/css/images/overlay.png'), url('/static/images/KAwed.jpg');
		background-size: 256px 256px, cover;
		background-attachment: fixed, fixed;
		background-position: top left, center center;
  }

  /* Three */

  	#details {
		background: url('/static/assets/css/images/overlay.png'), url('/static/images/Ritball.jpg');
		background-size: 256px 256px, cover;
		background-attachment: fixed, fixed;
		background-position: top left, center center;
	}

  
  .content{
    /*background: rgba(0,0,0,.4);*/
    z-index:2;
  }
</style>
