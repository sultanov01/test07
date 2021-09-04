// ***************** 1 *************** \\

let func1 = set => {
    alert('Hello after ' + set + ' seconds');
};
setTimeout(func1, 4000, 4);
setTimeout(func1, 8000, 8);

// **************** 2 ****************** \\
// function hello(set1, set2){
//     alert(hello);
//     for (let i = 0; i < 5; i++) {
//     	setInterval(hello, 1000, 'hello', 'bishkek');
//     	hello(delay + 1);
//     }
// }
// hello(1);

// const hello = delay =>
//   setTimeout(() => {
//     alert('Hello World. ' + delay);
//     alert('Done')
//     hello(delay + 1);
//   }, 1000);
// hello(1);

let set = 0;

function hello(){
	set++;
	alert('Hello world');
	if (set === 5) {
		clearInterval(time);
        alert('Done');
	}
}
let time = setInterval(hello, 1000);