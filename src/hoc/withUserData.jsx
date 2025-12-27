import { useEffect, useState } from 'react'

const withData = (WrapperComponent) => {

    return function (props) {

        const { url, title } = props;
        console.log("title", title);
        const [data, setData] = useState(null)

        useEffect(() => {
            fetch(url).then((res) => res.json()).then((data) => setData(data));
        }, [url])

        return <WrapperComponent {...props} data={data} />

    }

}

export default withData