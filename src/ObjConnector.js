const Obj = require('./Obj');

class ObjConnector {
  constructor(){
    this.connections = [];
  }
  connect(obj1, obj2){
    let connected_obj = {};

    const obj1_ = new Obj(obj1);
    const obj2_ = new Obj(obj2);
    
    if(obj2_.compare(obj1_).not_matched){
      obj2_.compare(obj1_).not_matched.forEach(key => {
        obj1_.value[key] = obj2_.value[key];
      });
    }
    
    connected_obj = obj1_.value;

    return connected_obj;
  }
}

module.exports = ObjConnector;
