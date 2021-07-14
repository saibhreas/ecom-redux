# ecom-redux
refactoring of react site to redux

First run failed.

*src\components\CategoryMenu\index.js
  Line 27:31:  'useState' is not defined  no-undef
 going in circle with no resolution.

 WEre only to do the TODOs and get it working.  Did TODOS, not working Documenttaiton sends me to
  * Using Hooks in a React Redux App#
As with connect(), you should start by wrapping your entire application in a <Provider> component to make the store available throughout the component tree:

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
From there, you may import any of the listed React Redux hooks APIs and use them within your function components.

useSelector()#
const result: any = useSelector(selector: Function, equalityFn?: Function) 