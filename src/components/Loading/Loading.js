import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '300px' }} className='d-flex justify-content-center align-items-center'>
            <Spinner variant='dark' animation="border" />
        </div>
    );
};

export default Loading;