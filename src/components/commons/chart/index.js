import { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

class Chart extends Component {
  calcAverage (data) {
    return _.round(_.sum(data) / data.length);
  }

  render() {
    return (
      <div>
        <Sparklines width={180} height={120} data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{this.calcAverage(this.props.data)} {this.props.units}</div>
      </div>
    );
  }
}

export default Chart;
