// For testing route to MovieDetails, remove later

function Test(props) {

    const id = props.match.params.id;

    return (
        <h1>Testing Movie Details {id}</h1>
    )
}

export default Test;