import React, { PropTypes }   from 'react';
import { Link }             from 'react-router';
import { connect }          from 'react-redux';
import NewGameButton        from '../../components/game/new_game_button';
import Logo                 from '../../components/common/logo';
import { setDocumentTitle } from '../../utils';

class GameErrorView extends React.Component {
  componentDidMount() {
    setDocumentTitle('Whoops, game error!');
  }

  render() {
    const { lobbyChannel, dispatch } = this.props;

    return (
      <div id="not_found" className="view-container">
        <Logo/>
        <h1>Whoops, game error!</h1>
        <NewGameButton lobbyChannel={lobbyChannel} dispatch={dispatch}>Start hacking!</NewGameButton>
        <p><Link to="/">Back to home</Link></p>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { ...state.session, ...state.game }
);

export default connect(mapStateToProps)(GameErrorView);
