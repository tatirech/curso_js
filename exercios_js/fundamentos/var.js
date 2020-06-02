const [a] = [10]
console.log (a)
 
const[n1, ,n3, n4 = 2] = [1,2,3,]
console.log (n1, n3, n4)

//const [ , [ ] ]


const [l] = [4]
console.log(l)

const [l1, l2, , , l5=10] = [10, 12, 14, 15]
console.log (l1, l2, l5 )

const [, [, nota]] = [[8,9], [ 9,5,8]]

console.log (nota)