function updateObjectWithKeyAndValue(object, key, value){
  var newObj = Object.assign({}, object);
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = object.assing({}, object);
  delete newObj[key];

  return newObj; 
}
