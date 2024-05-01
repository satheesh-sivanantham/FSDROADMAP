function newMethod(){
    console.log(this);
    // return this
}
// newMethod()
obj = {
     name: 'Jhon',
     method:newMethod

}

obj.method();