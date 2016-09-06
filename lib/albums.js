import React from 'react'
import {Link} from 'react-router'


export default React.createClass({
  getDefaultProps() {
     return {
      albums: [
        {
          album_title: "Blue",
          id: 0,
          images: [
            {
              img_src: "blue1.jpeg",
              image_title: "bee on blue"
            },{
              img_src: "blue2.jpeg",
              image_title: "blue smoke"
            },{
              img_src: "blue3.jpeg",
              image_title: "boy with saxaphone on blue wall"
            }
          ]
        },
        {
          album_title: "Green",
          id: 1,
          images: [
            {
              img_src: "green1.jpeg",
              image_title: "Frog"
            },{
              img_src: "green2.jpeg",
              image_title: "Green macaron"
            },{
              img_src: "green3.jpeg",
              image_title: "Plants on apartment"
            }
          ]
        },
        {
          album_title: "Pink",
          id: 2,
          images: [
            {
              img_src: "pink1.jpeg",
              image_title: "Pink smoothie"
            },{
              img_src: "pink2.jpeg",
              image_title: "Pink hair"
            },{
              img_src: "pink3.jpeg",
              image_title: "Pink clouds"
            }
          ]
        },
        {
          album_title: "Purple",
          id: 3,
          images: [
            {
              img_src: "purple1.jpeg",
              image_title: "Purple concert"
            },{
              img_src: "purple2.jpeg",
              image_title: "Purple and red flower"
            },{
              img_src: "purple3.jpeg",
              image_title: "Purple bike"
            }
          ]
        },
        {
          album_title: "Red",
          id: 4,
          images: [
            {
              img_src: "red1.jpeg",
              image_title: "Red canyon"
            },{
              img_src: "red2.jpeg",
              image_title: "Red flowers"
            },{
              img_src: "red3.jpeg",
              image_title: "Red smoke"
            }
          ]
        },
        {
          album_title: "Yellow",
          id: 5,
          images: [
            {
              img_src: "yellow1.jpeg",
              image_title: "Yellow trim"
            },{
              img_src: "yellow2.jpeg",
              image_title: "Yellow flowers with bee"
            },{
              img_src: "yellow3.jpeg",
              image_title: "Yellow flowers in field"
            }
          ]
        }
      ]
    }
  },

  render() {
    return (
      <div>
        <section className="albums__links--list">
          {this.props.albums.map(function(album, i){
            return <h2 key={i}  className="albums__links">
              <Link className="link" id={album.id} onClick={this.onHandleClickChangeAlbum} to={`/albums/${album.album_name}`}>{album.album_name}
              </Link>
            </h2>
          },this)}
        </section>
        <IndividualAlbum album={this.state.currentAlbum}/>
      </div>
    )
  }
})
