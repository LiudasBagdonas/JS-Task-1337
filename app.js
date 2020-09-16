const pakelis = {
    vnt: 20,
    parukyti() {
        if(this.vnt){
            this.vnt--
        }
        return this.vnt;
    }
};
const body = document.querySelector('body');
const buttonSmoke = document.createElement('button');
buttonSmoke.innerText = pakelis.vnt;

buttonSmoke.addEventListener('click', () => {
    buttonSmoke.innerText = pakelis.parukyti();
});

body.append(buttonSmoke);

// function getCancer(cigariukai) {
//     while(cigariukai.vnt) {
//         console.log(cigariukai.vnt);
//         cigariukai.parukyti()
//     }
// }
// getCancer(pakelis)