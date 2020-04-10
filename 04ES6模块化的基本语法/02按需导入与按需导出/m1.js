let a = 10;
let b = 20;

//默认导出
export default {
	a,
	b
}

//按需导出
export let s1 = "aaa";
export let s2 = "bbb";
export function show(){
	console.log("Hello World");
}