// [color].js
// import the colors array
import colors from '../data/colors.json'

export async function getStaticPaths() {
  // loop through the colors array
  const paths = colors.map(color => ({
    // return an object with params.color set to the color's name
    params: { color: color.name }
  }))

  // Paths will look like this:
  // [
  // { params: { color: 'Marsala' } },
  // { params: { color: 'Illuminating'} }
  // ...
  // ]
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // find the info for just one color
    const color = colors.find(color => color.name === params.color)
    // return it in the necessary format.
    return { props: { color } }
}

// This is not really working because the API does not exit.
// export async function getServerSideProps({ params }) {
//     // Make a request to get data about the color via our API
//     const res = await fetch(`http://www.color-api.com/${params.color}`)
//     const color = await fetch.json()
//     // return the data as props that will be passed to the Color component
//     return { props: { color } }
// }

export default function Color({ color }) {
    return
        <div className='color-page' style={{ backgroundColor: color.hex }}>
            <h1>{color.name}</h1>
        </div>
}