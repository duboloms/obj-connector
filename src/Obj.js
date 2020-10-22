class Obj {
  constructor(object){
    this.value = object;
  }
  compare(comparing_object){
    let matched = [];
    let not_matched = [];

    Object.keys(this.value).forEach(key => {
      Object.keys(comparing_object.value).forEach(comparing_key => {
        const clonedMatched = Object.assign({}, this.value);
        
        if(key === comparing_key){
          matched.push(key);

          delete clonedMatched[key];

          not_matched = Object.keys(clonedMatched);
        }
        
        if(!matched.length) not_matched = Object.keys(this.value);
      });
    });
    
    return { matched, not_matched }
  }
}

module.exports = Obj;
