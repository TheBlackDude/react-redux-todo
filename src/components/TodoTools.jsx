import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classNames from 'classnames';

export default React.createClass({
  mixins: [PureRenderMixin],
  getNbItemsLeft: function () {
    return this.props.nbActiveItems || 0;
  },
  isSelected: function (filter) {
    return this.props.selectedFilter === filter || false;
  },
  setSelectedClass: function (filter) {
    return classNames({'selected': this.props.filter === filter});
  },
  render: function () {
    return <footer className="footer">
      <span className="todo-count">
        <strong>{this.getNbItemsLeft()}</strong> items left
      </span>
      <ul className="filters">
        <li>
          <a href="#"
             onClick={() => this.props.changeFilter('all')}
             className={this.setSelectedClass('all')}>
             All
           </a>
        </li>
        <li>
          <a href="#"
             onClick={() => this.props.changeFilter('active')}
             className={this.setSelectedClass('active')}>
             Active
           </a>
        </li>
        <li>
          <a href="#"
             onClick={() => this.props.changeFilter('completed')}
             className={this.setSelectedClass('completed')}>
             Completed
           </a>
        </li>
      </ul>
      <button className="clear-completed"
              onClick={this.props.clearCompleted}>
        Clear completed
      </button>
    </footer>
  }
});