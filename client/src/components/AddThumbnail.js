import React from "react";
import slug from "slug";
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUpload, faTimes } from '@fortawesome/fontawesome-free-solid';

class AddThumbnail extends React.Component {
  constructor(props) {
    super(props);

    this.thumbnail = {
      container: document.createElement('div'),
      label: document.createElement('label'),
      preview: document.createElement('img')
    }

    this.edit = this.props.edit;
  }

  componentDidMount() {
    this.thumbnail.container = document.getElementsByClassName('thumbnail-preview')[0];
    this.thumbnail.label = document.getElementsByClassName('thumbnail-upload')[0];

    if (this.edit && this.props.value.set) {
      this.thumbnail.preview.setAttribute('src', this.props.value.url);
      this.thumbnail.label.style.display = "none";
      this.thumbnail.container.classList.add('has-thumbnail');
      this.thumbnail.container.appendChild(this.thumbnail.preview);
    }
  }

  setThumbnail = (e) => {
    this.edit = false;
    let file = e.target.files[0];
    let fileName = file.name.split('.');
    let fileType = fileName.pop();
    let thumbnailSlug = (slug(fileName.join(' '), { lower: true }) || file.md5) + '.' + fileType;
    let preview = window.URL.createObjectURL(file);

    this.thumbnail.preview.setAttribute('src', preview);
    this.thumbnail.preview.setAttribute('alt', file.name);
    this.thumbnail.label.style.display = "none";
    this.thumbnail.container.classList.add('has-thumbnail');
    this.thumbnail.container.appendChild(this.thumbnail.preview);

    this.props.setThumbnail({
      thumbnail: { url: `http://localhost:3001/uploads/${thumbnailSlug}`, slug: thumbnailSlug, file, name: file.name, set: true },
      _isBlocking: true
    });
  }

  deleteThumbnail = (e) => {
    e.preventDefault();
    this.edit = false;
    window.URL.revokeObjectURL(this.props.file);

    this.thumbnail.preview = document.getElementsByClassName('thumbnail-preview')[0].childNodes[1];
    this.thumbnail.label.style.display = "flex";
    this.thumbnail.container.classList.remove('has-thumbnail');
    this.thumbnail.container.removeChild(this.thumbnail.preview);
    
    this.props.setThumbnail({
      thumbnail: { url: '', slug: '', file: {}, name: '', set: false }
    });
  }
  
  render() {
    if (this.edit && this.props.value.set) {
      this.thumbnail.preview.setAttribute('src', this.props.value.url);
      this.thumbnail.label.style.display = "none";
      this.thumbnail.container.classList.add('has-thumbnail');
      this.thumbnail.container.appendChild(this.thumbnail.preview);
    }

    return (
      <div className="thumbnail">
        <label tabIndex="0" className="thumbnail-upload" htmlFor="thumbnail"><FontAwesomeIcon className="icon" icon={faUpload} />Upload Thumbnail</label>
        <input className="thumbnail-input" type="file" accept="image/*" name="thumbnail" id="thumbnail" onChange={this.setThumbnail} />
        <div className="thumbnail-preview small">
          <button className="delete" onClick={this.deleteThumbnail}><FontAwesomeIcon icon={faTimes} /></button>
        </div>
      </div>
    );
  }
}
export default AddThumbnail;