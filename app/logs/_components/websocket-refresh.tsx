"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { WS_URL } from '@/config/api';

export default function WebSocketRefresh() {
    const router = useRouter();

    useEffect(() => {
        const socket = new WebSocket(`${WS_URL}/ws/test123`);

        socket.onopen = (event) => {
            console.log('WebSocket is open now.');
        };

        socket.onclose = (event) => {
            console.log('WebSocket is closed now.');
        };

        socket.onerror = (event) => {
            console.error('WebSocket error observed:', event);
        };

        socket.onmessage = (event) => {
            // console.log(event, event.data);
            if (event.data === "NEW_LOGS") {
                router.refresh();
            }
        };

        return () => {
            socket.close();
        };
    }, [router]);

    return <></>;
};
