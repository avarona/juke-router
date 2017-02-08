import React from 'react';

class Artist extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;
    selectArtist(artistId);
  }

  render () {
    const artist = this.props.artist;
    return (
      <div key={artist.id}>
        <h3>{artist.name}</h3>
        <h4>ALBUMS</h4>
        <h4>SONGS</h4>
      </div>

    );
  }
}

export default Artist;
