import logo from './src/assets/logo-ulp-semBox-verdePadrão.svg'
import Image from 'next/image'


export default {
  title: 'Estrada de Ideias',
  logo: <span className='logo'> <Image src={logo} className='logo-img'></Image> <span className='xl'>Estrada de Ideias</span></span>,
  color: {
    hue: 160,
  },
  project: {
    link: false
  },
  editLink: {
    component: null
  },
  feedback: {
    content: null
  },
  navigation: false,
  footer: {
    component: false
  },
  toc: {
    title: "Nesta pagina"
  },
  head: () => {
    const favicon = "/favicon.svg";
    return (
      <>
        <title>Estrada de Ideias</title>
        <meta name="description" content="Estrada de Ideias" />
        <link rel="shortcut icon" href={favicon} type="image/svg+xml" />
      </>
    );
  }
}
