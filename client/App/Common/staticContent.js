// all static links, copy, and content
// easy to pass down through props and even easier to change on the fly

const staticContent = {
	app: {
		footer: {
			social: [
				{
					label: 'Facebook',
					url: 'https://www.facebook.com/GetBizly',
					icon: 'fa fa-facebook',
				},
				{
					label: 'Instagram',
					url: 'https://www.instagram.com/getbizly',
					icon: 'fa fa-instagram',
				},
				{
					label: 'Twitter',
					url: 'https://twitter.com/GetBizly',
					icon: 'fa fa-twitter',
				},
				{
					label: 'LinkedIn',
					url: 'https://www.linkedin.com/company/6383637',
					icon: 'fa fa-linkedin'
				}
			],
			company: [
				{
					label: 'About',
					link: '/about'
				},
				{
					label: 'Careers',
					link: 'https://angel.co/bizly/jobs'
				},
				{
					label: 'Press',
					link: '/press'
				},
				{
					label: 'Privacy',
					link: '/privacy-policy'
				},
				{
					label: 'Terms',
					link: '/terms-and-conditions'
				},
				{
					label: 'Contact',
					link: '/contact'
				},
				{
					label: 'Blog',
					link: 'https://blog.bizly.com'
				}
			],
			mobile: [
				{
					label: 'About',
					link: '/about'
				},
				{
					label: 'Blog',
					link: 'https://blog.bizly.com'
				},
				{
					label: 'Support',
					link: 'https://support.bizly.com'
				}
			],
			partners: [
				{
					label: 'Hotels',
					link: '/partnerships'
				},
				{
					label: 'Affiliate Program',
					link: '/affiliates'
				},
				{
					label: 'Partner Login',
					link: 'http://rms.bizly.co/'
				}
			],
			discover: [
				{
					label: 'Blog',
					link: 'https://blog.bizly.com'
				},
				{
					label: 'Hotel Partners',
					link: '/partnerships'
				},
				{
					label: 'Affiliates',
					link: '/affiliates'
				},
				{
					label: 'Partner Login',
					link: '/partnerships'
				},
				{
					label: 'Support',
					link: 'https://support.bizly.com'
				}
			],
			cities: [
				{
					label: 'New York',
					link: '/properties/search?location=NY'
				},
				{
					label: 'San Francisco',
					link: '/properties/search?location=SF'
				},{
					label: 'Chicago',
					link: '/properties/search?location=CHI'
				}
			]
		}
	},
	pages: {
		home: {
			search: {
				boldHeadline: 'INSTANT.',
				italHeadline: 'Board Meeting.',
				subtitle: 'Book small group meetings on demand at the world\'s leading hotels',
				cta: 'FIND ROOM'
			},
			properties: {
				title: 'PERFECT MEETINGS EVERY TIME',
				subtitle: 'Flawless experiences in a heartbeat',
				cta: 'SEE ALL'
			},
			blog: {
				title: 'BIZLYBEAT. OUR BLOG',
				subtitle: 'Stay updated on all the Bizly goodness',
				cta: 'VISIT BLOG'
			},
			email: {
				boldHeadline: 'BIZLYBEAT.',
				italHeadline: 'Blog.',
				subtitle: 'Sign up to our newsletter and stay in the loop',
				cta: 'SUBSCRIBE'
			}
		}
	}
};

export default staticContent;