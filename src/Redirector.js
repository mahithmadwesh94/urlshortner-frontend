/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function Redirector(props) {
    console.log(props.match.params.urlCode)

    useEffect(() => {
        axios.get(`https://mahith-url-shortner.herokuapp.com/${props.match.params.urlCode}`)
            .then(response => window.location.replace(response.data)).catch(err => {
                toast.error('Wrong URL', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
                window.location.replace(err.response.data.split('Found: ')[1]);
            })
    }, [])

    return (

        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />


        </div>
    )
}

export default Redirector
