

console.log(window.anychart);

let arrayOfData;
const makeCountByRaceChart = async() => {

  const getCountByRace = async() => {
    return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/persons/countbyrace')
      .then((response) => {
        return response.json();
      });
  };

  const data = await getCountByRace();
  arrayOfData = data.map(function(obj) {
    return Object.keys(obj).sort().map(function(key) {
      return obj[key];
    });
  });
  const staticArray = [['White', 0.3730670429], ['Black', 2.305047818], ['American Indian', 0.4960888375], ['Asian', 0.1155536451], ['Native Hawaiian and Other Pacific Islander', 0.3002642396], ['Hispanic or Latino (any race)', 0.5008711193], ['Other', 0.1103932903]];
  // eslint-disable-next-line
  const chart = anychart.bar();
  // create a bar series and set the data
  // eslint-disable-next-line
  var series = chart.bar(staticArray);
  // set the container id
  chart.container('container');
  // initiate drawing the chart
  chart.draw();
};

const makeCountByTimeChart = async() => {

  const getCountByTime = async() => {
    return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/detentions/countByTime')
      .then((response) => {
        return response.json();
      });
  };

  const data = await getCountByTime();
  data.map(hourObj => {
    hourObj._id = (hourObj._id + 16) % 24;
  });
  data.sort((a, b) =>  a._id - b._id);
  arrayOfData = data.map(function(obj) {
    return Object.keys(obj).sort().map(function(key) {
      return obj[key];
    });
  });
  // eslint-disable-next-line
  const chart = anychart.bar();
  // eslint-disable-next-line
  var series = chart.bar(arrayOfData);
  chart.container('timecontainer');
  chart.draw();
};

const makeDurationByRaceChart = async() => {

  const getDurationByRace = async() => {
    return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/detentions/avgDetentionByRace')
      .then((response) => {
        return response.json();
      });
  };

  const data = await getDurationByRace();

  arrayOfData = data.map(function(obj) {
    return Object.keys(obj).sort().map(function(key) {
      return obj[key];
    });
  });

  // console.log(arrayOfData);

  // eslint-disable-next-line
  const chart = anychart.bar();
  // eslint-disable-next-line
  var series = chart.bar(arrayOfData);
  chart.container('durationcontainer');
  chart.draw();
};




const makeCountByGenderChart = async() => {

  const getCountByGender = async() => {
    return fetch('https://mult-co-jail-data.herokuapp.com/api/v1/persons//countByGender')
      .then((response) => {
        return response.json();
      });
  };

  const data = await getCountByGender();
  arrayOfData = data.map(function(obj) {
    return Object.keys(obj).sort().map(function(key) {
      return obj[key];
    });
  });

  // eslint-disable-next-line
  const chart = anychart.bar();
  // create a bar series and set the data
  // eslint-disable-next-line
  var series = chart.bar(arrayOfData);
  // set the container id
  chart.container('gendercontainer');
  // initiate drawing the chart
  chart.draw();
};
export {
  makeCountByRaceChart, 
  makeCountByTimeChart, 
  makeDurationByRaceChart, 
  makeCountByGenderChart
};
