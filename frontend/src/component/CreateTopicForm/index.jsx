import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { Button, Form, Message } from 'semantic-ui-react'
import { topicValidator } from '../../utils/validator'
import { createTopic } from '../../store/actions'
// import './CreateTopicForm.scss'

// import Autocomplete from '@celebryts/react-autocomplete-tags'

const options = [
  { key: 's', text: 'Science', value: 'science' },
  { key: 'a', text: 'Arts', value: 'arts' },
  { key: 'c', text: 'Commercial', value: 'commercial' },
]


class TopicForm extends Component {

  state = {
    topic : {
      title: '',
      content: '',
      category: '',
      label: ''
    },
    error: {}
  }

  // onChange = (value) => {
  //   console.log('Value received from onChange: ' + value)
  // }

  handleChange = (e, data ) => {
    const { topic } = this.state;
    const { name, value } = data;
    topic[name] = value;
    this.setState({ topic });
  }

  
  handleSubmit = (e) => {
    e.preventDefault();
    const { topic } = this.state;
    const { createTopic } = this.props;
    this.setState(() => ({error: {}}))
    const error = topicValidator(topic);
    if (Object.keys(error).length) {
      this.setState(() => ({ error }));
    } 
    else {
      createTopic(topic, () => {
        if(this.props.topics.isCreated){
          this.props.closeModal();
          this.props.history.push(`/topic/${this.props.topics.data.createdTopic.id}`)
        }
      });
    }
  }

  render(){
    const { error } = this.state;
    const {loading, errorMessage, isCreated} = this.props.topics
    return (
    <Form
      onSubmit={this.handleSubmit}
      loading={loading && true}
      error={!isCreated && true}
    >
      {errorMessage && <Message
        error
        header='Create Topic Error'
        content={errorMessage}
      />}
      <Form.Input
        name="title"
        label='Title'
        placeholder="Enter title"
        onChange={this.handleChange}
        error={error.hasOwnProperty('title') ? {
          content: error.title,
          pointing: 'below',
        } : false }
      />
      <Form.TextArea
        name="content"
        label='Context'
        placeholder='Add more context...'
        onChange={this.handleChange}
        error={error.hasOwnProperty('content') ? {
          content: error.content,
          pointing: 'below',
        } : false }
      />
      <Form.Select
        fluid
        name="category"
        label='Category'
        options={options}
        placeholder='Category'
        onChange={this.handleChange}
        error={error.hasOwnProperty('category') ? {
          content: error.category,
          pointing: 'below',
        } : false }
      />
      <Form.Input
        name="label"
        label='Label'
        placeholder="Add label"
        onChange={this.handleChange}
      />
      {/* <Autocomplete
          onChange={this.handleChange}
        /> */}
      <Button type='submit' className="btn" onSubmit={this.handleSubmit}>Submit</Button>
    </Form>
  
    )
  }
}

const mapStateToProps = state => {
  const {topics} = state;
  return {topics}
}

export default connect(mapStateToProps, {createTopic})(withRouter(TopicForm));
