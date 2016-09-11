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
    var th = this;
    this.serverRequest =
      axios.get(this.props.source)
        .then(function(result) {
          th.setState({
            jobs: result.data.work
          });
        })
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    var hh = this.handleClick;
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
	                <ul>
	                    <li>{job.summary}</li>
	                </ul>
	                <p><i><small>HTML, CSS, Javascript, Jquery, Wordpress, PHP</small></i></p>
	            </div>
	          );
	        })}
				</div>
      </div>
    )
  }
});

ReactDOM.render(<Jobs source="app/data/data.json" />, document.querySelector("#content"));
