//callback-hell (or) pyramid of doom

function getData(dataId, nextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (nextData) {
      nextData();
    }
  }, 3000);
}

(function getAllData() {
  console.log("fetching data 1...");
  getData(1, () => {
    console.log("fetching data 2...");
    getData(2, () => {
      console.log("fetching data 3...");
      getData(3, () => {
        console.log("fetching data 4...");
        getData(4, () => {
          console.log("All data fetched succesfully.");
        });
      });
    });
  });
})();
