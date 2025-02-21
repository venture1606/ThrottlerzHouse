import React, { useEffect } from 'react';
import { clearMessage } from '../redux/reducer/commonSlicer';
import { useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

const Indication = ({ message }) => {
    const toast = useToast();
    const dispatch = useDispatch();

    useEffect(() => {
        if (message && message.message) {
            const { status, description: details, message: msg } = message;
            toast({
                title: msg,
                description: details,
                status: status,
                duration: 5000,
                isClosable: true,
            });
            dispatch(clearMessage());
        }
    }, [message, toast, dispatch]);

    return null;
};

export default Indication;
