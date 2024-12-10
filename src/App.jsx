import './App.css'
import { ReactReduxContext } from 'react-redux';
import { createStoreHook } from 'react-redux';

//redux
const CHANGE ='CHANGE';
const changePreview = (text)=>{
  return {
    type: CHANGE,
    text: text
  }
};
const changeReducer = (state=[],action)=>{
  switch(action.type){
    case CHANGE:
      return [...state,
        action.text
      ]
    default: return state;      
  }
}
const store = createStoreHook(changeReducer);

//react
const Provider = ReactReduxContext.Provider;
const connect = ReactReduxContext.connect;
function App() {
  return (
    <>
      <div id="editorWrapper">  
        <textarea id="editor"></textarea>
      </div>
      <div id="previewWrapper">
        <div id="preview"></div>
      </div>
    </>
  )
}

export default App
