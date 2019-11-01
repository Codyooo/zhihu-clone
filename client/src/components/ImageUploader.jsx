import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    form{
        input[type="file"] {
            display: none;
        }

        .custom-file-upload{
            border:1px solid #ccc;
            display:inline-block;
            padding:6px 12px;
            cursor: pointer;
        }
        img{
            width:160px;
            height:160;
        }
    }
`

const ImageUploader = () => {
    const handleFileChange = (e) => {
        console.log('fileChange', e);
    }


    return (
        <Wrapper>
            <form action="/upload" method="post" encType="multipart/form-data">
                <div>
                    <img src="https://pic1.zhimg.com/v2-7fe25b16491e24f089d767f4981f8537_xll.jpg" alt="avatar" />
                </div>
                <label htmlFor="file-upload" className="custom-file-upload">
                    <input id="file-upload" type="file" name="file" onChange={handleFileChange} />
                </label>
            </form>
        </Wrapper>
    )
}

export default ImageUploader
