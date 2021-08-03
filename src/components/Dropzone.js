import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
const axios = require('axios');

const submitURL = "http://localhost:3001/submit-gene-data";

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
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
            <button className="file-upload-btn" onClick={uploadFiles}>Upload Files</button>
        </div>
    );
}

<StyledDropzone />

export default StyledDropzone;