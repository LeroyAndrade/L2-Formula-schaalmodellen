var timelineMenu = gsap.timeline();

function menuOpen(){

// From: it's gsap value to css value
// To:   from currents css to specified gsap value
// Set:  it snaps to that position

                   //css ID   haper 0.100 sec, set positie x-axis 100px naar rechts   en trek het vervolgens naar de originele positie terug
timelineMenu.from('#menuA1', {stagger: .1, xPercent: 100, duration: .5}, .4);
                                        //set CSS opacity 0 naar 1 (visible ) en doe er 1 seconde over wanneer actief en start na 0.400 secondes met het uitvoeren
timelineMenu.to('#menuA1', {stagger: .1, opacity: 1, duration: 1}, .4);

timelineMenu.from('#menuA2', {stagger: .1, xPercent: 100, yPercent: 100, duration: .5}, .5);
timelineMenu.to('#menuA2', {stagger: .1, opacity: 1, duration: 1}, .5);

timelineMenu.from('#menuA3', {stagger: .1, xPercent: 100, yPercent: 100, duration: .5}, .6);
timelineMenu.to('#menuA3', {stagger: .1, opacity: 1, duration: 1}, .6);

timelineMenu.from('#menuA4', {stagger: .1, xPercent: 100, yPercent: 100, duration: .5}, .7);
timelineMenu.to('#menuA4', {stagger: .1, opacity: 1, duration: 1}, .7);

timelineMenu.from('#menuA5', {stagger: .1, xPercent: 100, duration: .5}, .9);
timelineMenu.to('#menuA5', {stagger: .1, opacity: 1, duration: 1}, .9);

timelineMenu.from('#menuA6', {stagger: .1, xPercent: 1000, yPercent: 100, duration: .5}, 1.1);
timelineMenu.to('#menuA6', {stagger: .1, opacity: 1, duration: 1},1.1);

timelineMenu.pause(0, true);
timelineMenu.remove();
// timelineMenu.to('#menuA2', {opacity: 1, duration: 1, stagger: .1}, .5);
// timelineMenu.to('#menuA3', {opacity: 1, duration: 1, stagger: .1 }, .6);
// timelineMenu.to('#menuA4', {opacity: 1, duration: 1, stagger: .1}, .7);
// timelineMenu.to('#menuA5', {opacity: 1, duration: 1 }, .9);
// timelineMenu.to('#menuA6', {opacity: 1, duration: 1 }, 1.1);

}

function menuGesloten(){

 timelineMenu.set('#menuA1', {stagger: 0, opacity: 0, duration: 0, xPercent: 0}, 0);


}