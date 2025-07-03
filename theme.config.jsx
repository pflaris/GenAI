import logo from './src/assets/logo-ulp-semBox-verdePadrão.svg'
import Image from 'next/image'


export default {
  title: 'GenAi',
  logo: <span className='logo'> <Image src={logo} className='logo-img'></Image> <span>GenAi</span></span>,
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
        <title>GenAi</title>
        <meta name="description" content="GenAi" />
        <link rel="shortcut icon" href={favicon} type="image/svg+xml" />
      </>
    );
  }
}