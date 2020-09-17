const pakelis = {
    vnt: 20,
    parukyt() {
        if (this.vnt) {
            this.vnt--;
        }
        return this.vnt;
    },
};


function Studentas(value){
    this.name = value;
    this.pakelis = {...pakelis}
}
// let studentOne = new Studentas('Aiste', {...pakelis});
// let studentTwo = new Studentas('Laura', {...pakelis});
// let studentThree = new Studentas('Dominyka', {...pakelis});

const studentai = [
    'Aiste',
    'Laura',
    'Dominyka'
];
console.log(studentai)
studentai.forEach((value, index, array) => {
    array[index] = new Studentas(value)
});

studentai.forEach(studentas => {
    const button = createButton(studentas);
    document.body.appendChild(button);
});

function createButton(studentas) {
    const button = document.createElement('button');
    button.appendChild(document.createTextNode(`${studentas.name}, liko ${studentas.pakelis.vnt}`));

    button.addEventListener('click', () => {
        studentas.pakelis.parukyt();
        button.innerHTML = `${studentas.name}, liko ${studentas.pakelis.vnt}`;
    });

    return button;
}