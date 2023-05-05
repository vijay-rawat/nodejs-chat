import {PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
    
  return ( 
  <div style = {{height : '100vh'}}>
    <PrettyChatWindow 
    projectId="dee59c00-53b1-419d-b56c-73be16296e0a"
    username={props.user.username}
    secret={props.user.secret}
    style={{height:'100%'}}
    />
   
  </div>
  )
};

export default ChatsPage;