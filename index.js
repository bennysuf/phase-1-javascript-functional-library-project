function alerts(e){
alert(e)
}

function myEach(collection, callback) {
const val =  Object.values(collection)
    val.forEach(element => callback(element))
    return collection
}

function myMap(collection, callback){
    const val =  Object.values(collection)
   return val.map()
// collection.map()
}