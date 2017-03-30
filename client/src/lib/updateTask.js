module.exports = function statusChange(card){
  return new Promise((resolve, reject) => {
    function reqListener(){
      const parsedData = JSON.parse(this.responseText);
      console.log('parsedData-Update', parsedData);
      resolve(parsedData);
    }
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("PUT", 'http://localhost:8080/api/kanban/todo/edit');
    oReq.send(JSON.stringify(card));
  });
};