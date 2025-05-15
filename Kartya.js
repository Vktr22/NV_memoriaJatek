export default class Kartya {
  #fajlnev;
  #allapot;
  #blokkolt;
  #divElem;
  #imgElem;

    constructor(id, allapot, szuloElem) {
        this.#fajlnev = fajlnev;
        this.#allapot = allapot;
        this.#blokkolt = false;
        this.#divElem = divElem;
        this.#imgElem = imgElem;
    }

    setAllapot(allapot) {
        
    }

    getFajlnev() {
        return this.#fajlnev;
    }

    #setLap(){

    }

    #kattintasTrigger() {
        this.#divElem.addEventListener("click", () => {
            this.kattintasTrigger();
        });
    }
}