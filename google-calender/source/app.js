// First, I need React itself, and React-DOM (which lets React interact with HTML).
import React from 'react'
import { render } from 'react-dom';
// Then here is App, which is just like a React.Component (a blueprint for a component), but additionally: it’s state consists of a string “React” and it renders a div element with a string “Hello ” plus a string from the state
import moment from 'moment';

import BigCalendar from 'react-big-calendar';
// a localizer for BigCalender
BigCalendar.momentLocalizer(moment)
import { getEvents } from './gcal'

// This weird syntax is just a shorthand way of specifying loaders.
require('style-loader!css-loader!react-big-calendar/lib/css/react-big-calendar.css')

class App extends React.Component {
    constructor () {
      super()
      this.state = {
        events: []
      }
    }
    componentDidMount () {
        getEvents((events) => {
          this.setState({events})
        })
      }
    render() {
        return (
            // Remember React components in jsx look like HTML tags
            <BigCalendar 
              style={{height: '420px'}}
              events={[]}
            />
        )
    }
}
// Finally, please render this component inside of element with id "root"
render(<App />, document.getElementById('root')) 