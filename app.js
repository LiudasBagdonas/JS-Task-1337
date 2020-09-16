const pakelis = {
    vnt: 20,
    parukyti() {
        return this.vnt--;
    }
};

while(pakelis.vnt) {
    console.log(pakelis.vnt);
    pakelis.parukyti()
}
