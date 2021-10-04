/**
 * Styles and animates the hover background element
 *
 *
 */

const createAnimatedNav = (elementId) => {
  const navList = document.getElementById(elementId); // nav wrapper element (ul)
  const links = Array.from(
    navList.getElementsByClassName("nav-list-item-link")
  ); // anchor tags or the nav lis
  const baseFontSize = 16; // set the base font size
  const padding = baseFontSize; // padding is equal to the font size (adjust as needed for more or less padding)
  const initialDistanceInPx =
    links[0].getBoundingClientRect().x -
    navList.getBoundingClientRect().x -
    padding / 2; // calculate the initial distance for setting the position of the ::after psuedo-element

  const pxToRem = (px) => px / baseFontSize + "rem"; // helper to convert 'naked' px values to rems (ex. 16 => '1rem')
  navList.style.setProperty("--hover-position-x", pxToRem(initialDistanceInPx)); // init the hover position x CSS variable using the initial distance
  navList.style.setProperty(
    "--hover-position-y",
    pxToRem(links[0].offsetTop - padding / 8)
  ); // init the hover position y CSS variable using the initial distance
  navList.style.setProperty(
    "--hover-width",
    pxToRem(links[0].offsetWidth + padding)
  ); // init the hover width CSS variable using the first link offset
  navList.style.setProperty(
    "--hover-height",
    pxToRem(links[0].offsetHeight + padding)
  ); // init the hover height CSS variable using the first link offset

  // on hover, move the ::after element to the hovered link
  links.forEach((link) =>
    link.addEventListener("mouseenter", () => {
      // calculate distance hovered link is from start of container for positioning of ::after element
      let distanceFromStart = pxToRem(
        link.getBoundingClientRect().x -
          links[0].getBoundingClientRect().x +
          initialDistanceInPx
      );
      navList.style.setProperty("--hover-position-x", distanceFromStart); // update hover position x CSS variable to match hovered link location
      navList.style.setProperty(
        "--hover-width",
        pxToRem(link.offsetWidth + padding)
      ); // // update hover width CSS variable to match hovered link width with padding
      navList.style.setProperty(
        "--hover-height",
        pxToRem(link.offsetHeight + padding)
      ); // // update hover height CSS variable to match hovered link height with padding
    })
  );
};

export { createAnimatedNav };
