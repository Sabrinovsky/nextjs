
export default function Car({car}){
  return (
    <div>
      {car.name}
    </div>
  )
}

export async function getStaticProps({params}) {
  try {
      const response = await fetch('https://api.driveslow.com.br/api/cars/'+params.id);
      const car = await response.json()
      return {
          props: {
              car,
          },
      };
  } catch (e) {
      return {
          notFound: true,
      };
  }
}

export async function getStaticPaths() {
  return {
      paths:[],
      fallback: 'blocking',
  };
}
