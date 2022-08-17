import React, { Component } from 'react';
import ReactPlayer from 'react-player'

import GameAPI from '../GameAPI';
import TextMenu from '../common/TextMenu'
import Information from './Information';
import Status from './Status';
import Campaign from './Campaign';
import FAQ from './FAQ';
import Updates from './Updates';
import Comments from './Comments';
import TokenHolders from './TokenHolders';
import '../App.css';
import './GameDetail.css'


const menus = [
	{
		id: 1,
		title: "Campaign"
  },
  {
		id: 2,
		title: "FAQ"
  },
  {
		id: 3,
		title: "Updates"
  },
  {
		id: 4,
		title: "Comments"
  },
  {
		id: 5,
		title: ""
	},
]

const menusCompleted = [
	{
		id: 1,
		title: "Campaign"
  },
  {
		id: 2,
		title: "FAQ"
  },
  {
		id: 3,
		title: "Updates"
  },
  {
		id: 4,
		title: "Comments"
  },
  {
		id: 5,
		title: "Token Holders"
	},
]

const headerHeight = 66;


export class GameDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeMenuId: 1
    };

    this.handleScroll = this.handleScroll.bind(this);

    // query
    this.gameData = GameAPI.find(game => game.slug === this.props.match.params.slug);
    console.log(this.gameData);
  }

  handleScroll() {
    this.setState({scroll: window.scrollY});
  }

  handleMenuChanged = (menuId) => {
		if(this.state.activeMenuId !== menuId) {
			this.setState({activeMenuId: menuId});
		}
	}

  componentDidMount() {
    window.scrollTo(0, 0);

    // body color
    document.body.classList.add("background-white");

    // navigation
    const el = document.querySelector('nav');
    this.setState({top: el.offsetTop, height: el.offsetHeight});
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.body.classList.remove("background-white");
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top + 30 ? 
        document.body.style.paddingTop = `${this.state.height - headerHeight}px` :
        document.body.style.paddingTop = 0;
  }

  renderNavFundingMenus() {
    return (
      <div className="horizontal-direction">
        <div className="gd-fundButton vertical-center">
          Back this project
        </div>
        <div className="gd-wantButton horizontal-direction vertical-center">
          <img className="vertical-center" src="/mineral-pages/images/IconWantOn.svg" />
          <p className="vertical-center">Remind me</p>
        </div>
      </div>
    );
  }

  renderBottom(menuId) {
    switch(menuId) {
      case 1: return <Campaign item={this.gameData} />;
      case 2: return <FAQ item={this.gameData} />;
      case 3: return <Updates item={this.gameData} />;
      case 4: return <Comments item={this.gameData} />;
      case 5: return <TokenHolders item={this.gameData} />;
      default: return <Campaign item={this.gameData} />;
    }
  }

  render() {
    let fundingCompleted = this.gameData.daysToGo == 0 ? true : false;

    return (
      <div className="gameDetail">
        <div className="banner">
          <img src={this.gameData.bannerUrl} />
        </div>
        <div className="container">        
          <div className="video">
            <ReactPlayer 
              url={this.gameData.videoUrl}
              width='940px'
              height='526px' playing controls />
          </div>

          <div className="infoGroup" >
            <div className="infoLeft" >
              <Information item={this.gameData} />
            </div>
            <div className="infoRight">
              <Status item={this.gameData} />
              <div className="warning">
                <p>All or nothing. This project will only be funded if it reaches its goal by Sun, March 31 2019 12:00 PM PDT.</p>
              </div>
            </div>
          </div>

          <nav className={this.state.scroll > this.state.top + 30 ? "fixed-nav" : ""}>
            <div className="divider" />
            <div className="horizontal-direction">
              <TextMenu
						    menus={fundingCompleted ? menusCompleted : menus }
						    onItemClick={this.handleMenuChanged}
						    activeItemId={this.state.activeMenuId} 
              />
              {fundingCompleted ? "" : this.renderNavFundingMenus()}
            </div>
            <div className="divider" />
          </nav>

          {this.renderBottom(this.state.activeMenuId)}
        </div>
      </div>
    );
  }
}

export default GameDetail;
