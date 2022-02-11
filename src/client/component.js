export default function hello(){
	const root = document.getElementById("root");
	const ele = document.createElement("div");
	ele.innerHTML = "Hello, Webpack";
	root.appendChild(ele);
}