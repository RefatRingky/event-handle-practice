const programs = [
    'javascript proggaming',
    'dynamic javascript programming language',
    'i am learning javascript',
    'i am new in Javascript'
]
const searching = 'javascript';
const output = [];
for(const program of programs){
    if (program.toLowerCase().indexOf(searching.toLowerCase())!= -1 ) {
        output.push(program);
    }
}
console.log(output);