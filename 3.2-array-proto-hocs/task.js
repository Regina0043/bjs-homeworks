//Задача1//

console.clear();
const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
function getNames(){
	const container = [];
	weapons.map(item => {
		container.push(item.name);
	});
	console.log(container);
	return container;
}

getNames();

function getCountReliableWeapons(value){
	const reliableWeapons = weapons.filter(item => item.durability > value);
	console.log(reliableWeapons.length);
	return reliableWeapons.length;
}

getCountReliableWeapons(300);

function hasReliableWeapons(value){
	console.log(weapons.some(item => item.initDurability > value));
	return weapons.some(item => item.initDurability > value);
}

hasReliableWeapons(300);

function getReliableWeaponsNames(value){
	const container = [];
	weapons.some(item => {
		if(item.initDurability > value){
			container.push(item.name);
		}
		
	});
	console.log(container);
	return container;
}

getReliableWeaponsNames(300);

function getTotalDamage(){
	let sum = 0;
	weapons.some(item => {
		sum += item.attack;
		console.log(item);
	});
	console.log(sum);
	return sum;
}

getTotalDamage();

//Задача 2

function memorize(fn, limit){
	const memory = [];
	const obj = {};
	return (...args) =>{
		const mem = memory.find(item => compareArrays(item.args, [...args]));
		if(mem){
			return mem.result;
		}
			memory.push(obj);
			obj.args = [...args];
			obj.result = fn(...args);
			

			const range = limit - 1;

			if(memory.length > range){
				memory.splice(range, memory.length - limit);
			}
			console.log(memory);
			return obj.result;
	}

}	


const resultFunction = memorize((a,b) => a + b, 3);
resultFunction(3, 4);
resultFunction(2, 4);

const mMux = memorize((a,b) => a*b, 10);
mMux(3,4);

const mDiscriminant = memorize((a, b, c) => b**2 - 4 * a * c, 10);
mDiscriminant(4, 6, 2);

const mSum = memorize((a, b, c, d) => a + b + c + d, 10);
mSum(3, 8, 6, 7);