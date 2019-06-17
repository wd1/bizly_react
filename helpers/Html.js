import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom/server';
import serialize from 'serialize-javascript';

const Html = (props) => {
	const {component, store, assets} = props;
	const content = component ? ReactDOM.renderToString(component) : '';
	let styles = '';
	console.log('qwerqwer');
	const styleAssets = assets.assets;
    for(const key in styleAssets) {
    	if (key.substr(-4, 4) == '.css') {
    		styles += styleAssets[key]._style;
    	}
    }
	return (
		<html lang="en">
		  <head>

		  	<meta charSet="utf-8" />
		    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
		    <meta name="viewport" content="width=device-width, initial-scale=1" />
		    <title>Bizly: Meetings On Demand</title>
		    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
		    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css" />
		    <style type="text/css" dangerouslySetInnerHTML={{__html: styles}} charSet="UTF-8" />
		    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		    <meta property="fb:app_id" content="384730458381822" />
		    <meta property="og:title" content="Bizly: Meetings On Demand" />
		    <meta property="og:site_name" content="Bizly.com" />
		    <meta property="og:image" content="https://res.cloudinary.com/hdd626jg7/image/upload/v1469718795/_F1A0804_putmxw.jpg" />
		    <meta property="og:description" content="Instantly book meetings with all the amenities at the best lifestyle hotels in New York, San Francisco and Chicago" />
		    <meta property="og:type" content="website" />
		    <meta property="og:url" content="http://bizly.com" />
			<script dangerouslySetInnerHTML={{__html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="3.1.0";
      			analytics.load('pMnKQcGAnJIunjpfw9DJ5q1j62BiAy1n');
      			}}();`}} charSet="UTF-8" />
      		<script type="text/javascript" src="//connect.facebook.net/en_US/sdk.js#version=v2.3"></script>
      		<script dangerouslySetInnerHTML={{__html: `window.fbAsyncInit = function() {
		        FB.init({
		          appId      : '384730458381822',
		          xfbml      : true,
		          version    : 'v2.3'
		        });
		      };`}} charSet="UTF-8" />
		  </head>
		  <body>
		    <div id="app" dangerouslySetInnerHTML={{__html: content}}></div>
		    <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} charSet="UTF-8"/>
		    <script src={assets.javascript.main} charSet="UTF-8"/>
		  </body>
		</html>

	);
};

Html.propTypes = {
	store: PropTypes.object,
	component: PropTypes.node
};

export default Html;
