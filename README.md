# The Snake & the Wizard

##  1. <a name='Overview'></a>Overview

<img src="./assets/img/readme/game-screen-mockup.png">

This is a web based game inspired by the Nokia 3310 version of Snake. The aim of the game is to grow the snake by eating the fruit that randomly spawn onto the board without hitting the boarder or without hitting your own tail. The website uses basic **HTML** and **CCS** to create the static components of the game. All the interactive features, including movement are made using **JavaScript**. The game will be responsive for all devices.

[Live Website](https://datonex.github.io/snake-and-the-wizard/)

[GitHub Repository](https://github.com/datonex/snake-and-the-wizard)

## Table Of Contents 
<!-- vscode-markdown-toc -->
* 1. [Overview](#Overview)
* 2. [UX](#UX)
	* 2.1. [User Stories](#UserStories)
	* 2.2. [Design](#Design)
		* 2.2.1. [Game Story](#GameStory)
		* 2.2.2. [Colour Scheme](#ColourScheme)
		* 2.2.3. [Typography](#Typography)
		* 2.2.4. [Imagery](#Imagery)
		* 2.2.5. [Wireframes](#Wireframes)
		* 2.2.6. [Mockups](#Mockups)
	* 2.3. [Existing Features](#ExistingFeatures)
		* 2.3.1. [Common Features Across All Pages](#CommonFeaturesAcrossAllPages)
	  * 2.3.2 [Specific to Pages](#SpecifictoPages)
	* 2.4. [Features Left to Implement](#FeaturesLefttoImplement)
* 3. [Technologies Used](#TechnologiesUsed)
	* 3.1. [Languages used](#Languagesused)
	* 3.2. [Frameworks, Libraries and Programs Used](#FrameworksLibrariesandProgramsUsed)
* 4. [Testing](#Testing)
	* 4.1. [Bugs](#Bugs)
	* 4.2. [JavaScript Validator](#JavaScriptValidator)
	* 4.3. [CSS3 validator](#CSS3validator)
	* 4.4. [HTML5 Validator](#HTML5Validator)
	* 4.5. [Compatibility Testing](#CompatibilityTesting)
* 5. [Deployment](#Deployment)
	* 5.1. [Contribution](#Contribution)
* 6. [Credits](#Credits)
	* 6.1. [Media](#Media)
		* 6.1.1. [Images](#Images)
		* 6.1.2. [Audio](#Audio)
	* 6.2. [Acknowledgements](#Acknowledgements)
		* 6.2.1. [Coding resources used](#Codingresourcesused)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

##  2. <a name='UX'></a>UX

###  2.1. <a name='UserStories'></a>User Stories

- #### As a user who wants to play a quick game on my commute

1. I want to have access to the game on the go

2. I want to easily start the game

3. I want to be able to see a balance of images and text

4. I want to be able to easily see my score

5. I want responsive touch interaction on a mobile device

6. I want to be able to pause the game

- #### As a user at home

1. I want to have access to the website on any device and on the go

2. I want the buttons to be easy to see and be responsive

3. I want responsive touch interaction on mobile device or tablet

4. I want to be able to use the arrow buttons, or the WASD buttons to control the snake's direction on desktop computer

5. I want to be able to pause the game

###  2.2. <a name='Design'></a>Design

####  2.2.1. <a name='GameStory'></a>Game Story

Story of the game came from my love of Scooby Doo as a child. They always encountered scary looking houses and all kinds of "monsters". In this game however the monster is real! You were turned into a snake by a wizard and he locked you up in a very large empty room in his large house. The room as no windows and the door can only be opened by the wizard's magic. However the wizard is unaware of a very important fact that could give you a chance to escape, whenever he is asleep, he spontaneously spawns all kinds of fruit in that empty room that you are trapped in. He also doesn't know that the fruit's have powers that make you grow very quickly. While stuck in there you got hungry and ate the fruit without thinking. When you realised that you grew longer, you had an idea to eat the fruit and grow large enough to make the room collapse on itself and escape.

####  2.2.2. <a name='ColourScheme'></a>Colour Scheme

The colour theme of the game is based on one of my favourite colour's, purple. I found a background with the colours I want and based the colour scheme from there. I used [**Adobe Color - Image**](https://color.adobe.com/create/image) to pick colours from the images and automatically generate colours for me.

<img src="./assets/img/readme/colour-scheme-org.png"/>

The darkest colour in the grid was too dark, so I used [**Adobe Color - Wheel**](https://color.adobe.com/create/color-wheel) to determine a slightly lighter color that will best suit the scheme.

<img src="./assets/img/readme/colour-scheme-mod.png" />

####  2.2.3. <a name='Typography'></a>Typography

Font used for the heading was Mystery Quest with a back-up font of sans-serif. The font is eye catching and the swirls in the writing match the title of the game in terms of theme.

<img src="./assets/img/readme/font-mystery-quest.png" />

Font used for main text was Quicksand with a back-up font of sans-serif. The font is easy to read, well spaced out and goes well together with Mystery Quest.

<img src="./assets/img/readme/font-quicksand.png" height = "100px"/>

####  2.2.4. <a name='Imagery'></a>Imagery

The background of the page is a haunted house type of building to decorate the page and fit in with context to the story.

####  2.2.5. <a name='Wireframes'></a>Wireframes

Wireframes were created using Adobe Xd.

- Mobile Wireframe

<img src="./assets/img/readme/wireframes/wireframes-second/large-mobile.png" height="300px" />

- Tablet Wireframe

<img src="./assets/img/readme/wireframes/wireframes-second/tablet.png" height="300px"/>

- Desktop Wireframe

<img src="./assets/img/readme/wireframes/wireframes-second/webpage.png" height="300px" />

####  2.2.6. <a name='Mockups'></a>Mockups

The game has mostly remained the same in terms of general structure. New feature since the wireframe has been added such as:

- Main Menu

<img src="./assets/img/readme/game-main-menu-mockup.png">

- Game instructions

<img src="./assets/img/readme/game-instructions-mockup.png">

- Game states, including Pause, Game Over, Play and Setting Page

<img src="./assets/img/readme/game-states-mockup.png">

###  2.3. <a name='ExistingFeatures'></a>Existing Features

####  2.3.1. <a name='CommonFeaturesAcrossAllPages'></a>Common Features Across All Pages

- [x] **Links** that are hovered over

- All links that are surrounding text have been underlined and change color when hovered over. This helps the user to identify external links. This excludes the action buttons on the main game screen.

- [x] **Responsiveness**

- All pages work well with many screen sizes.

- Buttons are consistent with theme.

- [x] **Fonts**

- All text is large and easy to read.

- [x] **Accessibility**

- Clear contrast between the background and text.

- Colour theme do not conflict for those who are colour blind.

####  2.3.2 <a name='SpecifictoPages'></a>Specific to Pages

- [x] **Main Menu**

- Main menu format is consistent across all devices

- [x] **Game Page**

- Instructions for the game are easily accessible.

- All devices are able to pause the game.

- Game difficulty increases during the game by increasing speed

- User has access to the high score.

###  2.4. <a name='FeaturesLefttoImplement'></a>Features Left to Implement

- Be able to change the grid size from the settings page

- Be able to change the fruit displayed on the page from the snake to eat

- Disable minor scrolling from browser on mobiles when swiping

- Add Sound to Game

##  3. <a name='TechnologiesUsed'></a>Technologies Used

###  3.1. <a name='Languagesused'></a>Languages used

- [**HTML**](https://en.wikipedia.org/wiki/HTML5) for static text and containers for the game, and buttons.
- [**CSS**](https://en.wikipedia.org/wiki/CSS) for styling of the game.

- [**JavaScript**](https://www.javascript.com/) for the interactive features of the game.

###  3.2. <a name='FrameworksLibrariesandProgramsUsed'></a>Frameworks, Libraries and Programs Used

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

- [**Swiped Events**](https://github.com/john-doherty/swiped-events) was used to add swipe controls to game.

##  4. <a name='Testing'></a>Testing

- ### External links

- Link to Github repository on credits page opens in a new tab and leads to this README

- ### Internal Links

- **Start Game Button** opens a new page in the browser to the game instructions screen

- **Credits Button** button shows the credits box as expected

- **Back Icons** and **Main Menu Buttons** buttons in credits box and main game all lead to Main Menu as expected

- **Instruction page** Tapping, and spacebar all toggle lead to the main game board

- **Refresh Icon**, **Restart Button**, **Try Again Button** reloads the game page

- **Setting Icon** Pauses the game and opens the settings box and refreshes game

- **Pause Icon** Pauses and continues game as expected

- ### Button Events

- **Arrow Keys** Move snake in expected direction

- **WASD Keys** Move snake in expended direction

- ### Swipe Events

- **Swipe Directions** snake moves in expected swipe direction and are responsive

- ### Game Play

When each game feature was added, it was tested to see if it behaves as expected.

- Snake grows extra segment when it consumes food. which in turn increases score

- Score updates when food is eaten

- High score is successfully stored in local storage

- High score successfully updates when it is smaller than current score

- Snake body follows snake head

- Snake hitting all 4 walls triggers **Game Over** menu

- Snake hitting itself triggers **Game Over** menu

- Snake speed increases when eating

###  4.1. <a name='Bugs'></a>Bugs

- When game over is triggered, snake head is no longer in front, but moves to the last div element

###  4.2. <a name='JavaScriptValidator'></a>JavaScript Validator

VSCode extension [jshint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint)

Pass

###  4.3. <a name='CSS3validator'></a>CSS3 validator

[W3C CSS Validator](http://jigsaw.w3.org/css-validator/validator)

3 **Warnings**

- Imported style sheets are not checked in direct input and file upload modes

- `--height` is an unknown vendor extension

- `--width` is an unknown vendor extension

2 **Errors**

- `body` Property `overscroll-behavior` doesn't exist : `none`

- `ul` Property `padding-inline-start` doesn't exist : `0`

<a href="http://jigsaw.w3.org/css-validator/check/referer"><img style="border: 0; width: 88px; height: 31px;" src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Valid CSS!" /></a>

###  4.4. <a name='HTML5Validator'></a>HTML5 Validator

[W3C HTML Validator](https://validator.w3.org/nu/#textarea)

**Main Menu Page** - Pass

**Game Page** - 4 Warnings 1 Error

1. **Warning** - Empty heading x 4

   - From line 34, column 13; to line 34, column 29

     `<h1 class="menu"><i cla`

   - From line 35, column 13; to line 35, column 32

     `<h1 class="restart"><i cla`

   - From line 36, column 13; to line 36, column 33

     `<h1 class="settings"><i cla`

   - From line 37, column 13; to line 37, column 30

     `<h1 class="pause"><i cla`

2. **Error** - A script element with a defer attribute must not have a type attribute with the value module

   `ript>↩ <script src="assets/js/game.js" defer type="module"></scri`

   - Error has been fixed. Modules are defered by default see [here](https://v8.dev/features/modules)

###  4.5. <a name='CompatibilityTesting'></a>Compatibility Testing

- Browser Compatibility

| Screen size\Browser |       Safari       |       Opera        | Microsoft Edge |       Chrome       |      Firefox       | Internet Explorer |
| ------------------- | :----------------: | :----------------: | :------------: | :----------------: | :----------------: | :---------------: |
| Mobile              | :heavy_check_mark: | :heavy_check_mark: |  Not Tested.   | :heavy_check_mark: | :heavy_check_mark: |    Not Tested     |
| Desktop             | :heavy_check_mark: | :heavy_check_mark: |  Not Tested.   | :heavy_check_mark: | :heavy_check_mark: |    Not Tested     |
| Tablet              | :heavy_check_mark: | :heavy_check_mark: |  Not Tested.   | :heavy_check_mark: | :heavy_check_mark: |    Not Tested     |

- OS Compatibility was tested on iOS 14.6, MacOS Catalina, iPadOS 14.6 It is yet to be tested on Unix, Linux, Windows or Solaris Operating Systems.
- The devices used in this testing include MacBook Pro, iPad Pro 10.5, iPhone 12 Pro Max, iPhone 7 Plus, iPhone 11, iPhone 6s.

- The website was exhaustively tested for responsiveness on [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools). Different viewport sizes were simulated ranging from as small as iPhone 4 (320px) to large desktop sizes (1200px and above).

##  5. <a name='Deployment'></a>Deployment

This website was published using [GitHub Pages](https://pages.github.com/).

1. Go to the GitHub.com and log in.
2. On the left-hand side, you'll see all your repositories, select the appropriate one.
3. Under the name of your chosen Repository you will see a ribbon of selections, click on 'Settings' located on the right hand side.
4. Scroll down till you see 'Pages' heading.
5. Under the 'Source' click on the dropdown and select 'master branch'
6. The page will reload and you'll see the link of your published page displayed under 'GitHub' pages.
7. It takes a few minutes for the site to be published, wait until the background of your link changes to a green color before trying to open it.

###  5.1. <a name='Contribution'></a>Contribution

1. First you will need to clone this repository by running the `git clone <https://github.com/datonex/visit-zimbabwe/>` command in your terminal
2. If using VS Code type make sure you have the Git extension installed then type above code into your terminal
3. Download the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, one installed find the go live button at the bottom right of your vscode window
4. The project will now run on a [localhost](http://127.0.0.1:5500/)
5. If using Gitpod use the command `python3 -m http.server`

##  6. <a name='Credits'></a>Credits

###  6.1. <a name='Media'></a>Media

####  6.1.1. <a name='Images'></a>Images

- [Fruits](https://www.vecteezy.com/vector-art/148485-fruit-icon-pack) by Jellyfish from Vecteezy

- [Spooky Castle](https://pixabay.com/illustrations/spooky-castle-fantasy-scary-trees-5944873/) by ParallelVision from Pixabay

- Favicon image of snake obtained from [Twemoji](https://twemoji.twitter.com/), graphics licenced under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)

####  6.1.2. <a name='Audio'></a>Audio

- [Game over sound](https://mixkit.co/free-sound-effects/) from mixkit
- [Epidemic sound](https://www.epidemicsound.com/?_us=adwords_brand&_usx=10143947985_epidemic%20sound&gclid=EAIaIQobChMI_PfY5Zjf8QIVlojVCh1iJgPGEAAYASAAEgJlXfD_BwE)

###  6.2. <a name='Acknowledgements'></a>Acknowledgements

####  6.2.1. <a name='Codingresourcesused'></a>Coding resources used

- Game logic from [WebDev Simplified Channel](https://github.com/WebDevSimplified/Javascript-Snake-Game) from snake tutorial
- key code values [WesBos](https://keycode.info/)
- Code Institute [Love Maths](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode) Project
- How to access local storage using **JavaScript** from [Michael Karen](https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68)
- Game user interface [Steven Lambert](https://blog.sklambert.com/html5-game-tutorial-game-ui-canvas-vs-dom/)
- Window Location [W3Schools](https://www.w3schools.com/js/js_window_location.asp)
- Backticks [Medium](https://betterprogramming.pub/javascript-how-backticks-work-de269e0fb8ba)
- Modules [V8 Dev](https://v8.dev/features/modules)
- Overscroll [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/overscroll-behavior)

- Thank you to my mentor for his support and guidance
