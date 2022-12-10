import data from "../data";

export function getItems(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(data)
        },2000)
    })
}

export function getItemsCategory(categoryID){
    return new Promise((resolve, reject)=>{
        let itemsFound = data.filter(item =>{
            return (item.category === categoryID)
        });
        if(itemsFound)
                resolve(itemsFound)
        else
            reject('Item no encontrado')
    })
}

export function getSingleItem(itemID){

    
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{

            let itemFound = data.find(itemInArray => itemInArray.id === itemID)
            if(itemFound)
                resolve(itemFound)
            else
                reject('Item no encontrado')
        },2000)
    })
}

