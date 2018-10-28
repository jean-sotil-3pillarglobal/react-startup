import { bindActionCreators } from 'redux';
import { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/commons/chart';

// styles
import styles from './index.scss';

class Home extends Component {
  render () {
    return (
      <table className="table table-hover">
        <thead className="thead-light">
          <tr>
            <th>City</th>
            <th>Tempeture</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }

  renderWeather (data) {
    const {
      name,
    } = data.city;
    const humidity = data.list.map((weather) => { return weather.main.humidity; });
    const pressure = data.list.map((weather) => { return weather.main.pressure; });
    const temps = data.list.map((weather) => { return weather.main.temp; });

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart data={temps} color="red" units="K"/>
        </td>
        <td>
          <Chart data={humidity} color="green" units="pHa"/>
        </td>
        <td>
          <Chart data={pressure} color="blue" units="%"/>
        </td>
      </tr>
    );
  }
}

// state has props of component
function mapStateToProps ({ weather }) {
  return {
    // weather: weather,
    weather,
  };
}

export default connect(mapStateToProps, null)(Home);
