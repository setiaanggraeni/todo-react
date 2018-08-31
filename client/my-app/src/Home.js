import React from 'react'

class Home extends React.Component{
  constructor (props) {
    super (props)
    this.state = {
      value: '',
      todoName: ['Makan'],
      updateStatus: false,
      doing: [],
      done: []
    };

    this.inputName = this.inputName.bind(this)
    this.post = this.post.bind(this)
    this.status = this.status.bind(this)
  }

  inputName (event) {
    this.setState({value: event.target.value})
  }

  post (event) {
    let todos = this.state.todoName
    todos.push(this.state.value)
    this.setState({todoName : todos})
    event.preventDefault()
    this.setState({value: ''})
  }

  status (event) {
    this.setState({updateStatus: event.target.checked})
    console.log('=====',this.state.updateStatus)
  }

  deleteTodo (index) {
    let updateDone = this.state.done
    updateDone.splice(index,1)
    this.setState({done: updateDone})
  }

  addDoing (todo, index) {
    let toDoing = this.state.doing
    toDoing.push(todo)
    let updateTodo = this.state.todoName
    updateTodo.splice(index, 1)
    this.setState({doing: toDoing, todoName: updateTodo})
    console.log(this.state.doing)
  }

  addDone (inDoing, index) {
    let toDone = this.state.done
    toDone.push(inDoing)
    let updateDoing = this.state.doing
    updateDoing.splice(index, 1)
    this.setState({done: toDone, doing: updateDoing})
    console.log(this.state.done)
  }

  render () {
    var labelStyle={
      'text-decoration': this.state.updateStatus?'line-through':''
    };
    return (
      <div>
        <form onSubmit={this.post}>
          <label>
          <input type="text" class="form-control" value={this.state.value} onChange={this.inputName}></input>
          </label>
          <input type="submit" value="Post"></input>
        </form>

        <div class="row">
          <div class="col-md-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <td>
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" onClick={this.status}></input>
                  <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </td>
              </tbody>
            </table>
          </div>

          <div class="col-md-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Todo</th>
                </tr>
              </thead>
              <tbody>
              {this.state.todoName.map((todo, index) => {
                return <tr key={index}>
                  <td>
                    {todo} || <i class="fas fa-arrow-circle-right" onClick={() => {
                      this.addDoing(todo, index)
                    }}></i>
                  </td>
                  </tr>
              })}
              </tbody>
            </table>
          </div>

          <div class="col-md-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Doing</th>
                </tr>
              </thead>
              <tbody>
              {this.state.doing.map((inDoing, index) => {
                return <tr key={index}>
                  <td>
                    {inDoing} || <i class="fas fa-arrow-circle-right" onClick={() => {
                      this.addDone(inDoing, index)
                    }}></i>
                  </td>
                  </tr>
              })}
              </tbody>
            </table>
          </div>

          <div class="col-md-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Done</th>
                </tr>
              </thead>
              <tbody>
              {this.state.done.map((inDone, index) => {
                return <tr key={index}>
                  <td>
                    {inDone} || <i class="far fa-trash-alt" onClick={ () => {
                      this.deleteTodo(index)
                    }}></i>
                  </td>
                  </tr>
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default Home