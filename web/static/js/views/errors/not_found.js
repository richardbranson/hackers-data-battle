import React, { PropTypes }   from 'react';
import { Link }             from 'react-router';
import { connect }          from 'react-redux';
import NewGameButton        from '../../components/game/new_game_button';
import Logo                 from '../../components/common/logo';
import { setDocumentTitle } from '../../utils';

class NotFoundView extends React.Component {
  componentDidMount() {
    setDocumentTitle('Yo Ho Ho, game not found!');
  }

  render() {
    const { lobbyChannel, dispatch } = this.props;

    return (
      <div id="not_found" className="view-container">
        <Logo/>
        <h1>Whoops, game not found!</h1>
        <NewGameButton lobbyChannel={lobbyChannel} dispatch={dispatch}>Start hacking!</NewGameButton>
        <p><Link to="/">Back to home</Link></p>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  { ...state.session, ...state.game }
);

export default connect(mapStateToProps)(NotFoundView);
