//Задача1//

console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
function getNames(){
	return weapons.map(item => item.name);
}

getNames();

function getCountReliableWeapons(value){
	return weapons.filter(item => item.durability > value).length;
}

getCountReliableWeapons(300);

function hasReliableWeapons(value){
	return weapons.some(item => item.initDurability > value);
}

hasReliableWeapons(300);

function getReliableWeaponsNames(value){
	return weapons.filter(item => item.initDurability > value).map(item => item.name);
}

getReliableWeaponsNames(300);

function getTotalDamage(){
	return weapons.reduce((sum, item) => sum + item.attack , 0);

}

getTotalDamage();

//Задача 2

function memorize(fn, limit){
	const memory = [];
	return (...args) =>{
		const mem = memory.find(item => compareArrays(item.args, [...args]));
		if(mem){
			return mem.result;
		}

		const obj = {};
		obj.args = [...args];
		obj.result = fn(...args);
		memory.push(obj);

		const range = limit - 1;

		if(memory.length > range){
			memory.splice(range);
		}
		return obj.result;
	}

}	


const resultFunction = memorize((a,b) => a + b, 3);
resultFunction(3, 4);
resultFunction(2, 4);
resultFunction(3, 4);

const mMux = memorize((a,b) => a*b, 10);
mMux(3,4);

const mDiscriminant = memorize((a, b, c) => b**2 - 4 * a * c, 10);
mDiscriminant(4, 6, 2);

const mSum = memorize((a, b, c, d) => a + b + c + d, 10);
mSum(3, 8, 6, 7);