<div id="top"></div>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Menu Sliding Hover</h3>

  <p align="center">
    Animate your menus with a sliding hover effect between links.
    <br />
    <a href="https://github.com/jbratcher/menu-sliding-hover"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jbratcher/menu-sliding-hover">View Demo</a>
    ·
    <a href="https://github.com/jbratcher/menu-sliding-hover/issues">Report Bug</a>
    ·
    <a href="https://github.com/jbratcher/menu-sliding-hover/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

Based on a reddit post on r/webdev that I saw for a similar feature that was built with React. Here's the vanilla JS version.

Easily make your nav menu animated with a semi transparent box that slides between links when they are hovered over.

All you have to do is include the script and execute that function. Supports multiple menus by calling the function for each individual menu and passing the menu id. Works with any menu or anchor link size.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

JavaScript and love.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

You will need to include the `index.js` and `index.css` files by adding the `dist` folder to your project.

### Prerequisites

None

### Installation

Just add the files to your project and import the script into your HTML.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

In your HTML file, you just need to import the script and call the function.

```
<script type="module">
    import { createAnimatedNav } from './index.js';
    createAnimatedNav();
</script>
```

If you have multiple menus, you can call the function once for each and pass a unique id.

```
<script type="module">
    import { createAnimatedNav } from './index.js';
    createAnimatedNav("width");
    createAnimatedNav("height");
</script>
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

Feel free to suggest. My only plan is to optimize the code and perhaps create an NPM package for easier integration.

See the [open issues](https://github.com/jbratcher/menu-sliding-hover/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Jeremy Bratcher: [https://github.com/jbratcher](https://github.com/jbratcher)

Project Link: [https://github.com/jbratcher/menu-sliding-hover](https://github.com/jbratcher/menu-sliding-hover)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Inspiration](https://emilkowal.ski/ui/tabs)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/jbratcher/menu-sliding-hover.svg?style=for-the-badge
[contributors-url]: https://github.com/jbratcher/menu-sliding-hover/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jbratcher/menu-sliding-hover.svg?style=for-the-badge
[forks-url]: https://github.com/jbratcher/menu-sliding-hover/network/members
[stars-shield]: https://img.shields.io/github/stars/jbratcher/menu-sliding-hover.svg?style=for-the-badge
[stars-url]: https://github.com/jbratcher/menu-sliding-hover/stargazers
[issues-shield]: https://img.shields.io/github/issues/jbratcher/menu-sliding-hover.svg?style=for-the-badge
[issues-url]: https://github.com/jbratcher/menu-sliding-hover/issues
[license-shield]: https://img.shields.io/github/license/jbratcher/menu-sliding-hover.svg?style=for-the-badge
[license-url]: https://github.com/jbratcher/menu-sliding-hover/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/jeremy-bratcher
[product-screenshot]: images/screenshot.png
