const arr = [10, 7, 8];
//using if and else
const LargestOfThree = (arr) => {
    if (arr[0] > arr[1]) {
        if (arr[0] > arr[2]) {
            return arr[0];
        } else {
            return (arr[2]);
        }
    } else {
        if (arr[1] > arr[2]) {
            return (arr[1]);
        } else {
            return (arr[2]);
        }
    }
}
console.log("largest: "+LargestOfThree(arr));

//using if and else if
const smallest = (arr) => {
    if (arr[0] < arr[1] && arr[0] < arr[2]) {
        return arr[0];
    } else if (arr[1] < arr[0] && arr[1] < arr[2]) {
        return arr[1];
    } else {
        return arr[2];
    }
}

console.log("smallest: "+smallest(arr));


//switch case
const ranking=(rank)=>{
    switch(rank){
        case 'A':
            console.log("Great");
            break;
        case 'B':
            console.log("good");
            break;
        case 'C':
            console.log("okay");
            break;
        default:
            console.log("enter correct grade"); 
    }
}

ranking('A');
ranking('B');
ranking('C');
ranking('D');
