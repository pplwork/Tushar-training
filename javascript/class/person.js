//partition function
function partiton(arr,low,high,field){
    const pivot=arr[high];
    var i=low-1;
    for(j=low;j<high;j++){
        if(arr[j][field]<pivot[field]){
            i++;
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }
    [arr[i+1],arr[high]]=[arr[high],arr[i+1]];
    return i+1;
}

//quicksort function 
function quickSort(arr,low,high,field){
    if(low<high){
        var pi=partiton(arr,low,high,field);
        quickSort(arr,low,pi-1,field);
        quickSort(arr,pi+1,high,field);
    }
}


class Person{
    constructor(name,age,salary,sex){
        this.name=name;
        this.age=age;
        this.salary=salary;
        this.sex=sex;
    }

    static sort(arr,field,order){
        let newArr=[...arr];
        quickSort(newArr,1,newArr.length-1,field);
        //if the order is descending we reverse the array
        if(order==='desc'){
            newArr=newArr.reverse();
        }
        return newArr;
    }   
}

var people=[
    ['tushar',21,100000,'male'],
    ['batman',29,10000,'male'],
    ['wonder women',28,20000,'female'],
    ['himanshu',51,340000,'male'],
    ['sudhanshu',27,1090000,'male'],
    ['gupta',21,50000,'male']
]

//for creating an array of objects of class Person
let arr=[];
people.forEach((person)=>{
    arr.push(new Person(...person))
})

//sortedArray is the array returned by the sort function inside class Person
const sortedArray=Person.sort(arr,'age','desc');
console.log(sortedArray);