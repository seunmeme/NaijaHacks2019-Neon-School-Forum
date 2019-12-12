import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
// import Autocomplete from '@celebryts/react-autocomplete-tags'

const options = [
  { key: 's', text: 'Science', value: 'science' },
  { key: 'a', text: 'Arts', value: 'arts' },
  { key: 'c', text: 'Commercial', value: 'commercial' },
]


class TopicForm extends Component {

  onChange = (value) => {
    console.log('Value received from onChange: ' + value)
  }

  render(){
    return (
    <Form>
      <Form.Input label='Topic' placeholder="Enter topic" />
      <Form.TextArea label='Context' placeholder='Add more context...' />
      <Form.Select
        fluid
        label='Category'
        options={options}
        placeholder='Category'
      />
      <Form.Input label='Label' placeholder="Add label" />
      {/* <Autocomplete
          onChange={this.handleChange}
        /> */}
      <Button type='submit'>Submit</Button>
    </Form>
  
    )
  }
}


export default TopicForm;
