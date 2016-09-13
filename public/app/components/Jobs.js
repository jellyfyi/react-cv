var Jobs = React.createClass({

  getInitialState: function() {
    return {
      jobs: []
    }
  },

  handleClick() {
    console.log(111);
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      this.setState({
        jobs: result.work
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    var hh = this.handleClick;
    var ts = this.state;
    return (
    <div className="row">
      <div className="col-xs-12">
        <div className="page-header text-center">
          <h1>Experience<br /><small>A selection of my recent work</small></h1>
        </div>
      </div>
      <div className="col-xs-12">
      {this.state.jobs.map(function(job) {
        return (
          <div className="item-job" onClick={hh}>
            <h3>{job.company}</h3>
            <p>{job.summary}</p>
            <ul>
              {job.highlights.map(function(highlight) {
              <li>ewdewdewdwe</li>
              })}
            </ul>
          </div>
        );
      })}
      </div>
    </div>
    )
  }
});

ReactDOM.render(<Jobs source="app/data/data.json" />, document.querySelector("#content"));
