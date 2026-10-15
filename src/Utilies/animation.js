




// // common animation varaints
// export const fadeInUp={
//     intial : {
//         y :20,
//         opacity :0
//     },
//     animate : {
//         y:0,
//         opacity:1
//     }
// }
// export const fadeIn ={
//     intial:{
//         opacity:0
//     },
//     animate:{
//         opacity:1
//     }
// }
// export const transitions ={
//     default: {
//         duration :0.5
//     },
//     delayed : {
//         duration :0.5,
//         delay:0.3
//     },
//     slow :{
//         duration:0.8,
//     }
// }
// // name tags animation
// export const nameTagAnimnation ={
//     intial :{
//         x:-200,
//         opacity:0,
//         rotate:-10,
//     },
//     animate:{
//         x:0,
//         opacity:1,
//         rotate:-10,
//         y:(-2,2,-2)
//     },
//     transition:{
//         x:{duration:0.5 ,delay :0.3},
//         y:{duration:2,repeat:Infinity, ease:"easeInOut"},

//     }
// }
// // button animation
// export const buttonHover ={
//     whileHover :{scale:1.05},
//     whileTap : {scale:0.95}
// }
// logo animatioon



export const fadeInUp = {
    initial: {
        y: 20,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    }
}

export const fadeIn = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    }
}

export const transitions ={
    default: {
        duration: 0.5
    },
    delayed: {
        duration: 0.5,
        delay: 0.3
    },
    slow: {
        duration: 0.8
    }
}

// name tag animation
export const nameTagAnimation = {
    initial: {
        x: -20,
        opacity: 0,
        rotate: -10
    },
    animate: {
        x: 0,
        opacity: 1,
        rotate: -10,
        y: [-2, 2, -2]
    },
    transition: {
        x: {duration: 0.5, delay: 0.3},
        y : {duration: 2, repeat: Infinity, ease: "easeInOut"}
    }
}



// button animation

export const buttonHover = {
    whileHover: {scale: 1.05},
    whileTap: {scale: 0.95}
}