var tl=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 90%",
    end:'50% 50%',
    scrub:"true",
    
}})
tl.to("#tpc2",{
    top:"130%",
    left:"38%",
},'p')
tl.to("#tpc3",{
    top:"130%",
    left:"68.5%",
},'p')
tl.to("#tpc1",{
    top:"132%",
    left:"7.5%",
},'p')


// var tl2=gsap.timeline({scrollTrigger:{
//     trigger:".three",
//     start:"0% 90%",
//     end:'50% 50%',
//     scrub:"true",
//     markers:true,
// }})
// tl2.to("#tpc2",{
//     top:"220%",
//     left:"10%",
// })