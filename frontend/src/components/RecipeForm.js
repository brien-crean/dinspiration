import React, { Component } from "react";
import styled from "styled-components";
import axios from 'axios';
import { ROOT_URL } from '../lib/config';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
`;

const SubmitButton = styled.input`
  width: 100px;
`;

const TagList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const TextArea = styled.textarea`
  height: 100px;
  width: 100%;
`;

const Label = styled.label`
  align-self: flex-start;
  padding: 10px 0 10px 0;
`;

const Input = styled.input`
  height: 20px;
  width: 100%;
`;

class RecipeForm extends Component {
  handleSubmit = async event => {
    event.preventDefault(event);

    const formData = new FormData(event.target);
    try {
      const result = await axios({
        method: "post",
        url: `${ROOT_URL}/add`,
        data: formData
      });
      console.log(result);
    } catch (err) {
      console.log(err)
    }
  };
  render() {
    const choices = ["gluten-free", "quick-and-easy", "healthy"];
    return (
      <form onSubmit={this.handleSubmit} encType="multipart/form-data">
        <StyledForm>
          <Label htmlFor="image">Image</Label>
          <Input type="file" name="photo" id="photo" accept="image/jpeg, image/png, image/gif" />
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
          />
          <Label htmlFor="description">Description</Label>
          <TextArea
            id="description"
            name="description"
          />
          <TagList>
            {choices.map(choice => {
              return (
                <li key={choice}>
                  <input
                    type="checkbox"
                    id={choice}
                    value={choice}
                    name="tags"
                  />
                  <label htmlFor={choice}>{choice}</label>
                </li>
              );
            })}
          </TagList>
          <SubmitButton type="submit" value="SAVE" />
        </StyledForm>
      </form>
    )
  }
}

export default RecipeForm;