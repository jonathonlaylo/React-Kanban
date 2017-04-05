module.exports = function statusChange(card){
  return new Promise((resolve, reject) => {
    function reqListener(){
      const parsedData = JSON.parse(this.responseText);
      console.log('parsedData-statusChange', parsedData);
      resolve(parsedData);
    }
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("PUT", 'http://localhost:8080/api/kanban/todo/editcard', true);
    oReq.setRequestHeader("Content-type", "application/json");
    console.log('xhr card: ', card);
    oReq.send(JSON.stringify(card));
  });
};