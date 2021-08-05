import React, { useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import RNAseq from "../pictures/RNAseq.jpeg";
import './Dropzone.css';


const axios = require('axios');

const submitURL = "https://geneshining.herokuapp.com/submit-gene-data";

const baseStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    padding: '140px 20px',
    borderWidth: 3,
    borderRadius: 25,
    borderColor: '#222',
    borderStyle: 'dashed',
    backgroundColor: '#fff',
    color: '#222',
    fontSize: '20px',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    cursor: 'grab'
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
        } else {
            alert("You did not drop or select a valid .txt-file")
        }
    }

    return (
        <div className="root-dropzone">
            <h2 className="dropzone-title">How to use Gene Shining</h2>
            <div className="dropzone-flex">


                {/* <div className="dropzone-exaplanation-card">
                        <img className="card-image" src={RNAseq} alt="DNA" width="300" height="300" style={{opacity: 1, borderRadius: 12, boxShadow: '2px 10px 10px rgba(0,0,0,0.3)'}}/>
                    </div> */}
                <div class="card-content howto-card-content">
                    <p className="howto-para">
                    - For running a comparative analyses to the gene expression reaction of various diseases you need to upload a tab-delimited txt-file. 
                    <br />
                    - The file should at least contain the technical annotation of the gene and the rpkm/fpkm-values. This should be column one and two. 
                    <br />
                    - If possible, a functional annotation (line 3), a log2FoldChange value and a statistical value (FDR) can be helpful (in that order). 
                    <br />
                    - If given, both values will be used, assuming a valid control in your analyses. 
                    <br />
                    - If you want a copmparison to our overall control do not provide these values. 
                    <br />
                    - Drag and drop the file in the dropzone below or chose the file from a storage device. 
                    <br />
                    - <strong>Only files with .txt ending are accepted.</strong>
                    <br />
                    - You can than press the upload button  which directs you to a page were the results of the analyses are displayed. 
                    <br />
                    - The analyses can take several minutes. To learn more about the principles of the analyses go to the link below. &#8595; </p>
                    <br />
                    <div class="card-action card-action-links">
                        <a href="https://pubmed.ncbi.nlm.nih.gov/32005388/" target="_blank">More about the principles analyses</a>
                    </div>

                </div>
                <div {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>

                </div>
                
            </div>
            <ul className="list-group" style={{fontSize: 18, textTransform: 'uppercase', fontWeight: 'bold'}}>
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