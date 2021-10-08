/**
 * Styles and animates the hover background element
 * CSS variables are set from the nav and link positions plus/minus a constant padding
 *
 * @param {string} elementID - ul tag id
 * @param {number} documentBaseFontSize - the font size in px to establish the rem value (optional)
 */

const createAnimatedNav = (elementId = null, documentBaseFontSize = 16) => {
  // nav wrapper element (ul)
  // set the navElement to the passed elementId
  // if elementId is not passed, try to select the nav > ul
  const navElement = elementId
    ? document.getElementById(elementId)
    : document.querySelector("nav > ul");

  // anchor tags of the nav lis
  let links;

  try {
    links = Array.from(navElement.getElementsByTagName("a"));
  } catch (error) {
    console.warn(
      "There doesn't seem to be a menu on this page. Please make sure you have a nav > ul structure to your menu or pass the id of the menu"
    );
    console.error(error);
    return null;
  }

  // set the base font size used in the document;
  const baseFontSize = documentBaseFontSize;

  // padding is equal to the font size (adjust as needed for more or less padding)
  const padding = baseFontSize;

  // calculate the initial distance for setting the position of the ::after pseudo-element
  const initialDistanceInPx =
    links[0].getBoundingClientRect().x -
    navElement.getBoundingClientRect().x -
    padding / 2;

  // helper to convert 'naked' px values to rems (ex. 16 => '1rem')
  const pxToRem = (px) => px / baseFontSize + "rem";

  // init the hover position x CSS variable using the initial distance
  navElement.style.setProperty(
    "--hover-position-x",
    pxToRem(initialDistanceInPx)
  );

  // init the hover position y CSS variable using the initial distance
  navElement.style.setProperty(
    "--hover-position-y",
    pxToRem(links[0].offsetTop - padding / 4)
  );

  // init the hover width CSS variable using the first link offset
  navElement.style.setProperty(
    "--hover-width",
    pxToRem(links[0].offsetWidth + padding)
  );

  // init the hover height CSS variable using the first link offset
  navElement.style.setProperty(
    "--hover-height",
    pxToRem(links[0].offsetHeight + padding)
  );

  // on hover, move the ::after element to the hovered link
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      // calculate distance hovered link is from start of container for positioning of ::after element
      let distanceFromStart = pxToRem(
        link.getBoundingClientRect().x -
          links[0].getBoundingClientRect().x +
          initialDistanceInPx
      );

      // update hover position x CSS variable to match hovered link location
      navElement.style.setProperty("--hover-position-x", distanceFromStart);

      // update hover width CSS variable to match hovered link width with padding
      navElement.style.setProperty(
        "--hover-width",
        pxToRem(link.offsetWidth + padding)
      );

      // update hover height CSS variable to match hovered link height with padding
      navElement.style.setProperty(
        "--hover-height",
        pxToRem(link.offsetHeight + padding)
      );
    });
  });
};

export { createAnimatedNav };
