import oneTimeExecute from './one-time-execute';

require('waypoints/lib/noframework.waypoints');
//
// var countOptions = {
//   useEasing : false,
//   useGrouping : true,
//   separator : ',',
//   decimal : '.',
//   prefix : '$',
//   suffix : ''
// };
//
// const figures = [
//   {},
// ];

const anim = (theDocument) => {
  const animationClasses = ['anim', 'anim-wave', 'anim-num', 'anim-callout', 'anim-img'];
  animationClasses.forEach(className =>
    [...theDocument.getElementsByClassName(className)].forEach(el =>
      new Waypoint({ // eslint-disable-line no-undef
        element: el,
        handler: oneTimeExecute(() => el.classList.add('inview')),
        offset: '100%'
      })
    )
  );
}

anim(document)
