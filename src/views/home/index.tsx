import React from 'react';
import useSWR from 'swr';
import fetcher from '../../config/request';

const Home = () => {

    const { data, error } = useSWR('/', fetcher);
    console.log(data);

    return (
        <div>这是主页</div>
    );
};

export default Home;
