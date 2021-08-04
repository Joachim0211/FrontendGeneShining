import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import RNAseq from "../pictures/RNAseq.jpeg";
import './Dropzone.css';


const axios = require('axios');

const submitURL = "http://localhost:3001/submit-gene-data";

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '100px',
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
        if (acceptedFiles.length > 0) {
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
        }else{
            alert("You did not drop or select a valid .txt-file")
        }
    }

    return (
        <div className="container">
            <div class="col s12">
                <h2 class="header">How to use Gene Shining</h2>
                <div class="card horizontal">
                    <div >
                        <img className="card-image" src={RNAseq} alt="DNA" />
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p>For running a comparative analyses to the gene expression reaction of various diseases you need to upload a tab-delimited txt-file. The file should at least contain the technical annotation of the gene and the rpkm/fpkm-values. This should be column one and two. If possible, a functional annotation (line 3), a log2FoldChange value and a statistical value (FDR) can be helpful (in that order). If given, both values will be used, assuming a valid control in your analyses. If you want a copmparison to our overall control do not provide these values. Drag and drop the file in the dropzone below or chose the file from a storage device. Only files with .txt ending are accepted. You can than press the upload button which directs you to a page were the results of the analyses are displayed. The analyses can take several minutes. To learn more about the principles of the analyses go to the link below.  </p>
                        </div>
                        <div class="card-action">
                            <a href="https://pubmed.ncbi.nlm.nih.gov/32005388/" target="_blank">More about the principles analyses</a>
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
            <button className="uploadButton" onClick={uploadFiles}>Upload Files<i class="material-icons right icon">file_upload</i></button>
        </div>
    );
}

<StyledDropzone />

export default StyledDropzone;