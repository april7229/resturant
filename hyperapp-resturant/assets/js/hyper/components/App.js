import { h, app } from 'hyperapp'
import Header from './header.js'

export default function App({state, actions}) {
  return (
    <div class={'app'}>
      <Header state={state} actions={actions}/>
      
    </div>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
