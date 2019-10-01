import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTodos, deleteTodo } from "../actions";
import { Todo, StoreState } from "../interfaces";

interface AppProps {
  todos: Todo[];
  // fetchTodos: typeof fetchTodos; не будет работать (видео №275 курса)
  // замена на Function - костыль до лучших времён
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  isFetching: boolean;
}

export class _App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      isFetching: false
    };
  }

  /* componentDidUpdate(prevProps: AppProps) {
    if (prevProps.todos.length === 0 && this.props.todos.length !== 0) {
      this.setState({
        isFetching: false
      });
    }
  }

  onButtonClick = () => {
    this.props.fetchTodos();
    this.setState({
      isFetching: true
    });
  }; */

  // альтернатива двум методам выше - в одном ниже
  // без обработки возможных ошибок
  onButtonClick = async () => {
    this.setState({
      isFetching: true
    })
    await this.props.fetchTodos();
    this.setState({
      isFetching: false
    })
  };

  onDelete = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): JSX.Element[] {
    return this.props.todos.map(
      ({ id, title }: Todo): JSX.Element => (
        <div key={id} onClick={() => this.onDelete(id)}>
          {title}
        </div>
      )
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.isFetching ? <p>Loading...</p> : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): StoreState => ({
  todos
});

export const App = connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(_App);
