import React from 'react';
import { List} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';


let replaceBodyText = (item) =>{
    window.parent.postMessage(item.text, '*');
}

export default class ListSnippets extends React.Component {
    render() {
        return(
            <div>
              <br/>
              <span style={{'fontWeight': 'bold', color: '#999', display: 'flex', 'justifyContent': 'center'}}>
                  Saved Snippets
              </span>
              <br/>
              <List hover bordered>
                  {this.props.snippets.map((item, index) => (
                  <List.Item style={{cursor: 'pointer'}} key={index} index={index} onClick={() => {replaceBodyText(item)}}>
                      {item.title}
                  </List.Item>
                  ))}
              </List>
            </div>
          )
    }
}