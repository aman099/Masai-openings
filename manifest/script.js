import { TemplateEngine } from "./templateEngine.js";
import { JsonToHtml } from "./jsonToHtml.js";

let docpageData = {};

const docPageTemplate = {
	tag: "div",
	children: [
		{
			tag: "div",
			attributes: {
				class: "overlay",
			},
		},
		{
			tag: "div",
			attributes: {
				class: "overlay2",
			},
		},
		{
			tag: "div",
			attributes: {
				class: "navbar-container",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "navbar-cont-1",
					},
					children: [
						{
							tag: "nav",
							attributes: {
								id: "nav1",
								class: "container is-fullhd",
							},
							children: [
								{
									tag: "header",
									children: [
										{
											tag: "h2",
											content: "",
										},
									],
								},
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Resources",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Simplilearn for Business",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Become an Instructor",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Hire From Us",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Reviews",
												},
											],
										},
									],
								},
							],
						},
					],
				},
				{
					tag: "div",
					attributes: {
						class: "navbar-cont-2",
					},
					children: [
						{
							tag: "nav",
							attributes: {
								id: "nav2",
								class: "container is-fullhd",
							},
							children: [
								{
									tag: "header",
									children: [
										{
											tag: "div",
											attributes: {
												class: "hamburger-icon",
											},
											children: [
												{
													tag: "span",
													content: "",
												},
												{
													tag: "span",
													content: "",
												},
												{
													tag: "span",
													content: "",
												},
											],
										},
										{
											tag: "img",
											attributes: {
												src: "./assets/company_logo.png",
												alt: "Company logo",
											},
										},
										{
											tag: "div",
											attributes: {
												class: "all-courses-btn-container",
											},
											children: [
												{
													tag: "button",
													attributes: {
														class: "primary-btn",
													},
													children: [
														{
															tag: "div",
															attributes: {
																class: "grids-decoration",
															},
															children: [
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
																{
																	tag: "span",
																	content: "",
																},
															],
														},
													],
													content: "All Courses",
												},
											],
										},
										{
											tag: "div",
											attributes: {
												class: "input-container",
											},
											children: [
												{
													tag: "span",
													attributes: {
														class: "header-search",
													},
													children: [
														{
															tag: "i",
															attributes: {
																class: "fa-solid fa-magnifying-glass",
															},
														},
													],
												},
												{
													tag: "input",
													attributes: {
														type: "text",
														placeholder: "What do you want to learn?",
														class: "header-input",
													},
												},
											],
										},
									],
								},
								{
									tag: "input",
									attributes: {
										type: "checkbox",
										id: "nav-check",
									},
								},
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "button",
													attributes: {
														class: "outlined-btn",
													},
													content: "Sign up",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "sidebar-container",
			},
			children: [
				{
					tag: "aside",
					children: [
						{
							tag: "header",
							children: [
								{
									tag: "h5",
									content: "Menu",
								},
							],
						},
						{
							tag: "nav",
							children: [
								{
									tag: "ul",
									children: [
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "All Courses",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Resources",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Simplilearn for Business",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Become an Instructor",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Hire From Us",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Digital transformation",
												},
											],
										},
										{
											tag: "li",
											children: [
												{
													tag: "a",
													attributes: {
														href: "#",
													},
													content: "Reviews",
												},
											],
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "on-a-mission",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "on-a-mission-container container is-fullhd",
					},
					children: [
						{
							tag: "section",
							attributes: {
								id: "on-mission",
							},
							children: [
								{
									tag: "p",
									content:
										"On a mission to make tech careers accessible to everyone, no matter their financial or educational backgrounds.",
								},
								{
									tag: "h5",
									content: "Contact info:",
								},
								{
									tag: "span",
									children: [
										{
											tag: "i",
											attributes: {
												class: "fa-solid fa-link",
											},
										},
										{
											tag: "a",
											attributes: {
												href: "#",
											},
											content: "https://www.masaischool.com/",
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "main",
			attributes: {
				id: "main",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "main-container container is-fullhd",
					},
					children: [
						{
							tag: "div",
							attributes: {
								class: "main-title",
							},
							content:
								"<h4>Careers at Masai</h4> <div class='input-container'> <span><i class='fa-solid fa-magnifying-glass'></i></span> <input type='text' placeholder='Search'> </div>",
						},
						{
							tag: "div",
							attributes: {
								class: "main-content",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "main-selector",
									},
								},
								{
									tag: "div",
									attributes: {
										class: "main-cards",
									},
									children: [
										{
											tag: "div",
											attributes: {
												class: "card card-1",
											},
											content:
												"<div class='card-left'><div class='card-left-top'><h5>Data Science Instructor</h5><span class='card-label'>Job ID: 99119</span></div><div class='card-left-bottom'><p><span><i class='fa-solid fa-location-dot'></i></span> &nbsp;Bengaluru, India</p><p><span><i class='fa-solid fa-briefcase'></i></span> &nbsp;2 - 4 years</p></div></div><div class='card-right'><div class='btn-container'><button class='primary-btn'>View</button></div></div>",
										},
										{
											tag: "div",
											attributes: {
												class: "card card-2",
											},
											content:
												"<div class='card-left'><div class='card-left-top'><h5>Data Science Instructor</h5><span class='card-label'>Job ID: 99119</span></div><div class='card-left-bottom'><p><span><i class='fa-solid fa-location-dot'></i></span> &nbsp;Bengaluru, India</p><p><span><i class='fa-solid fa-briefcase'></i></span> &nbsp;2 - 4 years</p></div></div><div class='card-right'><div class='btn-container'><button class='primary-btn'>View</button></div></div>",
										},
										{
											tag: "div",
											attributes: {
												class: "card card-3",
											},
											content:
												"<div class='card-left'><div class='card-left-top'><h5>Data Science Instructor</h5><span class='card-label'>Job ID: 99119</span></div><div class='card-left-bottom'><p><span><i class='fa-solid fa-location-dot'></i></span> &nbsp;Bengaluru, India</p><p><span><i class='fa-solid fa-briefcase'></i></span> &nbsp;2 - 4 years</p></div></div><div class='card-right'><div class='btn-container'><button class='primary-btn'>View</button></div></div>",
										},
										{
											tag: "div",
											attributes: {
												class: "card card-4",
											},
											content:
												"<div class='card-left'><div class='card-left-top'><h5>Data Science Instructor</h5><span class='card-label'>Job ID: 99119</span></div><div class='card-left-bottom'><p><span><i class='fa-solid fa-location-dot'></i></span> &nbsp;Bengaluru, India</p><p><span><i class='fa-solid fa-briefcase'></i></span> &nbsp;2 - 4 years</p></div></div><div class='card-right'><div class='btn-container'><button class='primary-btn'>View</button></div></div>",
										},
										{
											tag: "div",
											attributes: {
												class: "card card-5",
											},
											content:
												"<div class='card-left'><div class='card-left-top'><h5>Data Science Instructor</h5><span class='card-label'>Job ID: 99119</span></div><div class='card-left-bottom'><p><span><i class='fa-solid fa-location-dot'></i></span> &nbsp;Bengaluru, India</p><p><span><i class='fa-solid fa-briefcase'></i></span> &nbsp;2 - 4 years</p></div></div><div class='card-right'><div class='btn-container'><button class='primary-btn'>View</button></div></div>",
										},
										{
											tag: "div",
											attributes: {
												class: "card card-6",
											},
											content:
												"<div class='card-left'><div class='card-left-top'><h5>Data Science Instructor</h5><span class='card-label'>Job ID: 99119</span></div><div class='card-left-bottom'><p><span><i class='fa-solid fa-location-dot'></i></span> &nbsp;Bengaluru, India</p><p><span><i class='fa-solid fa-briefcase'></i></span> &nbsp;2 - 4 years</p></div></div><div class='card-right'><div class='btn-container'><button class='primary-btn'>View</button></div></div>",
										},
										{
											tag: "div",
											attributes: {
												class: "card card-7",
											},
											content:
												"<div class='card-left'><div class='card-left-top'><h5>Data Science Instructor</h5><span class='card-label'>Job ID: 99119</span></div><div class='card-left-bottom'><p><span><i class='fa-solid fa-location-dot'></i></span> &nbsp;Bengaluru, India</p><p><span><i class='fa-solid fa-briefcase'></i></span> &nbsp;2 - 4 years</p></div></div><div class='card-right'><div class='btn-container'><button class='primary-btn'>View</button></div></div>",
										},
										{
											tag: "div",
											attributes: {
												class: "card card-8",
											},
											content:
												"<div class='card-left'><div class='card-left-top'><h5>Data Science Instructor</h5><span class='card-label'>Job ID: 99119</span></div><div class='card-left-bottom'><p><span><i class='fa-solid fa-location-dot'></i></span> &nbsp;Bengaluru, India</p><p><span><i class='fa-solid fa-briefcase'></i></span> &nbsp;2 - 4 years</p></div></div><div class='card-right'><div class='btn-container'><button class='primary-btn'>View</button></div></div>",
										},
										{
											tag: "div",
											attributes: {
												class: "card card-9",
											},
											content:
												"<div class='card-left'><div class='card-left-top'><h5>Data Science Instructor</h5><span class='card-label'>Job ID: 99119</span></div><div class='card-left-bottom'><p><span><i class='fa-solid fa-location-dot'></i></span> &nbsp;Bengaluru, India</p><p><span><i class='fa-solid fa-briefcase'></i></span> &nbsp;2 - 4 years</p></div></div><div class='card-right'><div class='btn-container'><button class='primary-btn'>View</button></div></div>",
										},
										{
											tag: "div",
											attributes: {
												class: "card card-10",
											},
											content:
												"<div class='card-left'><div class='card-left-top'><h5>Data Science Instructor</h5><span class='card-label'>Job ID: 99119</span></div><div class='card-left-bottom'><p><span><i class='fa-solid fa-location-dot'></i></span> &nbsp;Bengaluru, India</p><p><span><i class='fa-solid fa-briefcase'></i></span> &nbsp;2 - 4 years</p></div></div><div class='card-right'><div class='btn-container'><button class='primary-btn'>View</button></div></div>",
										},
										{
											tag: "div",
											attributes: {
												class: "card card-11",
											},
											content:
												"<div class='card-left'><div class='card-left-top'><h5>Data Science Instructor</h5><span class='card-label'>Job ID: 99119</span></div><div class='card-left-bottom'><p><span><i class='fa-solid fa-location-dot'></i></span> &nbsp;Bengaluru, India</p><p><span><i class='fa-solid fa-briefcase'></i></span> &nbsp;2 - 4 years</p></div></div><div class='card-right'><div class='btn-container'><button class='primary-btn'>View</button></div></div>",
										},
										{
											tag: "div",
											attributes: {
												class: "card card-12",
											},
											content:
												"<div class='card-left'><div class='card-left-top'><h5>Data Science Instructor</h5><span class='card-label'>Job ID: 99119</span></div><div class='card-left-bottom'><p><span><i class='fa-solid fa-location-dot'></i></span> &nbsp;Bengaluru, India</p><p><span><i class='fa-solid fa-briefcase'></i></span> &nbsp;2 - 4 years</p></div></div><div class='card-right'><div class='btn-container'><button class='primary-btn'>View</button></div></div>",
										},
										{
											tag: "div",
											attributes: {
												class: "card card-13",
											},
											content:
												"<div class='card-left'><div class='card-left-top'><h5>Data Science Instructor</h5><span class='card-label'>Job ID: 99119</span></div><div class='card-left-bottom'><p><span><i class='fa-solid fa-location-dot'></i></span> &nbsp;Bengaluru, India</p><p><span><i class='fa-solid fa-briefcase'></i></span> &nbsp;2 - 4 years</p></div></div><div class='card-right'><div class='btn-container'><button class='primary-btn'>View</button></div></div>",
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			tag: "div",
			attributes: {
				class: "footer",
			},
			children: [
				{
					tag: "div",
					attributes: {
						class: "footer-cotnainer container is-fullhd",
					},
					children: [
						{
							tag: "footer",
							attributes: {
								id: "footer",
							},
							children: [
								{
									tag: "div",
									attributes: {
										class: "footer-title",
									},
									content:
										"<div class='img-container'><img src='./assets/company_logo.svg' alt='Company logo'></div><div class='sm-logos-cont'><p>Follow Us:<span><i class='fa-brands fa-x-twitter'></i></span><span><i class='fa-brands fa-facebook'></i></span><span><i class='fa-brands fa-linkedin'></i></span><span><i class='fa-brands fa-instagram'></i></span><span><i class='fa-brands fa-github'></i></span><span><i class='fa-brands fa-youtube'></i></span></p></div>",
								},
								{
									tag: "div",
									attributes: {
										class: "footer-labels",
									},
									content:
										"<div class='footer-labels-left'><span>Full Stack Web Development - Full Time</span><span>Data Analytics - Full Time</span><span>Software Testing & Automation - Full Time</span><span>Micro Credit Program in Computer Science from IIT Guwahati</span></div><div class='footer-labels-right'></div>",
								},
								{
									tag: "div",
									attributes: {
										class: "footer-menus",
									},
									content:
										"<ul class='menus'><li>Success Stories</li><li>Out Team</li><li>Careers</li><li>Masai Blog</li><li>Talent Circle</li><li>Masai School Admissions Test (MSAT)</li></ul><ul class='menus'><li>Hire From Us</li><li>Our Investors</li><li>Newsroom</li><li>Contact Us</li><li>Become Coach</li><li>Micro-Credit Program in Computer Science from IIT Guwahati (Benchmarking Test)</li></ul><ul class='menus'><li>About Us</li><li>FAQ</li><li>Referral Program</li><li>Masai Learn</li><li>Industry Mentors</li></ul><ul class='connect-menus'><li>Connect with a growing community of learners</li><li><span><i class='fa-brands fa-telegram'></i></span> join our telegram</li></ul>",
								},
								{
									tag: "div",
									attributes: {
										class: "footer-foot",
									},
									content:
										"<p>Copyright &copy; nolan edutech private limited, All rights reserved</p><p><a href='#'>Privacy Policy</a> <a href='#'>Terms & Conditions</a></p>",
								},
							],
						},
					],
				},
			],
		},
	],
};

let temp = TemplateEngine.populate(docPageTemplate, docpageData);
console.log(temp);

let html = JsonToHtml.convert(temp);
console.log(html);
document.getElementById("app").innerHTML = html;

////////////////////////////////////////////////////////////////////////

// const inputContainer = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container"
// );
// const inputEl = document.querySelector(
//   "#nav .nav-container .middle-nav .input-container input"
// );
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");

// inputContainer.addEventListener("click", () => {
//   modal.classList.add("active");
//   overlay.classList.add("active");
//   inputEl.blur();
// });

// document.addEventListener(
//   "click",
//   (e) => {
//     if (e.target.matches(".modal")) return;
//   },
//   { once: true }
// );

// overlay.addEventListener("click", (e) => {
//   modal.classList.remove("active");
//   overlay.classList.remove("active");
// });

// // Active toggle
// const firstToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .first-toggle .toggle-first"
// );
// const firstToggleContasiner = document.querySelector(
//   ".toggle-btn-container .first-toggle"
// );

// const secondToggleBtnEls = document.querySelectorAll(
//   ".toggle-btn-container .second-toggle .toggle-first"
// );
// const secondToggleContasiner = document.querySelector(
//   ".toggle-btn-container .second-toggle"
// );

// firstToggleBtnEls.forEach((firstToggleBtnEl) => {
//   firstToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(".toggle-btn-container .first-toggle .toggle-first.active")
//       ?.classList.remove("active");
//     firstToggleBtnEl.classList.add("active");
//   });
// });

// secondToggleBtnEls.forEach((secondToggleBtnEl) => {
//   secondToggleBtnEl.addEventListener("click", () => {
//     document
//       .querySelector(
//         ".toggle-btn-container .second-toggle .toggle-first.active"
//       )
//       ?.classList.remove("active");
//     secondToggleBtnEl.classList.add("active");
//   });
// });

// // Dropdown popup
// const dropdownBtn = document.querySelector(".dropdown-attribute");
// const dropdownContainer = document.querySelector(".toggle-dropdown-container");

// dropdownBtn.addEventListener("click", (e) => {
//   dropdownContainer.classList.toggle("active");
// });

// const dropDown1 = document.querySelector(".dropd-1");
// const dropDown2 = document.querySelector(".dropd-2");
// const darkModeDropDown = document.querySelector(".darkmode-droppdown-popup");
// const versionModeDropDown = document.querySelector(".version-droppdown-popup");

// dropDown1.addEventListener("click", () => {
//   versionModeDropDown.classList.toggle("active");
// });

// dropDown2.addEventListener("click", () => {
//   darkModeDropDown.classList.toggle("active");
// });
