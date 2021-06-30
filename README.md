# The Snake & the Wizard

## Overview

This is a web based game inspired by the Nokia 3310 version of Snake. The aim of the game is to grow the snake by eating the fruit that randomly spawn onto the board without hitting the boarder or without hitting your own tail. The website uses basic **HTML** and **CCS** to create the static components of the game. All the interactive features, including movement are made using **JavaScript**. The game will be responsive for all devices.

[Live Website](https://datonex.github.io/snake-and-the-wizard/)

[GitHub Repository](https://github.com/datonex/snake-and-the-wizard)

## Table of Contents (generate here)

## UX

Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

### User Stories

- #### As a user who wants to play a quick game on my commute

1. I want to hav access to the game on the go

2. I want to easily start the game

3. I want to be able to see a balance of images and text

4. I want to be able to easily see my score

5. I want responsive touch interaction on mobile device

- #### As an adolescent

1. I want to have access to the website on any device and on the go

2. I want the buttons to be easy to see and be responsive

3. I want responsive touch interaction on mobile device or tablet

4. I want to be able to use the arrow buttons, or the WASD buttons to control the snake's direction on desktop

### Design

#### Game Story

Story for the game came from my love of Scooby Doo as a child. They always encountered scary looking houses and all kinds of "monsters" (I intentionally put that in quotes because the monster's were really people in costumes... duh). In this game however the monster is real! You were turned into a snake by a wizard and he locked you up in a very large empty room in his large house. The room as no windows and the door can only be opened by the wizard's magic. However the wizard is unaware of a very important fact that could give you a chance to escape, whenever he is asleep, he spontaneously spawns all kinds of fruit in that empty room that you are trapped in. He also doesn't know that the fruit's have powers that make you grow very quickly. While stuck in there you got hungry and ate the fruit without thinking. When you realised that you grew longer, you had an idea to eat the fruit and grow large enough to make the room collapse on itself and escape.

#### Colour Scheme

The colour theme of the game is based on one of my favourite colour's, purple. I found a background with the colours I want and based the colour scheme from there. I used [**Adobe Color - Image**](https://color.adobe.com/create/image) to pick colours from the images and automatically generate colours for me.

<img src="./assets/img/readme/colour-scheme-org.png"/>

The darkest colour in the grid was too dark, so I used [**Adobe Color - Wheel**](https://color.adobe.com/create/color-wheel) to determine a slightly lighter color that will best suit the scheme.

<img src="./assets/img/readme/colour-scheme-mod.png" />

#### Typography

Font used for the heading was Mystery Quest with a back-up font of sans-serif. The font is eye catching and the swirls in the writing match the title of the game in terms of theme.

<img src="./assets/img/readme/font-mystery-quest.png" />

Font used for main text was Quicksand with a back-up font of sans-serif. The font is easy to read, well spaced out and goes well together with Mystery Quest.

<img src="./assets/img/readme/font-quicksand.png" height = "100px"/>

#### Imagery

The background of the page is a haunted house type of building to decorate the page and fit in with context to the story.

#### Wireframes

Wireframes were created using Adobe Xd.

- Mobile Wireframe

<img src="./assets/img/readme/wireframes/wireframes-second/large-mobile.png" height="300px" />

- Tablet Wireframe

<img src="./assets/img/readme/wireframes/wireframes-second/tablet.png" height="300px"/>

- Desktop Wireframe

<img src="./assets/img/readme/wireframes/wireframes-second/webpage.png" height="300px" />

### Existing Features

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

#### Common Features Across All Pages

- [x] **Header** - allows user to easily navigate across all pages

- Header is fixed to top of page for easy access (desktop and large tablets)
- Zimbabwe logo and text are positioned on the left and are links that take you to the homepage
- Navigation is place on the right on the logo for easy access (under logo for mobile)
- Navigation links change colour when hovered over. This lets the visitor know that it is clickable.
- Navigation link is underlined to let user know what page they are on
- Entire header disappears for mobile devices
- Colors have been chosen with optimum contrast in mind to be pleasant to the eye.
- [x] **Links** that are hovered over
- All links that are surrounding text have been underlined and change color when hovered over. This helps the user to identify external links. (except logo)
- [x] **Navigation banner**
- Navigation banner is the same across all pages to give uniformity and familiarity
- background image on home is scrollable to give a more fun user experience
- [x] **Accessibility**
- All images have aria labels in case they don't load and for the visually impaired
- [x] **Buttons**
- All buttons have the same styling and they invert colours when hovered (except for scroll to top button)
- [x] **Responsiveness**
- All pages work well with many screen sizes
- [x] **Footer**
- Footer sticks to the bottom of the page, regardless of the amount of content. This aids the overall user experience.
- All content have near uniform layout to give a nice and engaging flow of text and images
- Social links have been grouped together
- 'Contact us' is form for feedback and any question the user might have

### Specific to Pages

- [x] **Home Page**

- Image grid to easily see a handful of places the user can visit. When the mouse hovers you get addition information about the location

### Features Left to Implement

- Add a page where you can make a booking for a particular destinations. this includes adding a virtual online basket so that users can see what they have already selected (requires **Javascript** knowledge) For this reason I decided to remove the booking page from the website because it would be too incomplete and not provide a positive user experience.

- hide the scroll to top button at the beginning of page

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

### Languages used

- [**HTML**](https://en.wikipedia.org/wiki/HTML5) for static text and containers for the game, and buttons.
- [**CSS**](https://en.wikipedia.org/wiki/CSS) for styling of the game.

- [**JavaScript**](https://www.javascript.com/) for the interactive features of the game.

### Frameworks, Libraries and Programs Used

- [**Fontawesome _v.5.15.3_**](https://fontawesome.com/) was used to insert icons arrows for the on-screen buttons in the game

- [**Favicon**](https://favicon.io/) was used to generate favicon and copied the syntax copied from website.

- [**Google Fonts**](https://fonts.google.com/) was used to import **Mystery Quest** and **Open Sans** fonts in the style.css stylesheet.

- [**Visual Studio Code**](https://code.visualstudio.com/) is a source-code editor optimised for debugging, syntax highlighting and extension support.

- [**Git**](https://git-scm.com/) was used to allow for tracking of any changes in the code and for the version control.

- [**Github**](https://github.com/) is used to host the project files and publish the live website by using GitPages.

- [**TinyPNG**](https://tinypng.com/) used to reduce resolution of images

- [**Adobe Illustrator**](https://www.adobe.com/uk/creativecloud/illustration.html) was used to draw the snake head and body vectors.

- [**Adobe Xd**](https://www.adobe.com/ie/products/xd.html) was used to create wireframes for mobile, tablet and desktop.

- [**Lunapic**](https://www5.lunapic.com/editor/) was used to remove background from images to create `.png` files

## Testing

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:

- Go to the "Contact Us" page
- Try to submit the empty form and verify that an error message about the required fields appears
- Try to submit the form with an invalid email address and verify that a relevant error message appears
- Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

- ### Navigation bar

- When the logo or 'Zimbabwe' text is clicked, the user is redirected to the home page
- All links are working and have been tested.
- navigation bar is aligned vertically and under the logo for screens smaller than 660px
- The navigation bar stays at the top of the page for screens larger than 660px only

- ### Footer

- Footer always sticks to the bottom of the page and was tested by removing all content from the page.
- social media link open in a new tab when clicked
- When user accesses the 'Contact us' page

  - Name is required to continue submission
  - Email field is required and has to be in the correct format.
  - Text field has to contain at least two characters.
  - terms and conditions have to be ticked
  - When 'Submit' is clicked (given all fields have been filled out) the form will be sent

- ### The Image grid

- Any image that is hovered on (desktop only) the text is uniformly aligned and shows correct information for another device the grid is hidden and a continuous prose is displayed instead.

- ### External links

- All social links in the footer bring the user to the relevant social pages
- Links to external websites, the booking and visa button bring the user to the right website in a new tab.

- ### Internal Links

- Logo and text all lead to home page
- Navigation links lead to relevant pages
- Contact us link leads to the correct page for all web pages

### CSS3 validator

Pass

<a href="http://jigsaw.w3.org/css-validator/check/referer"><img style="border: 0; width: 88px; height: 31px;" src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" /></a>

### HTML5 Validator

**Home Page** - Pass
**About Page** - Pass
**Contact Us** - Pass
**Travel Information Page** - 2 Errors

1. Error: The element a must not appear as a descendant of the button element

- From line 345, column 63; to line 345, column 118

`="button"><a href="https://www.evisa.gov.zw/home" target="_blank">Apply`

<!-- markdownlint-disable-next-line MD029 -->

2. Error: The element a must not appear as a descendant of the button element.

- From line 376, column 38; to line 376, column 89

`="button"><a href="https://www.expedia.co.uk" target="_blank">Book f`

### Compatibility Testing

- Browser Compatibility

| Screen size\Browser |       Safari       |    Opera    | Microsoft Edge |       Chrome       |      Firefox       | Internet Explorer |
| ------------------- | :----------------: | :---------: | :------------: | :----------------: | :----------------: | :---------------: |
| Mobile              | :heavy_check_mark: | Not Tested  |  Not Tested.   | :heavy_check_mark: | :heavy_check_mark: |    Not Tested     |
| Desktop             | :heavy_check_mark: | Not Tested. |  Not Tested.   | :heavy_check_mark: | :heavy_check_mark: |    Not Tested     |
| Tablet              | :heavy_check_mark: | Not Tested. |  Not Tested.   | :heavy_check_mark: | :heavy_check_mark: |    Not Tested     |

- OS Compatibility was tested on iOS 14.5.1, MacOS Catalina, iPadOS 14.5 It is yet to be tested on Unix, Linux, Windows or Solaris Operating Systems.
- The devices used in this testing include MacBook Pro, iPad Pro, iPhone 12 Pro Max, iPhone 7 Plus.

- The website was exhaustively tested for responsiveness on [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools). Different viewport sizes were simulated ranging from as small as iPhone 5 (320px) to large desktop sizes (1200px and above).

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:

- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.

This website was published using [GitHub Pages](https://pages.github.com/).

1. Go to the GitHub.com and log in.
2. On the left-hand side, you'll see all your repositories, select the appropriate one.
3. Under the name of your chosen Repository you will see a ribbon of selections, click on 'Settings' located on the right hand side.
4. Scroll down till you see 'Pages' heading.
5. Under the 'Source' click on the dropdown and select 'master branch'
6. The page will reload and you'll see the link of your published page displayed under 'GitHub' pages.
7. It takes a few minutes for the site to be published, wait until the background of your link changes to a green color before trying to open it.

### Contribution

1. Firstly you will need to clone this repository by running the `git clone <https://github.com/datonex/visit-zimbabwe/>` command
2. If using VS Code type make sure you have th Git extension installed then type about code into your terminal
3. Download the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, one installed find the go live button at the bottom right of your vscode window
4. The project will now run on [localhost](http://127.0.0.1:5500/)
5. If using Gitpod use the command `python3 -m http.server`
6. Make changes to the code and if you think it belongs in here then just submit a pull request

## Credits

### Content

Each bit of content must have its own link and displayed as a list

- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media

Each bit of content must have its own link and displayed as a list

#### Images

- [Fruits](https://www.vecteezy.com/vector-art/148485-fruit-icon-pack) by Jellyfish from Vecteezy

- [Spooky Castle](https://pixabay.com/illustrations/spooky-castle-fantasy-scary-trees-5944873/) by ParallelVision from Pixabay

- Favicon image of snake obtained from [Twemoji](https://twemoji.twitter.com/), graphics licenced under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)

#### Audio

- [Game over](https://mixkit.co/free-sound-effects/) from mixkit
- epidemic sound

#### Video

- video was obtained from [here](https://linkhere.com)

### Acknowledgements

#### Coding resources used

- Game logic from [WebDev Simplified Channel](https://github.com/WebDevSimplified/Javascript-Snake-Game) from snake tutorial
- key code values [WesBos](https://keycode.info/)
- Code Institute [Love Maths](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode) Project
- How to access local storage using **JavaScript** from [Michael Karen](https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68)

- Thank you to my mentor for his support and guidance
