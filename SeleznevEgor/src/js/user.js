

export class Human{
	constructor(fn, ln){
		this.nameHuman = fn;
		this.last = ln;
	}

	sayHi(){
		return `Hi, ${this.nameHuman} ${this.last}`;
	}
}