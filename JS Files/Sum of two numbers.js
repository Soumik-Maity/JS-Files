let n = prompt("Enter Size of array: ");
let arr = [];
for(let i =0; i<n; i++) 
{
    arr[i] = prompt(`Eneter Numer ${i+1}: `)
}
for(let i =0; i<n; i++) {
    arr[i] = parseInt(arr[i]);
}
let target = prompt("Enter target: ")
target = parseInt(target);
let map = new Map();
let result = [];
for(i = 0; i < n; i++)
{
    findElement = target - arr[i];
    if(map.has(findElement))
    {
        result[0] = map.get(findElement);
        result[1] = i;
        break;
    }
    else 
    {
        map.set(arr[i],i);
    }
}
document.write(`Answer: [ ${result[0]}, ${result[1]} ]`);