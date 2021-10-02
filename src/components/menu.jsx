import React from 'react';
import { Container, Content, Header } from 'rsuite';
import ListSnippets from './ListSnippets'
import AddSnippet from './AddSnippet'
import 'rsuite/dist/rsuite.min.css'
import { fetch, add } from '../services.js';

const ORIGIN_GMAIL = "https://mail.google.com";


export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    const data = fetch();
    this.state = {
      snippets: data,
    };
  }

  handleIncomingMessage = (e) => {
    if(e.origin !== ORIGIN_GMAIL) return;
    add({ 
        'text': e.data.text,
        'title': e.data.title
    });
    const snippets = fetch();
    this.setState({snippets});
}
  
  componentDidMount() {
    window.addEventListener('message', this.handleIncomingMessage);
  }
  
   componentWillUnmount() {
    window.removeEventListener('click', this.handleIncomingMessage);
  }
  //remove event listener

    render(){ 
        return(
            <div >
                <Container>
                <Header>
                    <AddSnippet></AddSnippet>
                </Header>
                <Content>
                    <ListSnippets snippets={this.state.snippets}></ListSnippets>
                </Content>
                </Container>
            </div>
        )
    }
}