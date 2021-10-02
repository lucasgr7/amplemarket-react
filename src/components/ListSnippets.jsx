import React from 'react';
import { List, FlexboxGrid, IconButton} from 'rsuite';
import TrashIcon from '@rsuite/icons/Trash';
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
                        <FlexboxGrid>
                            <FlexboxGrid.Item colspan={20}>
                                {item.title}
                            </FlexboxGrid.Item>
                            <FlexboxGrid.Item colspan={4}>
                            <IconButton  color="red" appearance="subtle" icon={<TrashIcon   />} onClick={() => this.props.handleRemoveSnippet(item)}>
                            </IconButton>
                            </FlexboxGrid.Item>
                        </FlexboxGrid>
                  </List.Item>
                  ))}
              </List>
            </div>
          )
    }
}