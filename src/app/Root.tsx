import { SpeedInsights } from '@vercel/speed-insights/react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Outlet />
            <SpeedInsights />
        </>
    );
}

export default Root;