function removeProperty(obj, prop) {
  
  if(obj.hasOwnProperty(prop)){
    Reflect.deleteProperty(obj, prop);;
    return true;
  }else{
    return false;
  }
}