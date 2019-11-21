/* import React from 'react'

const Brain = () => {

  const [fairs, setFairs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/projects")
        .then(resp => resp.json())
        .then(data => {
            setFairs(data);
            setLoading(false);
        });
}, []);

let content = "";

    if (loading) {
        content = <div>Loading...</div>;
    } else {
        content = (
            <>
                <section className="container">
                    <h1>Career fairs</h1>
                </section>
        </> )
    }

return (
  <>
  </>
)
}

export default Brain */