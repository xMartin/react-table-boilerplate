(function (data) {
  'use strict';

  var AppContainer = React.createClass({
    getInitialState: function () {
      return {
        data: data
      };
    },

    render: function () {
      return React.createElement(App, {
        data: this.state.data
      });
    }
  });

  var App = React.createClass({
    render: function () {
      var data = this.props.data;

      return React.createElement('div', {className: 'app-content'},
        React.createElement('table', null,
          React.createElement('tbody', null,
            data.map(function (row) {
              return React.createElement('tr', null,
                row.map(function (cell) {
                  return React.createElement('td', null, cell);
                })
              );
            })
          )
        )
      );
    }
  });

  ReactDOM.render(React.createElement(AppContainer), document.getElementById('app'));

})(window.data);
