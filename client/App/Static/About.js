import React from 'react';
import StaticPagesHeader from './StaticPagesHeader';
import styles from './About.css';

import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

var headshot = {
  backgroundImage: 'url(http://bizly.com/wp-content/themes/bizly/assets/img/photo-ron.jpg)'
};


const About = () => {
  return (
    <div className={styles.staticwrap}>
	      <StaticPagesHeader active="about" />
	    <div className={styles.staticinner}>
	    	<Row>
	    		<Col xs={12} className={styles.abouthead}>
	      			<h1>About</h1>
	     			 	<p>Founded in late 2015 and based in New York City, Bizly is a marketplace for professionals to instantly discover, find and book luxury meeting and workspaces at the world’s leading hotels.</p>
						<p>Whether you have all the office space in the world or operate an entirely remote team, Bizly allows you to instantly secure inspirational spaces to get together with your team, partners, customers or anyone that you need to build with.  Bizly was built with love in New York City and quickly spreading to major cities around the country.</p>
						<p>Our mission is to create a world where an inspiring setting to meet and work always awaits you.</p>
	      	</Col>
	      </Row>

	      <div className={styles.team}>
		      			<h1>Our Team</h1>
		    	<Row>
		    		<Col xs={12} sm={4} className={styles.aboutboxes}>
		    			<div className={styles.boxouter + ' ' + styles.headshotRon}>
			    			<div className={styles.boxinner}>
				    			<div className={styles.headshot}>
					    			<div className={styles.biobox}>
						    			<div className={styles.biohead}>
						    				<strong>Ron Shah</strong>
						    				<span>CEO</span>
						    			</div>
						    			<div className={styles.biotext}>
						    				<p>Prior to founding Bizly, Ron was the founder and managing partner of Jina Ventures, a notable venture capital firm rooted in technology and travel with notable successes including 4 IPOs and 8 strategic sales over a decade. To make ends meet during business school at NYU, Ron sold conference space at New York Seminar Center. This unique combination of experiences set the stage for his innovation with Bizly. He is a proud father and is known to hit a spoken word mic every once in a while.</p>
						    			</div>
					    			</div>
				    			</div>
			    			</div>
		    			</div>
		      		</Col>
		    		<Col xs={12} sm={4} className={styles.aboutboxes}>
		    			<div className={styles.boxouter + ' ' + styles.headshotTor}>
			    			<div className={styles.boxinner}>
				    			<div className={styles.headshot}>
					    			<div className={styles.biobox} >
						    			<div className={styles.biohead}>
						    				<strong>Tor Miller</strong>
						    				<span>VP of Product Development</span>
						    			</div>
						    			<div className={styles.biotext}>
						    				<p>Prior to joining the founding team at Bizly, Tor spent nearly a decade in web-based product development and software architecture.  During his last role at Campus Management, he worked on complex extranet solutions and customer-facing microsites across a variety of applications.  He has a degree in economics and finance with a variety of interests in energy.</p>
						    			</div>
					    			</div>
				    			</div>
			    			</div>
		    			</div>
		      		</Col>
		    		<Col xs={12} sm={4} className={styles.aboutboxes}>
		    			<div className={styles.boxouter + ' ' + styles.headshotSai}>
			    			<div className={styles.boxinner}>
				    			<div className={styles.headshot}>
					    			<div className={styles.biobox}>
						    			<div className={styles.biohead}>
						    				<strong>Sairam Chilappagari</strong>
						    				<span>Head of Product &amp; Technology</span>
						    			</div>
						    			<div className={styles.biotext}>
						    				<p>Prior to joining the founding team at Bizly, Sairam founded a music startup Jukebox.io, and runs day to day operations. He loves to create and evolve services from ideas into something truly valuable to the end user. Before Jukebox.io, he built/lead teams at Jetsetter and Disney Interactive Media Group and played a role in the acquisition process of Jetsetter. Having experience working at companies at different stages combined with education in computer science sets the tone for quality of technology platforms & products Bizly develops.</p>
						    			</div>
					    			</div>
				    			</div>
			    			</div>
		    			</div>
		      		</Col>
		    		<Col xs={12} sm={4} className={styles.aboutboxes}>
		    			<div className={styles.boxouter + ' ' + styles.headshotNancy}>
			    			<div className={styles.boxinner}>
				    			<div className={styles.headshot}>
					    			<div className={styles.biobox}>
						    			<div className={styles.biohead}>
						    				<strong>Nancy Branka</strong>
						    				<span>Chief Content Officer </span>
						    			</div>
						    			<div className={styles.biotext}>
						    				<p>Prior to joining the founding team at Bizly, Nancy co-founded <em>Executive Travel</em> magazine (an imprint of American Express Publishing/Time Inc.) and served as its managing editor for 12 years. In that position Nancy spearheaded unparalleled thought leadership around business travel topics. She managed a stable of freelance writers around theworld and steered the magazine's award-winning print and online content in print. Two teenage sons keep her on her toes, and she also enjoys writing fiction, recently completing a novel about airport politics.</p>
						    			</div>
					    			</div>
				    			</div>
			    			</div>
		    			</div>
		      		</Col>
		    		<Col xs={12} sm={4} className={styles.aboutboxes}>
		    			<div className={styles.boxouter + ' ' + styles.headshotBryan}>
			    			<div className={styles.boxinner}>
				    			<div className={styles.headshot}>
					    			<div className={styles.biobox}>
						    			<div className={styles.biohead}>
						    				<strong>Bryan Plofsky</strong>
						    				<span>Director of Partnerships</span>
						    			</div>
						    			<div className={styles.biotext}>
						    				<p>Prior to joining the founding team at Bizly, Bryan spent most of his life in hospitality. His passion for the service industry, coupled with his diverse experience in technology sales, helps him to curate each new Bizly city with a specific standard of excellence. More importantly, you may remember him from such things as eating lobster in Maine, his theater podcast, and collecting tears as a Mets and Jets fan.</p>
						    			</div>
					    			</div>
				    			</div>
			    			</div>
		    			</div>
		      		</Col>
		    		<Col xs={12} sm={4} className={styles.aboutboxes}>
		    			<div className={styles.boxouter + ' ' + styles.headshotMigi}>
			    			<div className={styles.boxinner}>
				    			<div className={styles.headshot}>
					    			<div className={styles.biobox}>
						    			<div className={styles.biohead}>
						    				<strong>Migi Domingo</strong>
						    				<span>Front-End Developer</span>
						    			</div>
						    			<div className={styles.biotext}>
						    				<p>Born in NYC but raised in Metro Manila in the Philippines, Migi never thought his path would lead to building robust web applications. Before he started making things for the web, Migi was a radio DJ in the Philippines. When he's not in front of a computer, Migi is usually with his guitar either writing music or performing at an open mic in the city.</p>
						    			</div>
					    			</div>
				    			</div>
			    			</div>
		    			</div>
		      		</Col>
		    		<Col xs={12} sm={4} className={styles.aboutboxes}>
		    			<div className={styles.boxouter + ' ' + styles.headshotGreg}>
			    			<div className={styles.boxinner}>
				    			<div className={styles.headshot}>
					    			<div className={styles.biobox}>
						    			<div className={styles.biohead}>
						    				<strong>Greg Materdomini</strong>
						    				<span>VP of Sales</span>
						    			</div>
						    			<div className={styles.biotext}>
						    				<p>Greg's career has centered on sales and business development leadership in the hospitality and technology verticals for many years.  Prior to joining Bizly, he scaled and structured 3 early stage start-ups, including Convene, which was awarded the #1 fastest growing company by Crain's NY.  A dad of two and hilarious husband of one, he spends his imaginary spare time golfing, seeing live music, cooking and abusing painful pun humor.</p>
						    			</div>
					    			</div>
				    			</div>
			    			</div>
		    			</div>
		      		</Col>
		    		<Col xs={12} sm={4} className={styles.aboutboxes}>
		    			<div className={styles.boxouter + ' ' + styles.headshotHolly}>
			    			<div className={styles.boxinner}>
				    			<div className={styles.headshot}>
					    			<div className={styles.biobox}>
						    			<div className={styles.biohead}>
						    				<strong>Holly Dowell</strong>
						    				<span>Director of Product Design</span>
						    			</div>
						    			<div className={styles.biotext}>
						    				<p>Holly brings an interdisciplinary background to Bizly after studying Information Science at Cornell University and working as a user experience designer for an e-commerce platform and university library, among others. She is excited to be crafting engaging experiences for hotels and businesspeople worldwide. When not designing, Holly enjoys volunteering with City Harvest and ravenously listening to podcasts.</p>
						    			</div>
					    			</div>
				    			</div>
			    			</div>
		    			</div>
		      		</Col>
		    		<Col xs={12} sm={4} className={styles.aboutboxes}>
		    			<div className={styles.boxouter + ' ' + styles.headshotShawn}>
			    			<div className={styles.boxinner}>
				    			<div className={styles.headshot}>
					    			<div className={styles.biobox}>
						    			<div className={styles.biohead}>
						    				<strong>Shawn Carter</strong>
						    				<span>Director of operations</span>
						    			</div>
						    			<div className={styles.biotext}>
						    				<p>Shawn worked in a variety of industries before joining Bizly, from digital publishing and restaurants to information technology and aviation maintenance, much of it focused on software development and empowering users to do what they do, but better. His unique skillset gives Bizly an edge, ensuring every side of the business operates like a well-oiled Apple Watch. He’s usually found inside a coffee shop somewhere in NYC, reading a comic book or tech blog.</p>
						    			</div>
					    			</div>
				    			</div>
			    			</div>
		    			</div>
		      		</Col>
		    		<Col xs={12} sm={4} className={styles.aboutboxes}>
		    			<div className={styles.boxouter + ' ' + styles.headshotMatt}>
			    			<div className={styles.boxinner}>
				    			<div className={styles.headshot}>
					    			<div className={styles.biobox}>
						    			<div className={styles.biohead}>
						    				<strong>Matt Sabath</strong>
						    				<span>Mobile Developer</span>
						    			</div>
						    			<div className={styles.biotext}>
						    				<p>Matt is an iOS developer with a strong passion for building apps. He has had the opportunity to work on dozens of iOS applications as both a mobile development agency employee as well as freelancer. Matt is constantly eager to work on the cutting edge of platforms, technologies, and languages - as well as staying on top of all the new APIs that Apple releases every OS cycle. He regularly attends iOS developer meetups in NYC, and enjoys talking with other developers on how they engineer their applications.</p>
						    			</div>
					    			</div>
				    			</div>
			    			</div>
		    			</div>
		      		</Col>
		    		<Col xs={12} sm={4} className={styles.aboutboxes}>
		    			<div className={styles.boxouter + ' ' + styles.headshotChris}>
			    			<div className={styles.boxinner}>
				    			<div className={styles.headshot}>
					    			<div className={styles.biobox}>
						    			<div className={styles.biohead}>
						    				<strong>Chris White</strong>
						    				<span>Mobile Advisor</span>
						    			</div>
						    			<div className={styles.biotext}>
						    				<p>Founder of The Sneakers Agency in 2012, or "sneakers." for short, Christopher White has spent the greater part of the last couple of decades working on mobile platforms going as far back as early Windows Pocket PC's. With an incredibly deep amount of respect for what goes into making great platforms and mobile products, Chris and his team work closely with various start-ups and enterprises to help them achieve their business goals via award winning iOS and Android apps. </p>
						    			</div>
					    			</div>
				    			</div>
			    			</div>
		    			</div>
		      		</Col>
		    		<Col xs={12} sm={4} className={styles.aboutboxes}>
		    			<div className={styles.boxouter + ' ' + styles.headshotNelson}>
			    			<div className={styles.boxinner}>
				    			<div className={styles.headshot}>
					    			<div className={styles.biobox}>
						    			<div className={styles.biohead}>
						    				<strong>Nelson Chu</strong>
						    				<span>Design Advisor</span>
						    			</div>
						    			<div className={styles.biotext}>
						    				<p>Nelson is the CEO of Tritan Collective, a preeminent product thinktank in New York, and a partner at Parametric, a China-based family office. He serves as the advisor to several startups, helping them hone their product in preparation for launch and developing strategies that will help scale the company to reach their performance objectives. He’s been the founder and co-founder of 3 venture backed startups, most notably one backed by Morgan Stanley, Bank of America, Citibank and UBS. Prior to founding his companies, he worked at Bank of America and BlackRock as an investment analyst. In his spare time, he tends to his French Bulldog Rocco and his 25 year old turtle Lassie.</p>
						    			</div>
					    			</div>
				    			</div>
			    			</div>
		    			</div>
		      		</Col>
		      	</Row>
	      </div>
      </div>
    </div>
  );
};

export default About;
