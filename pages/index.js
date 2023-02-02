import Head from "next/head"
import Image from "next/future/image"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

const getFaviconPath = (isDarkMode = false) => {
  return `/favicon-${isDarkMode ? "dark" : "light"}.ico`
}
export default function Home() {
  const [isActive, setActive] = useState(false)
  const [faviconHref, setFaviconHref] = useState("/favicon-light.ico")

  useEffect(() => {
    // Get current color scheme.
    const matcher = window.matchMedia("(prefers-color-scheme: light)")
    // Set favicon initially.
    setFaviconHref(getFaviconPath(matcher.matches))
    // Change favicon if the color scheme changes.
    matcher.onchange = () => setFaviconHref(getFaviconPath(matcher.matches))
  }, [faviconHref])

  const hamburgerClick = () => {
    setActive(!isActive)
  }

  function handleClick(e) {
    e.preventDefault()
    console.log("clicked")
  }

  if (typeof window !== "undefined") {
    window.onscroll = function () {
      const header = document.querySelector("header")
      const fixedNav = header.offsetTop

      if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed")
      } else {
        header.classList.remove("navbar-fixed")
      }
    }
  }

  const portfolios = [
    {
      id: 1,
      url: "/portfolio_v2/1-comfy-sloth-react-min.png",
      title: "Comfy Sloth E-commerce React",
      link: "https://react-ecommerce-alfarisi.netlify.app",
      description:
        "Comfy Sloth Web is an e-commerce website that provides buying and selling services for home furniture using ReactJS and Auth0 authentication"
    },
    {
      id: 2,
      url: "/portfolio_v2/2-natours-web.png",
      title: "Natours",
      link: "https://natours-project-alfarisi.netlify.app",
      description:
        "This is a wonderful website that will brings you to the next level. It has really nice design.The Natours web offer good features like Most Popular Tours, and many more."
    },
    {
      id: 3,
      url: "/portfolio_v2/3-Omnifood.png",
      title: "Omni Food",
      link: "https://omnifood.wowalfarisi.com",
      description:
        "A Wonderful Website that contain The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs."
    },
    {
      id: 4,
      url: "/portfolio_v2/4-mapty-app.png",
      title: "Mapty App",
      link: "https://letsrun.netlify.app",
      description:
        "This is a simple website which has features tracking your position and mark it like google maps :D"
    }
  ]

  const technologies = [
    {
      text: "TypeScript"
    },
    {
      text: "React"
    },
    {
      text: "Next.js"
    },
    {
      text: "Flask"
    },
    {
      text: "SQL"
    },
    {
      text: "GIT"
    },
    {
      text: "Restful APIs"
    }
  ]

  return (
    <>
      <Head>
        <title>Hamzah Al Farisi | Front End Engineer</title>
        <meta
          name="description"
          content="Hamzah Al Farisi is A Frontend Engineer with 2 years experience. I am currently working as a Web Developer at PT GDC Multi Sarana. I specialize in JavaScript especially in Vanilla JS and have professional experience working with Django and Flask Python Framework. Currently, I am highly passionate about learning javascript UI libraries such a ReactJS, and CSS Preprocessor like SASS/SCSS."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Frontend, Front End, Web Developer, React, Python, Next, SASS, Tailwind CSS, Bootstrap, Faris, Hamzah, Al Farisi, Hamzah Al Farisi, Alfarisi, Programmer, Developer"
        />
        <meta name="author" content="Hamzah Al Farisi" />
        <meta property="og:title" content="Frontend Engineer" />
        <meta
          property="og:description"
          content="Frontend Engineer, React, Flask, Javascript, SASS, HTML, CSS, Python"
        />
        <meta property="og:url" content="https://hamzahalfarisi.com/" />
        <meta property="og:type" content="website" />

        <link rel="icon" href={faviconHref} />
      </Head>

      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10 pt-4">
        <div className="container">
          <div className="flex items-center justify-between relative pb-2">
            <div className="h-100 w-100">
              <Link href="/">
                <a>
                  <Image
                    src={`/farisdev-logo-dark.png`}
                    alt="Hamzah Al Farisi"
                    className="w-1/2 h-100 m-auto lg:h-100 lg:w-1/2"
                    width={150}
                    height={100}
                  />
                </a>
              </Link>
            </div>
            <div className="flex items-center px-4">
              <Link href="#">
                <a
                  aria-label="navigasi"
                  title="navigasi"
                  id="hamburger"
                  name="hamburger"
                  className={`block absolute right-4 lg:hidden ${
                    isActive ? "hamburger-active" : ""
                  }`}
                  onClick={hamburgerClick}
                >
                  <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                  <span className="hamburger-line transition duration-300 ease-in-out"></span>
                  <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                </a>
              </Link>

              <nav
                id="nav-menu"
                className={`${
                  isActive ? "" : "hidden"
                } absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <Link href="/">
                      <a
                        href="/"
                        className="text-base text-dark py-2 mx-8 flex group-hover:text-secondary"
                      >
                        Beranda
                      </a>
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="#about">
                      <a className="text-base text-dark py-2 mx-8 flex group-hover:text-secondary">
                        Tentang Saya
                      </a>
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="#portfolio">
                      <a className="text-base text-dark py-2 mx-8 flex group-hover:text-secondary">
                        Portfolio
                      </a>
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="#contact">
                      <a className="text-base text-dark py-2 mx-8 flex group-hover:text-secondary">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section id="home" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full self-center px-4 lg:w-full">
              <h1 className="text-base font-semibold text-primary text-center lg:text-start md:text-xl">
                Hello Everyone 👋, I'm
                <span className="block font-bold text-dark text-5xl mt-1 text-center lg:text-start lg:text-9xl">
                  Hamzah Al Farisi
                </span>
              </h1>
              <h2 className="font-medium text-secondary text-lg mb-5 text-center lg:text-start lg:text-2xl">
                Frontend Engineer
              </h2>
              <p className="font-medium text-secondary mb-10 leading-relaxed text-center lg:text-start">
                Learning is easy and fun aren't.{" "}
                <span className="text-dark font-bold">No, it doesn't</span>
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link href="#contact">
                  <a className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover-opacity-80">
                    Contact Me
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-0 lg:right-0">
                <span className="absolute -bottom-0 -z-10 md:left-1/2 md:-translate-x-1/2 md:scale-125 lg:top-24">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#14b8a6"
                      d="M65.3,-19.6C74.9,8.1,66,43.5,43.3,60.2C20.5,76.9,-16.3,75,-41.3,56.8C-66.2,38.7,-79.3,4.3,-70.5,-22.5C-61.6,-49.3,-30.8,-68.6,-1.5,-68.1C27.9,-67.6,55.8,-47.4,65.3,-19.6Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10 lg:w-1/2">
              <h2 className="font-bold uppercase text-primary text-lg">About me</h2>
              <h3 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl">
                Frontend Engineer
              </h3>
              <p className="font-medium text-base text-secondary max-w-xl lg:text-lg">
                As a skilled front-end engineer with 2 years of experience, I am excited to bring my
                expertise in technologies such as TypeScript, React, Next.js, SQL, Flask, WordPress,
                WooCommerce, and Tailwind CSS to any organization looking to take their digital
                presence to the next level. My ability to create visually appealing and
                user-friendly web applications. Let's create something amazing together!
              </p>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <h3 className="font-semibold text-dark text-2xl mb-4 lg:pt-10">Let's be friends</h3>
              <p className="font-medium text-base text-secondary mb-6 lg:text-lg">
                I'd love if you reached out to me. Even if it's just to say "Hey!". Don't hesitate!
                Drop me a line and I’ll get back to you ASAP!
              </p>
              <div className="flex items-center">
                <Link href="https://www.youtube.com/channel/UCVJgYCbAyy4ZFOlGQfKpKrg">
                  <a className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                    <svg
                      role="img"
                      width="20"
                      className="fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>YouTube</title>
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </Link>
                <Link href="https://instagram.com/wow_alfarisi">
                  <a className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                    <svg
                      role="img"
                      width="20"
                      className="fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Instagram</title>
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                </Link>
                <Link href="https://twitter.com/wow_alfarisi">
                  <a className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                    <svg
                      role="img"
                      width="20"
                      className="fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Twitter</title>
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                </Link>
                <Link href="https://linkedin.com/hamzah-al-farisi">
                  <a className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                    <svg
                      role="img"
                      width="20"
                      className="fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </Link>
                <Link href="mailto:fariez8@gmail.com">
                  <a className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                    <svg
                      role="img"
                      width="20"
                      className="fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Gmail</title>
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Latest Projects
              </h2>
              <p className="font-medium text-md text-slate-700 md:text-lg">
                These are some of my recent projects
              </p>
            </div>
          </div>

          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            {portfolios.map((el) => {
              return (
                <div className="mb-12 p-4 md:w-1/2" key={el.id}>
                  <div className="project-img">
                    <div className="rounded-md shadow-md overflow-hidden">
                      <Link href={el.link} key={el.id}>
                        <a>
                          <Image
                            src={el.url}
                            alt={el.title}
                            className="h-full lg:h-[280px] w-full object-cover"
                            placeholder={el.title}
                            width={600}
                            height={300}
                            quality={100}
                            priority
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <Link href={el.link} key={el.id}>
                    <a>
                      <h3 className="font-semibold text-xl text-dark mt-5">{el.title}</h3>
                    </a>
                  </Link>

                  <p className="font-medium text-base text-slate-700">{el.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="clients" className="pt-36 pb-32 bg-slate-700">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <h4 className="font-semibold text-2xl text-gray-100 mb-2">Technology Stack</h4>
              <p className="font-medium text-md text-gray-100 md:text-lg">
                Here is the technology that I use as a front end engineer
              </p>
            </div>
          </div>

          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              {technologies.map((el, i) => {
                return (
                  <Link href="/" key={i}>
                    <a
                      className="max-w-[120px] mx-4 py-4 text-neutral-50 font-bold text-xl opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                      key={el.id}
                    >
                      <p>{el.text}</p>
                    </a>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="pt-36 pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
              <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">
                Contact Us
              </h2>
              <p className="font-medium text-md text-secondary md:text-lg">
                "Get in touch with us today! Fill out the contact form or send us an email and we
                will get back to you as soon as possible."
              </p>
            </div>
          </div>
          <form>
            <div className="w-full lg:w-2/3 lg:mx-auto">
              <div className="w-full px-4 mb-8">
                <label htmlFor="name" className="text-base font-bold text-primary">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label htmlFor="email" className="text-base font-bold text-primary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full px-4 mb-8">
                <label htmlFor="message" className="text-base font-bold text-primary">
                  Pesan
                </label>
                <textarea
                  id="message"
                  className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                ></textarea>
              </div>
              <div className="w-full px-4">
                <button
                  type="submit"
                  className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500"
                  onClick={handleClick}
                >
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">FARISDEV</h2>
              <h3 className="font-bold text-2xl mb-2">Contact Us</h3>
              <p>fariez8@gmail.com</p>
              <p>Kediri</p>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Portfolio</h3>
              <ul className="text-slate-300">
                <li>
                  <Link href="/">
                    <a className="inline-block text-base hover:text-secondary mb-3">
                      Comfy Sloth E-commerce React
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block text-base hover:text-secondary mb-3">Natours</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block text-base hover:text-secondary mb-3">Omni Food</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="inline-block text-base hover:text-secondary mb-3">Mapty App</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/3">
              <h3 className="font-semibold text-xl text-white mb-5">Tautan</h3>
              <ul className="text-slate-300">
                <li>
                  <Link href="/">
                    <a className="inline-block text-base hover:text-secondary mb-3">Beranda</a>
                  </Link>
                </li>
                <li>
                  <Link href="#about">
                    <a className="inline-block text-base hover:text-secondary mb-3">Tentang Saya</a>
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio">
                    <a className="inline-block text-base hover:text-secondary mb-3">Portfolio</a>
                  </Link>
                </li>
                <li>
                  <Link href="#contact">
                    <a className="inline-block text-base hover:text-secondary mb-3">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              <Link href="https://www.youtube.com/channel/UCVJgYCbAyy4ZFOlGQfKpKrg">
                <a className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </Link>
              <Link href="https://instagram.com/wow_alfarisi">
                <a className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </Link>
              <Link href="https://twitter.com/wow_alfarisi">
                <a className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter</title>
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </Link>
              <Link href="https://linkedin.com/hamzah-al-farisi">
                <a className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </Link>
              <Link href="mailto:fariez8@gmail.com">
                <a className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white">
                  <svg
                    role="img"
                    width="20"
                    className="fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Gmail</title>
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </a>
              </Link>
            </div>

            <p className="font-medium text-xs text-slate-50 text-center">
              Dibuat dengan <span className="text-pink-500">❤️</span> oleh{" "}
              <a
                href="https://www.linkedin.com/in/hamzah-al-farisi/"
                className="font-bold text-slate-50 hover:opacity-80 hover:shadow-lg"
                target="_blank"
                rel="noreferrer"
              >
                Hamzah Al Farisi
              </a>
              , menggunakan{" "}
              <a
                href="https://tailwindcss.com/"
                className="font-bold text-sky-50 hover:opacity-80 hover:shadow-lg"
                target="blank"
                rel="noreferrer"
              >
                Tailwind CSS
              </a>{" "}
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
