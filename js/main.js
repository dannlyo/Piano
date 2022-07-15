// Keys
var keyC = document.querySelector('.keyC');
var keyD = document.querySelector('.keyD');
var keyE = document.querySelector('.keyE');
var keyF = document.querySelector('.keyF');
var keyG = document.querySelector('.keyG');
var keyA = document.querySelector('.keyA');
var keyE2 = document.querySelector('.keyE2');
// Rel keys
var keyCs = document.querySelector('.keyCs');
var keyDs = document.querySelector('.keyDs');
var keyFs = document.querySelector('.keyFs');
var keyGs = document.querySelector('.keyGs');
var keyAs = document.querySelector('.keyAs');

window.onkeypress =  (key) =>{
    // console.log(key.key)
    if(key.key == 'c' || key.key == 'C'){
        keyC.classList.toggle('active')
        var audio = new Audio('/key/piano-c_C_major.wav');
        // keyC.classList.remove('active')
        audio.play();
        // console.log(audio);
    }
    else if(key.key == 'd' || key.key == 'D'){
        keyD.classList.toggle('active')
        var audio = new Audio('/key/piano-d_D_major.wav');
        audio.play();
        // console.log(audio);
    }
    else if(key.key == 'e' || key.key == 'E'){
        keyE.classList.toggle('active')
        var audio = new Audio('/key/piano-e_E_major.wav');
        audio.play();
        // console.log(audio);
    }
    else if(key.key == 'f' || key.key == 'F'){
        keyF.classList.toggle('active')
        var audio = new Audio('/key/piano-f_F_major.wav');
        audio.play();
        // console.log(audio);
    }
    else if(key.key == 'g' || key.key == 'G'){
        keyG.classList.toggle('active')
        var audio = new Audio('/key/piano-g_G_major.wav');
        audio.play();
        // console.log(audio);
    }
    else if(key.key == 'a' || key.key == 'A'){
        keyA.classList.toggle('active')
        var audio = new Audio('/key/piano-a_A_major.wav');
        audio.play();
        // console.log(audio);
    }
    else if(key.key == 'e' || key.key == 'E'){
        keyE.classList.toggle('active')
        var audio = new Audio('/key/piano-e_E_major.wav');
        audio.play();
        // console.log(audio);
    }
    else if(key.key == 'z' || key.key == 'Z'){
        keyCs.classList.toggle('sactive')
        var audio = new Audio('/key/piano-g_Gs_major.wav');
        audio.play();
        // console.log(audio);
    }
    else if(key.key == 'x' || key.key == 'X'){
        keyDs.classList.toggle('sactive')
        var audio = new Audio('/key/piano-bb_As_major.wav');
        audio.play();
        // console.log(audio);
    }
    else if(key.key == 'v' || key.key == 'V'){
        keyFs.classList.toggle('sactive')
        var audio = new Audio('/key/piano-f_Fs_major.wav');
        audio.play();
        // console.log(audio);
    }
    else if(key.key == 'b' || key.key == 'B'){
        keyGs.classList.toggle('sactive')
        var audio = new Audio('/key/piano-eb_Ds_major.wav');
        audio.play();
        // console.log(audio);
    }
    else if(key.key == 'n' || key.key == 'N'){
        keyAs.classList.toggle('sactive')
        var audio = new Audio('/key/piano-c_Cs_major.wav');
        audio.play();
        // console.log(audio);
    }
    else if(key.key == 'm' || key.key == 'M'){
        keyE2.classList.toggle('active')
        var audio = new Audio('/key/piano-e_E_major.wav');
        audio.play();
        // console.log(audio);
    }
}
// window.onkeyup =  (key) =>{
//     var key.key = document.querySelectorAll('.key');
//     for(var i = 0; i < key.length;i++){
//         if(key.classList.contains('.active')){
//             key.classList.remove('active'); 
//         }
//     }
// }