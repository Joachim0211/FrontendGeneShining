import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
const axios = require('axios');

const submitURL = "http://localhost:3001/submit-gene-data";

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '120px',
    borderWidth: 4,
    borderRadius: 25,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};

const rejectStyle = {
    borderColor: '#ff1744'
};

function StyledDropzone(props) {
    const {
        getRootProps,
        getInputProps,
        acceptedFiles,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({});

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    const uploadFiles = () => {
        console.log("got clicked")
        if (acceptedFiles !== null) {
            props.setLoading(true)
            console.log(acceptedFiles[0])
            let formData = new FormData();
            formData.append('gene-data', acceptedFiles[0]);

            axios.post(
                submitURL,
                formData,
                {
                    headers: {
                        "Content-type": "multipart/form-data",
                    },
                }
            )
                .then(res => {
                    console.log(res.data);
                    props.setLoading(false)
                    props.setAnalysisData(res.data)
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    return (
        <div className="container">
              <div class="col s12">
    <h2 class="header">How to use Gene Shining</h2>
    <div class="card horizontal">
      <div class="card-image">
        <img src="https://innerbody.imgix.net/animated-DNA-2.gif" alt="blabla"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <ul className="list-group mt-2">
                {acceptedFiles.length > 0 && acceptedFiles.map((acceptedFile, index) => (
                    <li key={index} className="list-group-item list-group-item-success">
                        {acceptedFile.name}
                    </li>
                ))}
            </ul>
            <button className="file-upload-btn" onClick={uploadFiles}>Upload Files<i class="material-icons right">file_upload</i></button>
        </div>
    );
}

<StyledDropzone />

export default StyledDropzone;