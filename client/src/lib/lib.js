module.exports = function loadData(){
  return new Promise((resolve, reject) => {
    function reqListener(){
      const parsedData = JSON.parse(this.responseText);
      console.log('parsedData', parsedData);
      resolve(parsedData);
    }
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", 'http://localhost:8080/api/kanban/todo');
    oReq.send();
  });
};

// const FakeLibrary = [
//   {_id: 1, title: "Do DevLeague HW ", priority: "now ", status: "in progress "},
//   // {_id: 2, title: "Clean your room ", priority: "whenever ", status: "in progress "},
//   {_id: 3, title: "text her ", priority: "REALLY IMPORANT ", status: "forever "}
// ];

// export default FakeLibrary;