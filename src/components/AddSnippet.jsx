import React from 'react';
import { AddOutline, } from '@rsuite/icons';
import CheckIcon from '@rsuite/icons/Check';
import CloseIcon from '@rsuite/icons/Close';
import { IconButton, ButtonGroup, Input, InputGroup} from 'rsuite';
const TYPE_NEW_MESSAGE = 'CREATE_NEW_MESSAGE';


export default class AddSnippet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showInput: false,
        snippetName: ''
      };
    }
    createNewDraft = (e) => {
        window.parent.postMessage({
            'type': TYPE_NEW_MESSAGE,
            'title': this.state.snippetName
        }, '*');
        this.setState({showInput: false});
    }

    handleChangeVision = (e) =>{
        const status = this.state.showInput;
        this.setState({showInput: !status});
    }

    handleInputChange = (e) => {
        this.setState({snippetName: e});
    }

    render(){
        // default button to add
        let elements = <ButtonGroup justified>
            <IconButton onClick={this.handleChangeVision} icon={<AddOutline />}>Make this draft a Snippet</IconButton>
        </ButtonGroup>

        // render input option
        if(this.state.showInput){
            elements = <InputGroup >
              <Input value={this.state.snippetName} onChange={this.handleInputChange} placeholder="Snippet title" />
              <InputGroup.Button onClick={this.createNewDraft}>
                <CheckIcon />
              </InputGroup.Button>
              <InputGroup.Button onClick={this.handleChangeVision}>
                <CloseIcon />
              </InputGroup.Button>
            </InputGroup>
        }
        return(
            elements
        )
    }
}