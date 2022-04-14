
/*****************************************************************
 * Global variables can be modified to alter the performance of 
 * certain functions. 
 *****************************************************************/
var parallaxScale = 1.5; //how dramatic the parallax effect is. 1 is no parallax effect, >1 increases parallax effect
var slideDuration = 15000 //how long a slide in the carousel will persist, in miliseconds. 15000 = 15 seconds.
var delta = 8; //var for min swipe distance before triggering

/*****************************************************************
 * Declarations and listeners. Do not modify unless you know
 * what you're doing
 *****************************************************************/
//swipe vars
var xDown = null
var yDown = null

var y;
var navbar = document.getElementById("navbar"); //Navbar for sticky
let resizeTimer;

// Get the offset position of the navbar
var navSticky = navbar.offsetTop;

//add listeners
window.addEventListener('resize', () => onResize())
window.addEventListener('scroll', () => applySticky(navbar, navSticky))

var parallaxImages;
function parallaxify()
{
  if (parallaxImages !== undefined)
  {
    parallaxImages.destroy()
  }
  //apply parallax to all images with parallax class
  var images = document.querySelectorAll('.parallax');
  parallaxImages = new simpleParallax(images, { orientation: 'down', scale: parallaxScale });
}


/************************************************************************
 * Function to get touch positions
 *
 * Arguments: evt event
 *
 * Returns: evt.touches
 ***********************************************************************/
getTouches = (evt) =>
{
  var evt = window.event;
  return (
    evt.touches || evt.originalEvent.touches // browser API
  ) // jQuery
}

/************************************************************************
 * Function to find the touch location of the client.
 *
 * Arguments: evt event
 * 
 * Sets var xDown and yDown
 ***********************************************************************/
handleTouchStart = () =>
{
  evt = window.event
  const firstTouch = this.getTouches(evt)[0]
  xDown = firstTouch.clientX
  yDown = firstTouch.clientY
}

/************************************************************************
 * Function to handle the touch move from initial to final touch positions.
 * Determines the direction of a swipe.
 *
 * Arguments: evt touch event
 ***********************************************************************/
handleTouchMove = () =>
{
  var evt = window.event
  if (!xDown || !yDown)
  {
    return
  }
  var xUp = evt.touches[0].clientX
  var yUp = evt.touches[0].clientY

  var xDiff = xDown - xUp
  var yDiff = yDown - yUp
  //X-axis swipe
  if (Math.abs(xDiff) > Math.abs(yDiff))
  {
    if (Math.abs(xDiff) > delta)
    {
      /*most significant*/
      if (xDiff > 0)
      {
        plusSlides(1)
      } else
      {
        plusSlides(-1)
      }
    }

  }
  //Y-axis Swipe
  else
  {
    if (yDiff > 0)
    {
      return
    } else
    {
      return
    }
  }
  xDown = null
  yDown = null
  evt.preventDefault()
}

/*****************************************************************
 * Function to toggle the hamburger menu on mobile screens by 
 * modifying the hamburget class.
 *****************************************************************/
function toggleHamburger()
{
  var navButtons = document.getElementById("navButtons")
  if (navButtons.classList.contains('hamburger'))
  {
    navButtons.classList.remove('hamburger')
  }
  else
  {
    navButtons.classList.add('hamburger')
  }
}

/*****************************************************************
 * Function that toggles the dropdown of links within the 
 * hamburger menu. Activated by clicking on the chevron next to 
 * a menu item to show more options.
 *****************************************************************/
function expandDropdown()
{
  var chevron = window.event.target;
  var button = chevron.parentElement;
  if (button.classList.contains('open'))
  {
    button.classList.remove('open')
  }
  else
  {
    button.classList.add('open')
  }
}

/*****************************************************************
 * Function used as the resize listener for the site.
 *****************************************************************/
function onResize()
{
  applySticky(navbar, navSticky)
  setBannerTextTop()
  animationResizeCancel()
}

/*****************************************************************
 * Function removes all animation timings and transitions for 
 * 0.5s during resize resulting in smoother transitions.
 * 
 * Adds the preload class to the body during transitions, and 
 * removes it 0.5s after the resize event ends
 *****************************************************************/
function animationResizeCancel()
{
  var app = document.body
  if (app !== null)
  {
    app.classList.add('preload')
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() =>
    {
      removePreload()
    }, 500)
  }
}

/*****************************************************************
 * Function removes the preload class from the document body
 *****************************************************************/
function removePreload()
{
  var app = document.body
  app.classList.remove('preload')
}

/*****************************************************************
 * Function called in the body's onload event. 
 * 
 * Initialized several variables and dynamic element positioning.
 * Removes preload when document.readystate=='complete' or when
 * the 'load' event is fired by window.
 *****************************************************************/
function initialize()
{
  navigateTo()
  applySticky(navbar, navSticky)
  setBannerTextTop()

  SlideShow(slidePosition);
  if (document.readyState === "complete")
  {
    removePreload()
  }
  else
  {
    window.addEventListener('load', removePreload)
  }

}

/*****************************************************************
 * Function for opening the expanded view for a 
 * project/publication. Replaces the class of the parent element,
 * then loops through clildren to make each child visible.
 * 
 * Arguments: 
 *  id: the id of the target element i.e. the parent element of
 *  the project/publication.
 *****************************************************************/
function openProjectInfo(id)
{
  var target = document.getElementById(id)

  target.classList.replace('minimized', 'maximized')

  // if taget has no children, do not loop.
  if (target.hasChildNodes())
  {
    var children = target.children
    for (var i = 0; i < children.length; i++)
    {
      if (children[i].classList.contains('hidden'))
      {
        children[i].classList.replace('hidden', 'visible')
      }
      else if (children[i].classList.contains('buttonOuter'))
      {
        children[i].classList.replace('learnMore', 'close')
      }
    }
  }
}

/*****************************************************************
 * Function used for opening an expanded view. Opens the project, 
 * as well as pushes a history state corresponding to the project 
 * name.
 * 
 * Arguments:
 *  id: The id of the project parent element.
 *****************************************************************/
function expandProjectInfo(id)
{
  openProjectInfo(id)
  window.history.pushState(
    {},
    document.title,
    window.location.href
      .toString()
      .substr(0, window.location.href.toString().indexOf('#')) + "#" + id,
  )
}

/*****************************************************************
 * Function used for closing an open project.
 * 
 * Replaces the class of the parent element, as well as making 
 * expanded only children become hidden. When called, function 
 * also pushes a new history state to the pages base url.
 * 
 * Arguments: 
 *  id: the id of the project parent element.
 *****************************************************************/
function colapseProjectInfo(id)
{
  var target = document.getElementById(id)
  target.classList.replace('maximized', 'minimized')
  if (target.hasChildNodes())
  {
    var children = target.children
    for (var i = 0; i < children.length; i++)
    {
      if (children[i].classList.contains('visible'))
      {
        children[i].classList.replace('visible', 'hidden')
      }
      else if (children[i].classList.contains('buttonOuter'))
      {
        // children[i].classList.add('visible')
        children[i].classList.replace('close', 'learnMore')
      }
    }
  }
  //push new history
  window.history.pushState(
    {},
    document.title,
    window.location.href
      .toString()
      .substr(0, window.location.href.toString().indexOf('#')),
  )
}

/*****************************************************************
 * 
 *****************************************************************/
function togglePublicationInfo(id)
{
  var target = document.getElementById(id)
  if (target.classList.contains('minimized'))
  {
    expandPublicationInfo(id)
  }
  else if (target.classList.contains('maximized'))
  {
    colapsePublicationInfo(id)
  }
  else
  {
    return
  }
}

/*****************************************************************
 * 
 *****************************************************************/
function expandPublicationInfo(id)
{
  openPublicationInfo(id)
  window.history.pushState(
    {},
    document.title,
    window.location.href
      .toString()
      .substr(0, window.location.href.toString().indexOf('#')) + "#" + id,
  )
}

/*****************************************************************
 * 
 *****************************************************************/
function openPublicationInfo(id)
{
  var target = document.getElementById(id)

  target.classList.replace('minimized', 'maximized')
  if (target.hasChildNodes())
  {
    var children = target.children
    for (var i = 0; i < children.length; i++)
    {
      if (children[i].classList.contains('hidden'))
      {
        children[i].classList.replace('hidden', 'visible')
      }
      else if (children[i].classList.contains('buttonOuter'))
      {
        children[i].classList.replace('learnMore', 'close')
      }
    }
  }
}

/*****************************************************************
 * 
 *****************************************************************/
function colapsePublicationInfo(id)
{
  var target = document.getElementById(id)
  target.classList.replace('maximized', 'minimized')
  if (target.hasChildNodes())
  {
    var children = target.children
    for (var i = 0; i < children.length; i++)
    {
      if (children[i].classList.contains('visible'))
      {
        children[i].classList.replace('visible', 'hidden')
      }
      else if (children[i].classList.contains('buttonOuter'))
      {
        // children[i].classList.add('visible')
        children[i].classList.replace('close', 'learnMore')
      }
    }
  }
  window.history.pushState(
    {},
    document.title,
    window.location.href
      .toString()
      .substr(0, window.location.href.toString().indexOf('#')),
  )
}

/*****************************************************************
 * 
 *****************************************************************/
function toggleProjectInfo(id)
{

  var target = document.getElementById(id)
  var proj = document.getElementById(id + "_intro")
  if (target.classList.contains('minimized'))
  {
    expandProjectInfo(id)
  }
  else if (target.classList.contains('maximized'))
  {
    colapseProjectInfo(id)
  }
  else
  {

    return
  }
}

/*****************************************************************
 * 
 *****************************************************************/
function setBannerTextTop()
{
  var bannerTexts = document.getElementsByClassName('sectionBannerText')
  var navBarHeight = navbar.getBoundingClientRect().height
  for (var i = 0; i < bannerTexts.length; i++)
  {
    bannerTexts[i].style.top = `${Math.ceil(navBarHeight - 1)}px`
  }
}

/*****************************************************************
 * 
 *****************************************************************/
function handleContentWindowScroll(contentWindow)
{

  var navbarbox = navbar.getBoundingClientRect()
  navbarBottom = navbarbox.bottom - navbarbox.height
  if (window.pageYOffset >= navSticky)
  {
    if (contentWindow.classList.contains('visible'))
    {
      contentWindow.classList.add("sticky")
    }
    else
    {
      contentWindow.classList.remove("sticky");
      // contentWindow.style.top = `${navbarBottom}px !important`
    }
    contentWindow.style.top = `${navSticky}px !important`
  }
  else
  {
    contentWindow.classList.remove("sticky");
    contentWindow.style.top = `${navSticky}px !important`
  }

}

/*****************************************************************
 * 
 *****************************************************************/
function stopEvent(evt)
{
  evt.stopPropagation()
  evt.preventDefault()
}

function changeURL()
{
  window.history.pushState({}, '', urlPath)
}

/*****************************************************************
 * 
 *****************************************************************/
function navigateTo(url)
{
  if (window.location.href.indexOf('#') != -1)
  {
    var section = window.location.href.split('#').pop()
    // openContentWindow(section)
    scrollToSection(section)
    var target = document.getElementById(section)
    if (!target.lastElementChild.classList.contains('mobile'))
    {
      expandProjectInfo(section)
    }

    else if (target.lastElementChild.classList.contains('mobile') && window.matchMedia("(max-width: 750px)").matches)
    {
      expandProjectInfo(section)
    }

    // expandPublicationInfo(section)
  }
}

/*****************************************************************
 * 
 *****************************************************************/
function scrollToSection(target)
{
  var elem = document.getElementById(target)
  var classes = elem.classList

  if (elem !== null)
  {
    console.log("Scroll Target: ", classes)
    //Works for index projects and fieldsites
    //Also works for About individuals on desktop and mobile.
    if (classes !== undefined)
    {
      if (classes.contains('projectInfo') || classes.contains('labMember'))
      {
        elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
      }
      // works on desktop and mobile for individual publications
      else if (classes.contains('publicationInfo'))
      {
        elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
      }
      else if (classes.contains('sectionBannerText'))
      {
        elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
      }
    }
    // works for desktop and mobile publications sections only.
    // also works for about sections on desktop and mobile
    else if (elem.tagName === 'SECTION')
    {
      console.log("calling section")
      elem.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" })
    }
    else
    {
      elem.scrollIntoView(alignToTop)
    }
  }
}

window.onpopstate = function (event)
{
  if (window.location.href.indexOf('#') === -1)
  {
    window.location.href = window.location.href
  }
  else
  {
    var section = window.location.href.split('#').pop()
    scrollToSection(section)
    openProjectInfo(section)
  }

}

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
/*****************************************************************
 * 
 *****************************************************************/
function applySticky(elem, loc)
{
  setBannerTextTop()
  // assignProjectPosition('contentContainer')
  if (window.pageYOffset >= loc)
  {
    elem.classList.add("sticky")
    var wrapper = document.getElementById('wrapper')
    var elemHeight = elem.getBoundingClientRect().height
    wrapper.style.paddingTop = `${elemHeight}px`
  }
  else
  {
    var wrapper = document.getElementById('wrapper')
    var elemHeight = elem.getBoundingClientRect().height
    wrapper.style.paddingTop = '0px'
    elem.classList.remove("sticky");
  }
}

// Functions for carousel Implementation
var slidePosition = 1;
var slideshowTimeout;

// forward/Back controls
function plusSlides(n)
{
  SlideShow(slidePosition, slidePosition += n);
}

//  images controls
function currentSlide(n)
{
  SlideShow(slidePosition, slidePosition = n);
}
var firstSlide = true

/*****************************************************************
 * 
 *****************************************************************/
function SlideShow(oldn, n)
{
  var direction
  if (oldn - n === 1)
  {
    direction = 'previous'
  }
  else
  {
    direction = 'next'
  }
  var i;
  var slides = document.getElementsByClassName("slideshowItem");
  if (slides === null || slides.length === 0 || slides === undefined)
  {
    return;
  }
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) { slidePosition = 1 }
  if (n < 1) { slidePosition = slides.length }
  for (i = 0; i < slides.length; i++)
  {
    slides[i].classList.remove('slideInLeft')
    slides[i].classList.remove('slideInRight')
    if (firstSlide !== true)
    {
      slides[i].classList.remove('noSlide')
    }
    if (direction === 'next')
    {
      slides[i].classList.add('slideOutLeft')
    }
    if (direction === 'previous')
    {
      slides[i].classList.add('slideOutRight')
    }
  }
  for (i = 0; i < circles.length; i++)
  {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].classList.remove('slideOutLeft')
  slides[slidePosition - 1].classList.remove('slideOutRight')
  if (firstSlide !== true)
  {
    slides[slidePosition - 1].classList.remove('noSlide')
  }
  if (direction === 'next')
  {
    slides[slidePosition - 1].classList.add('slideInLeft')
  }
  if (direction === 'previous')
  {
    slides[slidePosition - 1].classList.add('slideInRight')
  }
  if (circles.length > 0)
  {
    circles[slidePosition - 1].className += " enable";
  }

  firstSlide = false
  clearTimeout(slideshowTimeout)
  slideshowTimeout = setTimeout(function () { plusSlides(1) }, slideDuration); // Change image every 10 seconds
}

/*****************************************************************
 * 
 *****************************************************************/
