let test_birds = [2, 4, 5, 1, 2, 2, 2, 4, 5, 1, 5, 4, 1, 1, 1, 3, 4, 3, 3]


function migratoryBirds(arr) {
    let result;
    let type_count = [
        { type: 1, count: 0 },
        { type: 2, count: 0 },
        { type: 3, count: 0 },
        { type: 4, count: 0 },
        { type: 5, count: 0 },
    ];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 1:
                type_count[arr[i] - 1].count++;
                break;
            case 2:
                type_count[arr[i] - 1].count++;
                break;
            case 3:
                type_count[arr[i] - 1].count++;
                break;
            case 4:
                type_count[arr[i] - 1].count++;
                break;
            case 5:
                type_count[arr[i] - 1].count++;
                break;
        }
    }
    console.log(type_count);
    // lets sort the array from small to large

    let sortedArray = type_count.sort((a, b) => {
        return a.count - b.count;
    });
    console.log(sortedArray);
    // filter method, finding the maximum number of sighting
    let maxCount = sortedArray[sortedArray.length -1].count;
    // filter out the types with maximum counts
    let maxCountedarr = sortedArray.filter((x)=>{
        if(x.count == maxCount){
            return x;
        }
    });
    console.log(maxCountedarr);
    
    if (maxCountedarr.length ==1) {
         result = maxCountedarr[0].type;
    }else{
        let lowerType = maxCountedarr.sort((a,b)=>{
            return a.type - b.type;
        })
        // console.log(lowerType);
        result = lowerType[0].type;
    }
    

    return result;
}

console.log(migratoryBirds(test_birds));