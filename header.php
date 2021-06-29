<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package thywill2w
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">


	<!-- google fonts -->
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,800%7CPoppins:300i,300,400,500,600,700,400i,500%7CDancing+Script:700%7CDancing+Script:700%7CGreat+Vibes:400%7CPoppins:400%7CDosis:800%7CRaleway:400,700,800&amp;subset=latin-ext"
      rel="stylesheet"
    />
    <!-- animate -->
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/assets/css/animate.css" />
    <!-- owl Carousel assets -->
    <link href="<?php bloginfo('stylesheet_directory'); ?>/assets/css/owl.carousel.css" rel="stylesheet" />
    <link href="<?php bloginfo('stylesheet_directory'); ?>/assets/css/owl.theme.css" rel="stylesheet" />
    <!-- bootstrap -->
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/assets/css/bootstrap.min.css" />
    <!-- hover anmation -->
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/assets/css/hover-min.css" />
    <!-- flag icon -->
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/assets/css/flag-icon.min.css" />
  
    <!-- elegant icon -->
    <link rel="stylesheet" href="<?php bloginfo('stylesheet_directory'); ?>/assets/css/elegant_icon.css" />
    <!-- fontawesome  -->
    <link
      rel="stylesheet"
      href="<?php bloginfo('stylesheet_directory'); ?>/assets/fonts/font-awesome/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="<?php bloginfo('stylesheet_directory'); ?>/assets/rslider/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css"
    />
    <link
      rel="stylesheet"
      type="text/css"
      href="<?php bloginfo('stylesheet_directory'); ?>/assets/rslider/fonts/font-awesome/css/font-awesome.css"
    />
    <!-- REVOLUTION STYLE SHEETS -->
    <link
      rel="stylesheet"
      type="text/css"
      href="<?php bloginfo('stylesheet_directory'); ?>/assets/rslider/css/settings.css"
    />


	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( '', 'thywill2w' ); ?></a>


<header>
	<div id="fixed-header-dark" class="header-output fixed-header">
	<div class="header-output">
		<div class="container header-in">
		<!-- Up Head -->
		<div class="up-head d-none d-lg-block">
			<div class="row">
			<div class="col-xl-8 col-lg-12">
				<div class="row">
				<div class="col-md-3">
					<i class="fa fa-phone margin-right-10px"></i> (+233) 303
					205 448
				</div>
				<div class="col-md-3">
					<i class="fa fa-envelope-o margin-right-10px"></i>
					shipitgh@gmail.com
				</div>
				<div class="col-md-6">
					<i class="fa fa-map-marker margin-right-10px"></i> Ropom
					322, Springfield Logistics Complex, Next to TFS building
					Tema Comm. one, Harbour Area
				</div>
				</div>
			</div>
			<div class="col-xl-4 d-none d-xl-block">
				<div class="row">
				<div class="col-lg-6">
					<!--  Social -->
					<ul
					class="social-media list-inline text-right margin-0px text-white"
					>
					<li class="list-inline-item">
						<a
						class="facebook"
						href="https://web.facebook.com/shipittradinglogigistics"
						><i class="fa fa-facebook" aria-hidden="true"></i
						></a>
					</li>
					<li class="list-inline-item">
						<a
						class="instagram"
						href="https://www.instagram.com/shipittrading_logistics/"
						><i class="fa fa-instagram" aria-hidden="true"></i
						></a>
					</li>
					</ul>
					<!-- // Social -->
				</div>
				</div>
			</div>
			</div>
		</div>
		<!-- // Up Head -->

		<div class="position-relative">
			<div class="row">
			<div class="col-lg-3 col-md-12">
				<a id="logo" href="#" class="d-inline-block margin-tb-15px"
				><img src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/logo-1.png" alt=""
				/></a>
				<a
				class="mobile-toggle padding-15px background-second-color border-radius-3"
				href="#"
				><i class="fa fa-bars"></i
				></a>
			</div>

			<?php
			 	wp_nav_menu( array(
					'theme_location' 		 => 'menu-1',
					'container'       		 => 'div',
					'container_class'		 => 'position-inherit',
					'menu_class'   			 => 'nav-menu',
					'menu_id'				 => 'menu-main',

				  ) );

			?>


			<!-- <div class="col-lg-7 col-md-12 position-inherit">
				<ul id="menu-main" class="nav-menu float-xl-left text-lg-center link-padding-tb-25px white-link dropdown-dark">

				<li><a href="/">Home</a></li>
				<li><a href="page-about-us.html">About Us</a></li>
				<li class="has-dropdown"><a href="#">Services</a>
					<ul class="sub-menu">
					<li>
						<a href="service-customs-clearing.html"
						>Customs Clearing</a
						>
					</li>
					<li>
						<a href="service-freight-forwarding.html"
						>Freight Forwarding</a
						>
					</li>
					<li>
						<a href="service-warehousing.html">Warehousing</a>
					</li>
					<li>
						<a href="service-shipment-advice.html"
						>Shipment Advice</a
						>
					</li>
					<li>
						<a href="service-cargo-handling.html"
						>Cargo Handling</a
						>
					</li>
					<li>
						<a href="service-consolidation-of-cargo.html"
						>Consolidation of Cargo</a
						>
					</li>
					</ul>
				</li>
				<li><a href="page-contact-us.html">Contact Us</a></li>
				</ul>
			</div> -->
			<div class="col-lg-2 col-md-12 d-none d-lg-block">
				<a
				data-toggle="modal"
				data-target=".bd-example-modal-lg"
				href="#"
				class="btn btn-sm border-radius-30 margin-tb-20px text-white background-main-color box-shadow float-right padding-lr-20px margin-left-30px d-block"
				>
				<i class="fa fa-envelope-o margin-right-10px"></i> Get A
				Quote
				</a>
			</div> 
			</div>
		</div>
		</div>
	</div>
	</div>
</header>
<!-- Header  -->

 <!-- Get A Quote  -->
 <div
      class="modal contact-modal fade bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content margin-top-150px background-main-color">
          <div class="row no-gutters">
            <div class="col-lg-5">
              <img
                style="height: 100%"
                src="<?php bloginfo('stylesheet_directory'); ?>/assets/img/customer-care.gif"
                alt=""
              />
            </div>
            <div class="col-lg-7">
              <div class="padding-30px">
                <h3 class="padding-bottom-15px">Get A Free Quote</h3>
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label>Full Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="fullname-field-one"
                        placeholder="Name"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label>Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="email-field-one"
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label>Description of Goods</label>
                      <input
                        type="text"
                        class="form-control"
                        id="goods-description-field-one"
                        placeholder="Describe Goods"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label>Quantity</label>
                      <input
                        type="text"
                        class="form-control"
                        id="quantity-field-one"
                        placeholder="Quantity"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label>Port</label>
                      <input
                        type="port"
                        class="form-control"
                        id="port-field-one"
                        placeholder="Port name"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label>Address</label>
                    <textarea
                      class="form-control"
                      id="address-field-one"
                      rows="3"
                    ></textarea>
                  </div>
                  <a
                    href="#"
                    id="form-submit-btn-one"
                    class="btn-sm btn-lg btn-block background-dark text-white text-center text-uppercase rounded-0 padding-15px"
                    >SEND MESSAGE</a
                  >
                  <div class="row"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- // Get A Quote  -->