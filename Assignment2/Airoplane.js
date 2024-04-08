function minimumPlanesNeeded(fuel) {
    if (!fuel || fuel[0] === 0) { 
        return -1;
    }
    
    let planesNeeded = 1;
    let currentFuel = fuel[0];
    let maxReachable = fuel[0];
    
    for (let i = 1; i < fuel.length; i++) {
        currentFuel--; 
        maxReachable = Math.max(maxReachable, fuel[i]);
        
        if (currentFuel === 0) { 
            if (maxReachable === 0) {  
                return -1;
            }
            planesNeeded++;
            currentFuel = maxReachable;
        }
        
        if (i === fuel.length - 1) { 
            return planesNeeded;
        }
    }
    
    return -1; 
}

const array1 = [2, 1, 2, 3, 1];
console.log(minimumPlanesNeeded(array1));  

const array2 = [1, 6, 3, 4, 5, 0, 0, 0, 6];
console.log(minimumPlanesNeeded(array2)); 
