import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InitialScreen from './components/InitialScreen';
import About from './pages/About';
import Welcome from './pages/Welcome';
import Work from './pages/Work';
import Contact from './pages/Contact';
import DarkTheme from './pages/DarkTheme';
import NotFound from './pages/NotFound';
import Stand from './pages/Stand';
import Talent from './pages/Talent';
import Watercolor from './pages/Watercolor';
import WebsiteDesign from './pages/WebsiteDesign';
import TalentApp from './pages/TalentApp';

class App extends Component {

  state = {
    ifFirstScreen: true
  }

  onClick = () => {
    this.setState({
      ifFirstScreen: false
    });
  }

  render() {
    return (
      <Router>
        {/* {this.state.ifFirstScreen && <InitialScreen onClick={() => { this.onClick() }}/>} */}
        <Welcome onClickSubPage={() => { this.onClick() }}/>
        <Switch>
            <Route path="/" exact component={InitialScreen}/>
            <Route path="/work" component={Work}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/dark-theme" component={DarkTheme}/>
            <Route path="/conference-stand" component={Stand}/>
            <Route path="/tellyo-talent-mobile-app" component={Talent}/>
            <Route path="/talent-app-presentation" component={TalentApp}/>
            <Route path="/watercolor-portraits" component={Watercolor}/>
            <Route path="/website-design" component={WebsiteDesign}/>
            <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
