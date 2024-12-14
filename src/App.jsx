import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { change,getText,selectText } from './features/markdownSlice'
//react
function App() {
  const markdownText = useSelector(selectText)
  const markdownFinish =  useSelector(getText)
  const dispatch = useDispatch();
  return (
    <>
      <div id="editorWrapper" className='container py-5 '>  
        <div className="card">
          <h5 className="card-header">Editor</h5>  
          <textarea id="editor" className='card-body form-control ' rows="8" onChange={e=>dispatch(change(e.target.value))}>{markdownText}</textarea>
        </div>
      </div>
      
      <div id="previewWrapper" className='container '>
        <div className='card'>
        <h5 className='card-header'>Preview</h5>
        <div id="preview" className='card-body' dangerouslySetInnerHTML={{__html: markdownFinish}}></div>
        </div>
      </div>
    </>
  )
}

export default App
