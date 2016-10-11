import React from 'react';

class CreateNotebookPrompt extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: ""
    }
      this.update = this.update.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e){
    e.preventDefault;
    this.props.createNotebook(this.state);
    this.props.closeModal();
  }

  render() {
		return (
      <div className="notebook-form-box">
        <button
          className="notebook-close-modal"
          onClick={ this.props.closeModal }/>
  			<form onSubmit={this.handleSubmit} className="notebook-form">
          <div className="add-notebook-label">add notebook</div>

					<input type="text"
            placeholder="Title your notebook"
						value={this.state.title}
						onChange={this.update("title")}
						className="notebook-title-input" />

          <input type="text"
            placeholder="Add a description"
						value={this.state.description}
						onChange={this.update("description")}
						className="notebook-description-input" />

          <input className="notebook-form-submit" type="submit" value="Add Notebook" />
			</form>
    </div>
		);
	}

}

export default CreateNotebookPrompt;
