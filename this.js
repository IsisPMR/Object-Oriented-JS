var x = {
    prop: 35,
    f: function() {
        return this.prop;
    },
    a: () => {
        return x.prop;
    }
}
//console.log("Con this: ", x.f());
//console.log("Con arrow function: ", x.a());

const y = Object.create(x);
y.b = 3;
const z = 3;
//console.log(y.b);
//console.log(x);

x.newProp = {};
x.newProp.a = 5;
x.newProp.b = {};
console.log(x.newProp.b)
x.newProp.b.a = {};
x.arrFunc = () => console.log("hi!");
x.func = function() {
    console.log("Hi! normal");
};

//console.log(x);
//console.log(newProb);
//x.arrFunc();
//x.func();

console.log(x.newProp.a);