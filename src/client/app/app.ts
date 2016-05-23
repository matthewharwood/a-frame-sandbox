/**
 * Created by matty on 5/22/16.
 */
var scene = document.querySelector('a-scene');

if (scene.hasLoaded) {
  run();
} else {
  scene.addEventListener('loaded', run);
}


function run () {
  var boxes = scene.querySelectorAll('a-box');
  var entity = scene.querySelector('a-sphere');
  var entityAnimation = entity.querySelector('a-animation');

  entityAnimation.addEventListener('animationend',(e)=> {
    let {x,y,z} = entity.getAttribute('position');
    console.log('animation end-leave');
    entityAnimation.setAttribute('from', `${x} ${y} ${z}`);
    entityAnimation.setAttribute('to', `${x} ${y} ${z}`);
  });

  setTimeout(()=>{
    for (let box of boxes) {

      box.addEventListener('mouseenter', function (e) {
        let {x,y,z} = e.target.getAttribute('position');
        entityAnimation.setAttribute('to', `${x} ${y} ${z}`);
      });

      box.addEventListener('mouseleave', function (e) {
        let {x,y,z} = entity.getAttribute('position');
        entityAnimation.setAttribute('from', `${x} ${y} ${z}`);
      });
    }
  }, 1000);


}